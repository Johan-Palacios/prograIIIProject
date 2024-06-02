import '../style.css'


export const getCitas = () => {
  const doctores = [{ id: 1, paciente: "Peruano", doctor: "venezuela", date: "2024-06-01"}]
  return doctores
}

export const renderCitas = (citas) => {
  citas.map((cita) => {
    const row = document.createElement("tr")
    row.id = `cita_row_${cita.id}`
    const citasRow = document.querySelector('#citas_rows')

    const id = document.createElement("td")
    const paciente = document.createElement("td")
    paciente.id = `cita_paciente${cita.id}`
    const doctor = document.createElement("td")
    doctor.id = `cita_doctor_${cita.doctor}`
    const date = document.createElement("td")
    date.id = `cita_date_${cita.id}`

    const actions = document.createElement("td")

    const editBtn = document.createElement("button")
    editBtn.id = `cita_edit_${cita.id}`
    editBtn.innerText = "Editar"

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Eliminar"

    editBtn.addEventListener("click", () => {

    })

    deleteBtn.addEventListener("click", () => {
      const element = document.querySelector(`#cita_row_${cita.id}`)
      element.remove()
    })

    id.innerText = `${cita.id}`
    paciente.innerText = `${cita.paciente}`
    doctor.innerText = `${cita.doctor}`
    date.innerText = `${cita.date}`

    row.appendChild(id)
    row.appendChild(paciente)
    row.appendChild(doctor)
    row.appendChild(date)
    actions.appendChild(deleteBtn)
    actions.appendChild(editBtn)
    row.appendChild(actions)

    citasRow.appendChild(row)
  })

}
