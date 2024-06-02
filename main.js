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
        <div class="card">
          <form id="paciente_add_form">
            <label for="nombre_paciente_input">Nombre Paciente:</label>
            <input type="text" name="nombre" value="" placeholder="Ej. Paco Perez" id="nombre_paciente_input" autocomplete="off" required>
            <label for="edad_paciente_input">Edad Paciente:</label>
            <input type="number" name="Edad" min="1" max="100" placeholder="Ej. 30" id="edad_paciente_input" autocomplete="off" required>
            <label for="genero_paciente_input">Genero Paciente:</label>
            <input type="text" name="Genero" value="" placeholder="Ej. Masculino" id="genero_paciente_input" autocomplete="off" required>
            <button type="submit" id="add_paciente_button">Ingresar Paciente</button>
          </form>
        </div>
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
        <div class="card">
          <form id="doctor_add_form">
            <label for="nombre_doctor_input">Nombre doctor:</label>
            <input type="text" name="nombre" value="" placeholder="Ej. Menso Ruiz" id="nombre_doctor_input" autocomplete="off" required>
            <label for="especialidad_doctor_input">Especialidad doctor:</label>
            <input type="text" name="Especialidad" placeholder="Ej. Cardiologo" id="especialidad_doctor_input" autocomplete="off" required>
            <button type="submit" id="add_doctor_button">Ingresar doctor</button>
          </form>
        </div>
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
        <div class="card">
          <form id="cita_add_form">
            <label for="paciente_cita_input">Id Paciente:</label>
            <input type="number" name="id paciente" value="" placeholder="Ej. 1" id="paciente_cita_input" autocomplete="off" required>
            <label for="doctor_cita_input">Doctor cita:</label>
            <input type="text" name="Especialidad" placeholder="Ej. 2" id="doctor_cita_input" autocomplete="off" required>
            <label for="date_cita_input">Doctor cita:</label>
            <input type="date" name="Fecha" placeholder="Ingrese Fecha de Cita" id="date_cita_input" autocomplete="off" required>
            <button type="submit" id="add_cita_button">Ingresar cita</button>
          </form>
        </div>
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
