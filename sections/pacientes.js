import "../style.css"
import axios from 'axios'

export const getPacientes = async () => {
  const pacientes = await axios.get("http://127.0.0.1:8000/pacientes", {
    headers: {
      Accept: 'application/json'
    },
  })
  return pacientes.data
}

export const renderPacientes = async () => {
  const pacientes = await getPacientes()
  const pacientesRow = document.querySelector('#pacientes_rows')
  pacientes.map((pacienteIter) => {
    if (!document.getElementById(`paciente_row_${pacienteIter.id_paciente}`)) {
      const row = document.createElement("tr")
      row.id = `paciente_row_${pacienteIter.id_paciente}`

      const id = document.createElement("td")
      const name = document.createElement("td")
      name.id = `paciente_name_${pacienteIter.id_paciente}`
      const age = document.createElement("td")
      age.id = `paciente_age_${pacienteIter.id_paciente}`
      const gender = document.createElement("td")
      gender.id = `paciente_gender_${pacienteIter.id_paciente}`

      const actions = document.createElement("td")

      const editBtn = document.createElement("button")
      editBtn.id = `paciente_edit_${pacienteIter.id_paciente}`
      editBtn.innerText = "Editar"
      const deleteBtn = document.createElement("button")
      deleteBtn.innerText = "Eliminar"

      editBtn.addEventListener("click", () => {
        let paciente = {
          nombre: "",
          edad: 0,
          genero: "",
        }

        const nombrePaciente = prompt("Ingrese Nombre de Paciente", name.innerHTML);
        const edadPaciente = prompt("Ingrese Edad de Paciente:", age.innerHTML);
        let generoPaciente = prompt("Ingrese Genero de Paciente (M o F)", gender.innerHTML);
        while (generoPaciente !== "M" && generoPaciente !== "F") {
          generoPaciente = prompt("Ingrese Genero de Paciente (M o F)", gender.innerHTML);
        }

        if (nombrePaciente !== null && edadPaciente !== null && generoPaciente !== null) {
          paciente.nombre = nombrePaciente
          paciente.edad = parseFloat(edadPaciente)
          paciente.genero = generoPaciente

          name.innerHTML = nombrePaciente
          age.innerHTML = edadPaciente
          gender.innerHTML = generoPaciente
          axios.put(`http://127.0.0.1:8000/pacientes/${pacienteIter.id_paciente}`, paciente, {
            headers: {
              Accept: 'application/json'
            }
          })
        }

      })

      deleteBtn.addEventListener("click", async () => {
        const element = document.querySelector(`#paciente_row_${pacienteIter?.id_paciente}`)
        await axios.delete(`http://127.0.0.1:8000/pacientes/${pacienteIter?.id_paciente}`)
        element.remove()
      })


      id.innerText = `${pacienteIter?.id_paciente ?? ''}`
      name.innerText = `${pacienteIter?.nombre ?? ''}`
      age.innerText = `${pacienteIter?.edad ?? ''}`
      gender.innerText = `${pacienteIter?.genero ?? ''}`


      row.appendChild(id)
      row.appendChild(name)
      row.appendChild(age)
      row.appendChild(gender)
      actions.appendChild(deleteBtn)
      actions.appendChild(editBtn)
      row.appendChild(actions)

      pacientesRow.appendChild(row)
    }
  })
}
