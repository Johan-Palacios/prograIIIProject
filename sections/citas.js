import '../style.css';

let citas = JSON.parse(localStorage.getItem('citas')) || [];

// Función para obtener citas
export const getCitas = () => {
  return citas;
};

// Función para guardar citas en localStorage
export const saveCitasToLocalStorage = () => {
  localStorage.setItem('citas', JSON.stringify(citas));
};

// Función para renderizar citas
export const renderCitas = () => {
  const citasRow = document.querySelector('#citas_rows');
  citasRow.innerHTML = '';  // Limpiar filas existentes

  citas.forEach((cita) => {
    const row = document.createElement("tr");
    row.id = `cita_row_${cita.id}`;

    const id = document.createElement("td");
    id.innerText = `${cita.id}`;

    const paciente = document.createElement("td");
    paciente.id = `cita_paciente_${cita.id}`;
    paciente.innerText = `${cita.paciente}`;

    const doctor = document.createElement("td");
    doctor.id = `cita_doctor_${cita.id}`;
    doctor.innerText = `${cita.doctor}`;

    const date = document.createElement("td");
    date.id = `cita_date_${cita.id}`;
    date.innerText = `${cita.date}`;

    const actions = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.addEventListener("click", () => {
      const index = citas.findIndex(c => c.id === cita.id);
      if (index !== -1) {
        citas.splice(index, 1);
        saveCitasToLocalStorage();
        renderCitas();
      }
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Editar";
    editBtn.addEventListener("click", () => {
      const newPaciente = prompt("Ingrese el nuevo id del paciente:", cita.paciente);
      const newDoctor = prompt("Ingrese el nuevo doctor de la cita:", cita.doctor);
      const newDate = prompt("Ingrese la nueva fecha de la cita (YYYY-MM-DD):", cita.date);
      
      if (newPaciente !== null && newDoctor !== null && newDate !== null) {
        cita.paciente = newPaciente;
        cita.doctor = newDoctor;
        cita.date = newDate;
        saveCitasToLocalStorage();
        renderCitas();
      }
    });

    actions.appendChild(deleteBtn);
    actions.appendChild(editBtn);
    row.appendChild(id);
    row.appendChild(paciente);
    row.appendChild(doctor);
    row.appendChild(date);
    row.appendChild(actions);

    citasRow.appendChild(row);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cita_add_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const paciente = document.getElementById('paciente_cita_input').value;
    const doctor = document.getElementById('doctor_cita_input').value;
    const date = document.getElementById('date_cita_input').value;
    
    if (paciente && doctor && date) {
      const nuevaCita = {
        id: citas.length > 0 ? citas[citas.length - 1].id + 1 : 1,
        paciente,
        doctor,
        date
      };
      citas.push(nuevaCita);
      saveCitasToLocalStorage();
      renderCitas();
      
      // Limpiar el formulario
      document.getElementById('cita_add_form').reset();
    }
  });

  renderCitas();
});
