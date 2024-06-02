import "../style.css"

export const getPacientes = () => {
  const pacientes = [{ id: 1, name: "Juan Pérez", age: 30, gender: "Masculino" }]
  return pacientes
}

export const renderPacientes = (pacientes) => {
  pacientes.map((paciente) => {
    const row = document.createElement("tr")
    row.id = `paciente_row_${paciente.id}`
    const pacientesRow = document.querySelector('#pacientes_rows')

    const id = document.createElement("td")
    const name = document.createElement("td")
    name.id = `paciente_name_${paciente.id}`
    const age = document.createElement("td")
    age.id = `paciente_age_${paciente.id}`
    const gender = document.createElement("td")
    gender.id = `paciente_gender_${paciente.id}`

    const actions = document.createElement("td")

    const editBtn = document.createElement("button")
    editBtn.id = `paciente_edit_${paciente.id}`
    editBtn.innerText = "Editar"
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Eliminar"

    editBtn.addEventListener("click", () => {

    })

    deleteBtn.addEventListener("click", () => {
      const element = document.querySelector(`#paciente_row_${paciente.id}`)
      element.remove()
    })


    id.innerText = `${paciente.id}`
    name.innerText = `${paciente.name}`
    age.innerText = `${paciente.age}`
    gender.innerText = `${paciente.gender}`


    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(age)
    row.appendChild(gender)
    actions.appendChild(deleteBtn)
    actions.appendChild(editBtn)
    row.appendChild(actions)

    pacientesRow.appendChild(row)
  })

}
