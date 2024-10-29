// app/projects/[slug]/page.js
import { getSingleProject } from "@/services/project";
import ProjectDetailsClient from "./_components/ProjectDetailsClient";

const ProjectDetailsPage = async ({ params }) => {
  const project = await getSingleProject(params.slug);

  if (!project || !project.success) {
    return <div>Error loading project details.</div>;
  }

  return (
    <div>
      {/* Render the client component and pass the project data */}
      <ProjectDetailsClient project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
