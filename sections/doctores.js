import '../style.css'
import axios from 'axios'


export const getDoctores = async () => {
  const doctores = await axios.get("http://127.0.0.1:8000/doctores", {
    headers: {
      Accept: 'application/json'
    }
  })
  return doctores.data
}

export const renderDoctores = async () => {
  const doctores = await getDoctores()
  const doctorsRow = document.querySelector('#doctores_rows');
  doctores.map((doctorIter) => {
    if (!document.querySelector(`#doctor_row_${doctorIter.id_doctore}`)) {

      const row = document.createElement("tr");
      row.id = `doctor_row_${doctorIter.id_doctore}`;

      const id = document.createElement("td");
      id.innerText = `${doctorIter.id_doctore}`;

      const name = document.createElement("td");
      name.id = `doctor_name_${doctorIter.id_doctore}`;
      name.innerText = `${doctorIter.nombre}`;

      const specialty = document.createElement("td");
      specialty.id = `doctor_specialty_${doctorIter.id_doctore}`;
      specialty.innerText = `${doctorIter.especialidad}`;

      const actions = document.createElement("td");

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Eliminar";
      deleteBtn.addEventListener("click", async () => {
        const element = document.querySelector(`#doctor_row_${doctorIter?.id_doctore}`)
        await axios.delete(`http://127.0.0.1:8000/doctores/${doctorIter?.id_doctore}`)
        element.remove()
      })

      const editBtn = document.createElement("button");
      editBtn.innerText = "Editar";
      editBtn.addEventListener("click", () => {
        let doctor = {
          nombre: "",
          especialidad: ""
        }
        const nombre = prompt("Ingrese Nombre del Doctor", name.innerHTML)
        const especialidad = prompt("Ingrese la especialidad del Doctor", specialty.innerHTML)

        if (nombre !== null && especialidad !== null) {
          doctor.nombre = nombre
          doctor.especialidad = especialidad

          name.innerHTML = nombre
          specialty.innerHTML = especialidad

          axios.put(`http://127.0.0.1:8000/doctores/${doctorIter.id_doctore}`, doctor, {
            headers: {
              Accept: 'application/json'
            }
          })
        }

      });

      actions.appendChild(deleteBtn);
      actions.appendChild(editBtn);
      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(specialty);
      row.appendChild(actions);

      doctorsRow.appendChild(row);
    }
  });
}
