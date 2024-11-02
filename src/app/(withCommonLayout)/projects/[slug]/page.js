// app/projects/[slug]/page.js
import { getAllProjects, getSingleProject } from "@/services/project"; // Assume this function exists
import ProjectDetailsClient from "./_components/ProjectDetailsClient";

// Function to generate static params (slugs)
export async function generateStaticParams() {
  const slugs = await getAllProjects(); // Fetch all slugs from your API or data source
  return slugs?.data?.map((slug) => {
    return {
      slug: slug?._id,
    };
  });
}

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
