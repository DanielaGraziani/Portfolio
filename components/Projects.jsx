import React from "react";
import recipesIdeas from '../public/assets/projects/RecipesIdeas.png'
import freeStyle from '../public/assets/projects/freestyle.png'
import takeASeat from '../public/assets/projects/takeaseat.png'
import ProjectsItem from "./ProjectsItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1040px] mx-auto px-2 py-16">
        <h2 className="uppercase tracking-widest mb-12">Proyectos</h2>
        <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-8">
            
       <ProjectsItem title='Recipes Ideas' backgroundImg={recipesIdeas} projectUrl='https://recipes-ideas.vercel.app/' projectRepo='https://github.com/DanielaGraziani/PI-FOODS'/>
       
       <ProjectsItem title='Free Style Store' backgroundImg={freeStyle} projectUrl='https://free-style-store.vercel.app/' projectRepo='https://github.com/DanielaGraziani/front-free-style'/>
       
       <ProjectsItem title='Take a Seat' backgroundImg={takeASeat} projectUrl='https://takeaseat.vercel.app/' projectRepo='https://github.com/DanielaGraziani/Take-A-Seat'/>
        </div>
      </div>
    </div>
  );
}
