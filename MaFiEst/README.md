# MaFiEst

MaFiEst es una plataforma educativa diseñada para gestionar grupos académicos, cursos y logros de los usuarios. El sistema permite la interacción entre administradores, docentes, estudiantes e independientes, facilitando la creación de contenido educativo y el seguimiento del progreso de los usuarios.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: el backend y el frontend.

### Backend

El backend está construido con Node.js, Express, Sequelize y PostgreSQL. La estructura de carpetas es la siguiente:

```
mafiest_backend
├── controllers
│   ├── auth.js
│   ├── users.js
│   ├── groups.js
│   ├── progress.js
│   ├── achievements.js
│   ├── contacts.js
│   └── advisories.js
├── models
│   ├── User.js
│   ├── Group.js
│   ├── Progress.js
│   ├── Achievement.js
│   ├── UserAchievement.js
│   ├── Contact.js
│   ├── Advisory.js
│   └── index.js
├── routes
│   ├── auth.js
│   ├── users.js
│   ├── groups.js
│   ├── progress.js
│   ├── achievements.js
│   ├── contacts.js
│   └── advisories.js
├── utils
│   ├── config.js
│   ├── db.js
│   ├── logger.js
│   └── middleware.js
├── .env
├── .gitignore
├── app.js
├── eslint.config.mjs
├── index.js
├── package-lock.json
├── package.json
└── server.js
```

### Frontend

El frontend está desarrollado con React y Vite, y permite a los usuarios interactuar con la plataforma de manera intuitiva. La estructura de carpetas es la siguiente:

```
mafiest_frontend
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── pages
│   │   ├── admin
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   └── ManageGroups.jsx
│   │   ├── student
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Progress.jsx
│   │   │   └── Achievements.jsx
│   │   ├── teacher
│   │   │   ├── Dashboard.jsx
│   │   │   ├── UploadExams.jsx
│   │   │   └── UploadWorkshops.jsx
│   │   ├── independent
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Progress.jsx
│   │   │   └── Achievements.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Landing.jsx
│   │   ├── Contact.jsx
│   │   ├── Advisory.jsx
│   │   └── Config.jsx
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── CourseCard.jsx
│   │   └── AchievementCard.jsx
│   ├── routes
│   │   ├── AppRoutes.jsx
│   │   └── RutaProtegida.jsx
│   ├── styles
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Funcionalidades

- **Autenticación**: Los usuarios pueden iniciar sesión y registrarse. Los independientes pueden registrarse por sí mismos, mientras que los estudiantes son creados por administradores.
- **Gestión de Grupos**: Los administradores pueden crear y gestionar grupos académicos, asignando docentes y estudiantes a cada grupo.
- **Progreso y Logros**: Los usuarios pueden ver su progreso en los cursos y los logros obtenidos a lo largo de su experiencia en la plataforma.
- **Interacción**: Los usuarios pueden enviar consultas a través del formulario de contacto y solicitar asesorías.

## Requisitos

- Node.js
- PostgreSQL
- Dependencias de Node.js especificadas en `package.json`

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   ```
2. Navega a la carpeta del backend y frontend y ejecuta:
   ```
   npm install
   ```
3. Configura las variables de entorno en el archivo `.env`.
4. Levanta el servidor del backend:
   ```
   node server.js
   ```
5. Inicia el frontend:
   ```
   npm run dev
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.