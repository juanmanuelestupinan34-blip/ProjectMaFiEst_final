const User = require('./User');
const Group = require('./Group');
const Progress = require('./Progress');
const Achievement = require('./Achievement');
const UserAchievement = require('./UserAchievement');
const Contact = require('./Contact');
const Advisory = require('./Advisory');
const Exam = require('./Exam');
const ExamResult = require('./ExamResult');
const Workshop = require('./Workshop');
const WorkshopSubmission = require('./WorkshopSubmission');

const models = {
    User,
    Group,
    Progress,
    Achievement,
    UserAchievement,
    Contact,
    Advisory,
    Exam,
    ExamResult,
    Workshop,
    WorkshopSubmission
};

// =======================
// Establecer relaciones
// =======================

// Logros
User.hasMany(UserAchievement, { foreignKey: 'userId' });
UserAchievement.belongsTo(User, { foreignKey: 'userId' });

Achievement.hasMany(UserAchievement, { foreignKey: 'achievementId' });
UserAchievement.belongsTo(Achievement, { foreignKey: 'achievementId' });

// Grupos
Group.hasMany(User, { foreignKey: 'groupId' });
User.belongsTo(Group, { foreignKey: 'groupId' });

// Progreso
User.hasMany(Progress, { foreignKey: 'userId' });
Progress.belongsTo(User, { foreignKey: 'userId' });

// Contacto
User.hasMany(Contact, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });

// Asesorías
User.hasMany(Advisory, { foreignKey: 'userId' });
Advisory.belongsTo(User, { foreignKey: 'userId' });

// Exámenes
Exam.belongsTo(User, { foreignKey: 'teacherId' });
Exam.belongsTo(Group, { foreignKey: 'groupId' });
User.hasMany(Exam, { foreignKey: 'teacherId' });
Group.hasMany(Exam, { foreignKey: 'groupId' });

// Resultados de exámenes
ExamResult.belongsTo(User, { foreignKey: 'studentId' });
ExamResult.belongsTo(Exam, { foreignKey: 'examId' });
User.hasMany(ExamResult, { foreignKey: 'studentId' });
Exam.hasMany(ExamResult, { foreignKey: 'examId' });

// Talleres
Workshop.belongsTo(User, { foreignKey: 'teacherId' });
Workshop.belongsTo(Group, { foreignKey: 'groupId' });
User.hasMany(Workshop, { foreignKey: 'teacherId' });
Group.hasMany(Workshop, { foreignKey: 'groupId' });

// Entregas de talleres
WorkshopSubmission.belongsTo(User, { foreignKey: 'studentId' });
WorkshopSubmission.belongsTo(Workshop, { foreignKey: 'workshopId' });
User.hasMany(WorkshopSubmission, { foreignKey: 'studentId' });
Workshop.hasMany(WorkshopSubmission, { foreignKey: 'workshopId' });

module.exports = models;
