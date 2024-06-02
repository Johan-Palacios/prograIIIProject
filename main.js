import './style.css'

document.querySelector('#app').innerHTML = `
  <div>


    <!--header with the logo-->
    <header>
        <h1 id="title">Bienvenido al Portal de Salud y Bienestar</h1>
    </header>
    <!--an extra menu cuz i can-->
    <nav>
        <div id="menu1"> 
            <div> 
                <a href="https://apps3.umg.edu.gt/" Target="_blank">Inicio</a>
                <a href="https://apps3.umg.edu.gt/" Target="_blank">Experiencia</a>
                <a href="https://apps3.umg.edu.gt/" Target="_blank">Descripción</a>
                <a href="https://apps3.umg.edu.gt/" Target="_blank">Contacto</a>
            </div>
        </div>
    </nav>
    <!--tables that are supposed to link with a db-->
    <main>
        <section>
            <h2>Pacientes</h2>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Juan Pérez</td>
                        <td>30</td>
                        <td>Masculino</td>
                        <td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </td>
                    </tr>
                    <!-- Más filas de ejemplo -->
                </tbody>
            </table>
        </section>
        <section>
            <h2>Doctores</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dr. Ana Gómez</td>
                        <td>Cardiología</td>
                        <td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </td>
                    </tr>
                    <!-- Más filas de ejemplo -->
                </tbody>
            </table>
        </section>
        <section>
            <h2>Citas</h2>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Juan Pérez</td>
                        <td>Dr. Ana Gómez</td>
                        <td>2023-06-01</td>
                        <td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </td>
                    </tr>
                    <!-- Más filas de ejemplo -->
                </tbody>
            </table>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Vida Activa | Todos los derechos reservados.</p>
    </footer>
    
    
  </div>
`

// <a href="https://vitejs.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// </a>
// <h1>Hello Vite!</h1>
// <div class="card">
//   <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
//   Click on the Vite logo to learn more
// </p>
// setupCounter(document.querySelector('#counter'))
