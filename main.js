import './style.css'
import { getPacientes, renderPacientes } from './sections/pacientes'
import { getDoctores, renderDoctores } from './sections/doctores'
import { getCitas, renderCitas } from './sections/citas'
import saludImg from '/salud.png'
import axios from 'axios'

document.querySelector('#app').innerHTML = `
  <div>

    <header>
        <img src="${saludImg}" class="logo"/>
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
            <select id="genero_paciente_input" name="Genero" required>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </select>
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
            <input type="text" name="nombre" value="" placeholder="Ej. Roberto Ruiz" id="nombre_doctor_input" autocomplete="off" required>
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


      <! -- the only part that I've modified -->
      <section id="citas_section">
      <h2>Citas</h2>
      <div class="card">
          <form id="cita_add_form">
              <label for="paciente_cita_input">Id Paciente:</label>
              <input type="number" name="id paciente" placeholder="Ej. 1" id="paciente_cita_input" autocomplete="off" required>
              <label for="doctor_cita_input">Doctor:</label>
              <input type="text" name="doctor" placeholder="Ej. 2" id="doctor_cita_input" autocomplete="off" required>
              <label for="date_cita_input">Fecha:</label>
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


const formAddPacientes = document.querySelector('#paciente_add_form')
const formAddCitas = document.querySelector("#cita_add_form")
const formAddDoctor = document.querySelector("#doctor_add_form")

formAddPacientes.addEventListener("submit", async (ev) => {
  ev.preventDefault()
  const nombrePaciente = document.querySelector('#nombre_paciente_input').value
  const edadPaciente = document.querySelector('#edad_paciente_input').value
  const generoPaciente = document.querySelector('#genero_paciente_input').value

  const fetchData = async (nombrePaciente, edadPaciente, generoPaciente) => {
    console.log(nombrePaciente, edadPaciente, generoPaciente)
    edadPaciente = parseFloat(edadPaciente)
    await axios.post('http://127.0.0.1:8000/pacientes', {
      nombre: nombrePaciente,
      edad: edadPaciente,
      genero: generoPaciente
    }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
  }

  await fetchData(nombrePaciente, edadPaciente, generoPaciente)

  renderPacientes()

  formAddPacientes.reset()
})


formAddCitas.addEventListener("submit", async (ev) => {
  ev.preventDefault()
  const idPaciente = document.querySelector('#paciente_cita_input').value
  const idDoctor = document.querySelector('#doctor_cita_input').value
  const fecha = document.querySelector('#date_cita_input').value

  const fetchData = async (idPaciente, idDoctor, fecha) => {
    idPaciente = parseFloat(idPaciente)
    idDoctor = parseFloat(idDoctor)
    console.log(fecha)

    await axios.post('http://127.0.0.1:8000/citas', {
      id_doctore: idDoctor,
      id_paciente: idPaciente,
      fecha: fecha
    }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
  }

  await fetchData(idPaciente, idDoctor, fecha)

  renderCitas()

  formAddCitas.reset()
})


formAddDoctor.addEventListener("submit", async (ev) => {
  ev.preventDefault()
  const nombreDoctor = document.querySelector('#nombre_doctor_input').value
  const especialidadDoctor = document.querySelector('#especialidad_doctor_input').value

  const fetchData = async (nombreDoctor, especialidadDoctor) => {
    await axios.post('http://127.0.0.1:8000/doctores', {
      nombre: nombreDoctor,
      especialidad: especialidadDoctor
    }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
  }

  await fetchData(nombreDoctor, especialidadDoctor)

  renderDoctores()

  formAddDoctor.reset()
})

const refresh = async () => {

  await renderPacientes(await getPacientes())

  await renderDoctores(await getDoctores())

  await renderCitas(await getCitas())
}

refresh()
