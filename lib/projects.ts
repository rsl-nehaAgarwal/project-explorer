import { cache } from "react";
import data from "@/data/projects.json";
import { sleep } from "@/lib/utils";

export type ProjectStatus = "active" | "completed" | "on-hold";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  owner: string;
  progress: number;
  tags: string[];
  team: { name: string; role: string }[];
  tasks: { id: string; title: string; status: "todo" | "in-progress" | "done" }[];
  activity: { when: string; text: string }[];
};

const projects = data as unknown as Project[];

export const STATUSES: ProjectStatus[] = ["active", "completed", "on-hold"];

export function isStatus(value: string | undefined): value is ProjectStatus {
  return STATUSES.includes(value as ProjectStatus);
}

/** Project 6 fails the first time it is loaded, so the error UI and "Try again" can be demonstrated. */
export const FLAKY_PROJECT_ID = "6";

declare global {
  var __failedProjectLoads: Set<string> | undefined;
}

/** Fast, synchronous lookup used for headers, navigation and sidebars. */
export function getProjectSummary(id: string) {
  const p = projects.find((project) => project.id === id);
  return p ? { id: p.id, name: p.name, status: p.status, owner: p.owner } : undefined;
}

export function getAllProjects(): Project[] {
  return projects;
}

/** Simulates a quick list query with optional search / status filtering. */
export async function getProjects(filters: {
  search?: string;
  status?: ProjectStatus;
}): Promise<Project[]> {
  await sleep(300);
  const term = filters.search?.toLowerCase() ?? "";
  return projects.filter((p) => {
    const matchesStatus = !filters.status || p.status === filters.status;
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tags.some((tag) => tag.toLowerCase().includes(term));
    return matchesStatus && matchesSearch;
  });
}

/** Simulates a slow request for full project details. cache() de-duplicates it within one render. */
export const getProject = cache(async (id: string): Promise<Project | null> => {
  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  await sleep(1200);

  const failed = (globalThis.__failedProjectLoads ??= new Set<string>());
  if (project.id === FLAKY_PROJECT_ID && !failed.has(project.id)) {
    failed.add(project.id);
    throw new Error("Could not load project data.");
  }
  return project;
});
