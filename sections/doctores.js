import '../style.css'


export const getDoctores = () => {
  const doctores = [{ id: 1, name: "Che", specialty: "Cardiologo"}]
  return doctores
}

export const renderDoctores = (doctores) => {
  doctores.map((doctor) => {
    const row = document.createElement("tr")
    row.id = `doctor_row_${doctor.id}`
    const doctorsRow = document.querySelector('#doctores_rows')

    const id = document.createElement("td")
    const name = document.createElement("td")
    name.id = `doctor_name_${doctor.id}`
    const specialty = document.createElement("td")
    specialty.id = `doctor_specialty_${doctor.id}`

    const actions = document.createElement("td")

    const editBtn = document.createElement("button")
    editBtn.id = `doctor_edit_${doctor.id}`
    editBtn.innerText = "Editar"
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Eliminar"

    editBtn.addEventListener("click", () => {

    })

    deleteBtn.addEventListener("click", () => {
      const element = document.querySelector(`#doctor_row_${doctor.id}`)
      element.remove()
    })


    id.innerText = `${doctor.id}`
    name.innerText = `${doctor.name}`
    specialty.innerText = `${doctor.specialty}`


    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(specialty)
    actions.appendChild(deleteBtn)
    actions.appendChild(editBtn)
    row.appendChild(actions)

    doctorsRow.appendChild(row)
  })

}
