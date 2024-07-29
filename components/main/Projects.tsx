import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sorting_visualizer.png"
          title="Sorting Visualizer"
          description="Sorting visualizer made with react"
        />
        <ProjectCard
          src="/shopping_cart.png"
          title="Fake Store"
          description="A fake store with a shopping cart. Made using react, typescript and MUI"
        />
      </div>
    </div>
  );
};

export default Projects;
