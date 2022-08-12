import React from "react";
import recipesIdeas from "../public/assets/projects/RecipesIdeas.png";
import freeStyle from "../public/assets/projects/freestyle1.png";
import takeASeat from "../public/assets/projects/takeaseat1.png";
import ProjectsItem from "./ProjectsItem";

export default function Projects() {


  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1040px] mx-auto px-2 py-16">
        <h2 className="uppercase tracking-widest mb-12">Proyectos</h2>
        <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectsItem
            title="Recipes Ideas"
            backgroundImg={recipesIdeas}
            projectUrl="https://recipes-ideas.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/PI-FOODS"
            description='Desarrollo de una SPA (Single Page Application).
            Todos los componentes fueron desarrollados con CSS sin uso de librerías externas.
            La aplicación consume datos desde la API "Spoonacular".
            Algunos de los features agregados fueron: búsquedas, ordenamiento, filtrado y 
            formulario controlado.'
            technologies="React | Redux | Node | Express | Sequelize - PostgreSQL | Vercel"
          />

          <ProjectsItem
            title="Free Style Store"
            backgroundImg={freeStyle}
            projectUrl="https://free-style-store.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/front-free-style"
            description="Creación de una E-commerce orientada a la venta de indumentaria y accesorios.
            Algunos de los features son: login, búsqueda, filtrado, formulario controlado, 
            carrito de compra, pasarela de pago, notificaciones, favoritos."
            technologies="React | Redux | Tailwind CSS | Vercel | Node | Express | Heroku | Sequelize - PostgreSQL | Firebase"
          />

          <ProjectsItem
            title="Take a Seat"
            backgroundImg={takeASeat}
            projectUrl="https://takeaseat.vercel.app/"
            projectRepo="https://github.com/DanielaGraziani/Take-A-Seat"
            description='Desarrollo de una SPA (Single Page Application) implementando React.
            Todos los componentes fueron desarrollados con CSS sin uso de librerías
            externas.
            La aplicación consume datos desde la API "The Movie Database".'
            technologies="React"
          />
        </div>
      </div>
    </div>
  );
}
