import '../style.css';
import axios from 'axios'

export const getCitas = async () => {
  const citas = await axios.get("http://127.0.0.1:8000/citas", {
    headers: {
      Accept: 'application/json'
    },
  })
  return citas.data
};


export const renderCitas = async () => {
  const citas = await getCitas()
  const citasRow = document.querySelector('#citas_rows');

  citas.map((citaIter) => {
    if (!document.querySelector(`#cita_row_${citaIter.id_cita}`)) {
      const row = document.createElement("tr");
      row.id = `cita_row_${citaIter.id_cita}`;

      const id = document.createElement("td");
      id.innerText = `${citaIter.id_cita}`;

      const paciente = document.createElement("td");
      paciente.id = `cita_paciente_${citaIter.id_cita}`;
      paciente.innerText = `${citaIter.id_paciente}`;

      const doctor = document.createElement("td");
      doctor.id = `cita_doctor_${citaIter.id_cita}`;
      doctor.innerText = `${citaIter.id_doctor}`;

      const date = document.createElement("td");
      date.id = `cita_date_${citaIter.id_cita}`;
      date.innerText = `${citaIter.fecha}`;

      const actions = document.createElement("td");

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Eliminar";

      deleteBtn.addEventListener("click", async () => {
        const element = document.querySelector(`#cita_row_${citaIter?.id_cita}`)
        await axios.delete(`http://127.0.0.1:8000/citas/${citaIter?.id_cita}`)
        element.remove()
      });

      const editBtn = document.createElement("button");
      editBtn.innerText = "Editar";
      editBtn.addEventListener("click", () => {
        let cita = {
          id_paciente: 0,
          id_doctore: 0,
          fecha: ""
        }
        const pacienteId = prompt("Ingrese Paciente ID", paciente.innerHTML)
        const doctorId = prompt("Ingrese el Id del doctor", doctor.innerHTML)
        const fecha = prompt("Ingrese la fecha del Doctor", date.innerHTML)

        if (pacienteId !== null && doctorId !== null && fecha !== null) {
          cita.id_paciente = pacienteId
          cita.id_doctore = doctorId
          cita.fecha = fecha

          paciente.innerHTML = pacienteId
          doctor.innerHTML = doctorId
          date.innerHTML = fecha

          axios.put(`http://127.0.0.1:8000/citas/${citaIter.id_cita}`, cita, {
            headers: {
              Accept: 'application/json'
            }
          })
        }


      })

      actions.appendChild(deleteBtn);
      actions.appendChild(editBtn);
      row.appendChild(id);
      row.appendChild(paciente);
      row.appendChild(doctor);
      row.appendChild(date);
      row.appendChild(actions);

      citasRow.appendChild(row);
    }
  });
};
