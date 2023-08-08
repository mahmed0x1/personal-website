export interface ProjectData {
  name: string;
  description: string;
  images: string[];
  source_link: string;
  demo_link: string;
  padding: boolean;
}

export async function getProjects(): Promise<ProjectData[]> {
  try {
    const request = await fetch("/projects/list.json");
    const json = await request.json();
    const { projects } = json;
    return projects;
  } catch (e) {
    console.log(e);
    return [];
  }
}
