import './style.css'
import { getPacientes, renderPacientes } from './sections/pacientes'
import {getDoctores, renderDoctores} from './sections/doctores'
import {getCitas, renderCitas} from './sections/citas'
import saludImg from './public/salud.png'

document.querySelector('#app').innerHTML = `
  <div>
    <header>
        <img src="${saludImg}" class="logo" alt="Logo de Salud y Bienestar"/>
        <h1 id="title">Bienvenido al Portal de Salud y Bienestar</h1>
    </header>
    <main id="main_sections">
      <section id="pacientes_section">
        <h2>Pacientes</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="pacientes_rows">
          </tbody>
        </table>
      </section>
      <section id="doctores_section">
        <h2>Doctores</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="doctores_rows">
          </tbody>
        </table>
      </section>
      <section id="citas_section">
        <h2>Citas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Paciente</th>
              <th>Doctor</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="citas_rows">
          </tbody>
        </table>
      </section>
    </main>
  </div>
`

renderPacientes(getPacientes())
renderDoctores(getDoctores())
renderCitas(getCitas())


// <a href="https://vitejs.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// </a>
// <h1>Hello Vite!</h1>
// <div class="card">
//   <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
//   Click on the Vite logo to learn more
// </p>
// setupCounter(document.querySelector('#counter'))
