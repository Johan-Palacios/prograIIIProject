import '../style.css'


let doctores = JSON.parse(localStorage.getItem('doctores')) || [];

export const getDoctores = () => {
  return doctores;
}

export const saveDoctoresToLocalStorage = () => {
  localStorage.setItem('doctores', JSON.stringify(doctores));
}

export const renderDoctores = () => {
  const doctorsRow = document.querySelector('#doctores_rows');
  doctorsRow.innerHTML = '';  // Limpiar filas existentes

  doctores.forEach((doctor) => {
    const row = document.createElement("tr");
    row.id = `doctor_row_${doctor.id}`;

    const id = document.createElement("td");
    id.innerText = `${doctor.id}`;

    const name = document.createElement("td");
    name.id = `doctor_name_${doctor.id}`;
    name.innerText = `${doctor.name}`;

    const specialty = document.createElement("td");
    specialty.id = `doctor_specialty_${doctor.id}`;
    specialty.innerText = `${doctor.specialty}`;

    const actions = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Eliminar";
    deleteBtn.addEventListener("click", () => {
      const index = doctores.findIndex(doc => doc.id === doctor.id);
      if (index !== -1) {
        doctores.splice(index, 1);
        saveDoctoresToLocalStorage();
        renderDoctores();
      }
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Editar";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Ingrese el nuevo nombre del doctor:", doctor.name);
      const newSpecialty = prompt("Ingrese la nueva especialidad del doctor:", doctor.specialty);
      
      if (newName !== null && newSpecialty !== null) {
        doctor.name = newName;
        doctor.specialty = newSpecialty;
        saveDoctoresToLocalStorage();
        renderDoctores();
      }
    });

    actions.appendChild(deleteBtn);
    actions.appendChild(editBtn);
    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(specialty);
    row.appendChild(actions);

    doctorsRow.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('doctor_add_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre_doctor_input').value;
    const especialidad = document.getElementById('especialidad_doctor_input').value;
    
    if (nombre && especialidad) {
      const nuevoDoctor = {
        id: doctores.length > 0 ? doctores[doctores.length - 1].id + 1 : 1,
        name: nombre,
        specialty: especialidad
      };
      doctores.push(nuevoDoctor);
      saveDoctoresToLocalStorage();
      renderDoctores();
      
      // Limpiar el formulario
      document.getElementById('doctor_add_form').reset();
    }
  });

  renderDoctores();  // Renderizar los doctores al cargar la página
});