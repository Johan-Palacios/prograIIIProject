import "../style.css"
import axios from 'axios'

export const getPacientes = async () => {
  const pacientes = await axios.get("http://127.0.0.1:8000/pacientes", {
    headers: {
      Accept: 'application/json'
    }
  })
  return pacientes.data
}

export const renderPacientes = async () => {
  const pacientes = await getPacientes()
  pacientes.map((paciente) => {
    if (!document.getElementById(`paciente_row_${paciente.id_paciente}`)) {
      const row = document.createElement("tr")
      row.id = `paciente_row_${paciente.id_paciente}`
      const pacientesRow = document.querySelector('#pacientes_rows')

      const id = document.createElement("td")
      const name = document.createElement("td")
      name.id = `paciente_name_${paciente.id_paciente}`
      const age = document.createElement("td")
      age.id = `paciente_age_${paciente.id_paciente}`
      const gender = document.createElement("td")
      gender.id = `paciente_gender_${paciente.id_paciente}`

      const actions = document.createElement("td")

      const editBtn = document.createElement("button")
      editBtn.id = `paciente_edit_${paciente.id_paciente}`
      editBtn.innerText = "Editar"
      const deleteBtn = document.createElement("button")
      deleteBtn.innerText = "Eliminar"

      editBtn.addEventListener("click", () => {

      })

      deleteBtn.addEventListener("click", async () => {
        const element = document.querySelector(`#paciente_row_${paciente?.id_paciente}`)
        await axios.delete(`http://127.0.0.1:8000/pacientes/${paciente?.id_paciente}`)
        element.remove()
      })


      id.innerText = `${paciente?.id_paciente ?? ''}`
      name.innerText = `${paciente?.nombre ?? ''}`
      age.innerText = `${paciente?.edad ?? ''}`
      gender.innerText = `${paciente?.genero ?? ''}`


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
