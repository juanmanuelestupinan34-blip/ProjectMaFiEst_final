# MaFiEst

## Descripción del Proyecto
MaFiEst es una plataforma educativa diseñada para gestionar grupos académicos, cursos y logros de los usuarios. La aplicación permite a los administradores crear grupos, gestionar usuarios y asignar roles, mientras que los docentes pueden subir materiales educativos y los estudiantes pueden seguir su progreso y logros.

## Estructura del Proyecto

### Backend (mafiest_backend)
- **Controladores**: Manejan la lógica de negocio y las solicitudes HTTP.
  - `auth.js`: Autenticación de usuarios.
  - `users.js`: Gestión de usuarios.
  - `groups.js`: Gestión de grupos académicos.
  - `progress.js`: Seguimiento del progreso de los estudiantes.
  - `achievements.js`: Gestión de logros.
  - `contacts.js`: Manejo de solicitudes de contacto.
  - `advisories.js`: Manejo de solicitudes de asesoría.

- **Modelos**: Definición de las tablas en la base de datos PostgreSQL.
  - `User.js`: Tabla de usuarios.
  - `Group.js`: Tabla de grupos académicos.
  - `Progress.js`: Tabla de progreso de cursos.
  - `Achievement.js`: Tabla de logros.
  - `UserAchievement.js`: Relación entre usuarios y logros.
  - `Contact.js`: Tabla de contactos.
  - `Advisory.js`: Tabla de asesorías.

- **Rutas**: Definición de los endpoints de la API.
  - `auth.js`: Rutas de autenticación.
  - `users.js`: Rutas de gestión de usuarios.
  - `groups.js`: Rutas de gestión de grupos.
  - `progress.js`: Rutas de progreso.
  - `achievements.js`: Rutas de logros.
  - `contacts.js`: Rutas de contacto.
  - `advisories.js`: Rutas de asesorías.

- **Utilidades**: Funciones y configuraciones auxiliares.
  - `config.js`: Variables de entorno.
  - `db.js`: Conexión a la base de datos.
  - `logger.js`: Gestión de logs.
  - `middleware.js`: Middlewares para autenticación.

### Frontend (mafiest_frontend)
- **Páginas**: Componentes que representan las diferentes vistas de la aplicación.
  - **Admin**: Panel de control y gestión de usuarios y grupos.
  - **Estudiante**: Dashboard, cursos, progreso y logros.
  - **Docente**: Dashboard y subida de materiales.
  - **Independiente**: Dashboard y acceso a cursos.

- **Componentes**: Elementos reutilizables de la interfaz.
  - `Navbar.jsx`: Barra de navegación.
  - `Sidebar.jsx`: Barra lateral.
  - `CourseCard.jsx`: Tarjeta de curso.
  - `AchievementCard.jsx`: Tarjeta de logro.

- **Rutas**: Configuración de las rutas de la aplicación según el rol del usuario.

- **Estilos**: Archivos CSS para la apariencia de la aplicación.

## Instalación
1. Clona el repositorio:
   ```
   git clone <url_del_repositorio>
   ```
2. Navega al directorio del backend y frontend:
   ```
   cd mafiest_backend
   npm install
   cd ../mafiest_frontend
   npm install
   ```
3. Configura las variables de entorno en el archivo `.env` del backend.
4. Inicia el servidor del backend:
   ```
   cd mafiest_backend
   node server.js
   ```
5. Inicia la aplicación del frontend:
   ```
   cd mafiest_frontend
   npm run dev
   ```

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.