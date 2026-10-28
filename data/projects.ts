export type ProjectStatus = "In Progress" | "Completed" | "On Hold";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  category: string;
  progress: number;
  startDate: string;
  dueDate: string;
  owner: string;
  team: string[];
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  activity: {
    date: string;
    message: string;
    author: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "website-redesign",
    name: "Website Redesign",
    description:
      "Refresh the company website with a modern design, improved accessibility, and a smoother user experience.",
    status: "In Progress",
    category: "Design",
    progress: 65,
    startDate: "2026-09-01",
    dueDate: "2026-11-15",
    owner: "Neha Agarwal",
    team: ["Neha Agarwal", "Rahul Mehta", "Priya Sharma"],
    tasks: [
      { id: 1, title: "Review existing website", completed: true },
      { id: 2, title: "Create design system", completed: true },
      { id: 3, title: "Build responsive pages", completed: false },
      { id: 4, title: "Complete accessibility testing", completed: false },
    ],
    activity: [
      {
        date: "2026-10-20",
        message: "Responsive page development started.",
        author: "Rahul Mehta",
      },
      {
        date: "2026-10-18",
        message: "Design system approved.",
        author: "Priya Sharma",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description:
      "Develop a cross-platform mobile experience that helps customers access services and manage their accounts.",
    status: "In Progress",
    category: "Development",
    progress: 40,
    startDate: "2026-09-15",
    dueDate: "2026-12-10",
    owner: "Rahul Mehta",
    team: ["Rahul Mehta", "Anita Singh", "Vikram Patel"],
    tasks: [
      { id: 1, title: "Define application requirements", completed: true },
      { id: 2, title: "Design application screens", completed: true },
      { id: 3, title: "Implement authentication", completed: false },
      { id: 4, title: "Test on mobile devices", completed: false },
    ],
    activity: [
      {
        date: "2026-10-19",
        message: "Authentication implementation planned.",
        author: "Anita Singh",
      },
    ],
  },
  {
    id: "brand-refresh",
    name: "Brand Refresh",
    description:
      "Unify the visual identity with updated brand guidelines, typography, colors, and reusable design assets.",
    status: "Completed",
    category: "Design",
    progress: 100,
    startDate: "2026-07-01",
    dueDate: "2026-09-30",
    owner: "Priya Sharma",
    team: ["Priya Sharma", "Neha Agarwal"],
    tasks: [
      { id: 1, title: "Audit existing brand assets", completed: true },
      { id: 2, title: "Finalize color palette", completed: true },
      { id: 3, title: "Publish brand guidelines", completed: true },
    ],
    activity: [
      {
        date: "2026-09-30",
        message: "Brand guidelines published successfully.",
        author: "Priya Sharma",
      },
    ],
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description:
      "Create an analytics workspace with clear visualizations, project metrics, and actionable reporting.",
    status: "On Hold",
    category: "Analytics",
    progress: 20,
    startDate: "2026-10-01",
    dueDate: "2026-12-20",
    owner: "Anita Singh",
    team: ["Anita Singh", "Vikram Patel"],
    tasks: [
      { id: 1, title: "Identify key metrics", completed: true },
      { id: 2, title: "Prepare dashboard wireframes", completed: false },
      { id: 3, title: "Build interactive charts", completed: false },
    ],
    activity: [
      {
        date: "2026-10-12",
        message: "Project paused pending requirements approval.",
        author: "Anita Singh",
      },
    ],
  },
  {
    id: "customer-portal",
    name: "Customer Portal",
    description:
      "Build a self-service portal where customers can review information, submit requests, and track progress.",
    status: "In Progress",
    category: "Development",
    progress: 75,
    startDate: "2026-08-10",
    dueDate: "2026-11-25",
    owner: "Vikram Patel",
    team: ["Vikram Patel", "Rahul Mehta", "Neha Agarwal"],
    tasks: [
      { id: 1, title: "Create portal wireframes", completed: true },
      { id: 2, title: "Implement customer profile", completed: true },
      { id: 3, title: "Add request tracking", completed: false },
      { id: 4, title: "Run acceptance testing", completed: false },
    ],
    activity: [
      {
        date: "2026-10-21",
        message: "Customer profile integration completed.",
        author: "Vikram Patel",
      },
    ],
  },
  {
    id: "api-modernization",
    name: "API Modernization",
    description:
      "Improve API consistency, documentation, and reliability to support future product integrations.",
    status: "Completed",
    category: "Infrastructure",
    progress: 100,
    startDate: "2026-06-01",
    dueDate: "2026-09-15",
    owner: "Anita Singh",
    team: ["Anita Singh", "Rahul Mehta"],
    tasks: [
      { id: 1, title: "Audit existing endpoints", completed: true },
      { id: 2, title: "Standardize API responses", completed: true },
      { id: 3, title: "Publish API documentation", completed: true },
    ],
    activity: [
      {
        date: "2026-09-15",
        message: "API modernization completed.",
        author: "Anita Singh",
      },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
