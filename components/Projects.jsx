import React from "react";
import recipesIdeas from "../public/assets/projects/RecipesIdeas.png";
import freeStyle from "../public/assets/projects/freestyle1.png";
import takeASeat from "../public/assets/projects/takeaseat1.png";
import weatherApp from '../public/assets/projects/weather1.png'
import ProjectsItem from "./ProjectsItem";

export default function Projects() {


  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1040px] mx-auto px-2 py-16">
        <h2 className="uppercase tracking-widest mb-12">Proyectos</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
          <ProjectsItem
            title="Recipes Ideas"
            backgroundImg={recipesIdeas}
            projectUrl="https://recipes-ideas.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/PI-FOODS"
            description='
            La aplicación consume datos desde la API "Spoonacular".'
            technologies="React | Redux | Node | Express | Sequelize - PostgreSQL | Vercel"
          />

          <ProjectsItem
            title="Free Style Store"
            backgroundImg={freeStyle}
            projectUrl="https://free-style-store.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/front-free-style"
            description="Creación de una E-commerce orientada a la venta de indumentaria y accesorios"
            technologies="React | Redux | Tailwind | Node | Express | Sequelize - PostgreSQL | Firebase"
          />

          <ProjectsItem
            title="Take a Seat"
            backgroundImg={takeASeat}
            projectUrl="https://takeaseat.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/Take-A-Seat"
            description='
            La aplicación consume datos desde la API "The Movie Database".'
            technologies="React"
          />

            <ProjectsItem
            title="Weather App"
            backgroundImg={weatherApp}
            projectUrl="https://weather-app-dd.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/Weather-App"
            description='
            La aplicación consume datos desde la API "Open Weather".'
            technologies="React"
          />
        </div>
      </div>
    </div>
  );
}
