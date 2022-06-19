import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         planets: [
            {
               "id": "mars",
               "name": "Mars",
               "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
               "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
               "link": "https://en.wikipedia.org/wiki/Mars"
            },
            {
               "id": "pluto",
               "name": "Pluto",
               "description": "Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid (or ice dwarf).",
               "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
               "link": "https://en.wikipedia.org/wiki/Pluto"
            },
            {
               "id": "uranus",
               "name": "Uranus",
               "description": "Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
               "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
               "link": "https://en.wikipedia.org/wiki/Uranus"
            }

         ]

      }
   }

   render() {
      return (
         //todo componente DEVE estar dentro de um único nó
         // por isso usar div, fragment...
         <Fragment>
            <h3>Lista de planetas</h3>
            <button onClick={showMessage}>Clique para testar log</button>
            <hr />

            {this.state.planets.map((planet) =>
               <Planet
                  name={planet.name}
                  description={planet.description}
                  img_url={planet.img_url}
                  link={planet.link}
               />
            )}

         </Fragment>
      )
   }
}



const showMessage = () => {
   console.log("Meu Primeiro evento")
}

export default Planets;