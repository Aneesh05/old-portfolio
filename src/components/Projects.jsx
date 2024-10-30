import ProjectCard from "./ProjectCard";
import projects from "../utils/projectsData.jsx";

const Projects = () => {
    return (
        <div className="flex flex-col justify-center md:h-800px max-w-6xl mx-auto">
            <h2 className="text-center font-medium text-2xl md:text-3xl mb-10">
                Personal Projects
            </h2>

            <div className="grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {projects.map(
                    (
                        { imgSrc, title, description, tags, projectLink, codeLink },
                        key
                    ) => (
                        <div key={key} className="w-full max-w-lg min-h-[700px]">
                            <ProjectCard
                                imgSrc={imgSrc}
                                title={title}
                                description={description}
                                tags={tags}
                                projectLink={projectLink}
                                codeLink={codeLink}
                                index={key}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;