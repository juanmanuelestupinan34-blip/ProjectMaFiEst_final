// Este archivo agrupa y exporta todos los modelos de la aplicación.

const User = require('./User');
const Group = require('./Group');
const Progress = require('./Progress');
const Achievement = require('./Achievement');
const UserAchievement = require('./UserAchievement');
const Contact = require('./Contact');
const Advisory = require('./Advisory');

const models = {
    User,
    Group,
    Progress,
    Achievement,
    UserAchievement,
    Contact,
    Advisory
};

// Establecer relaciones entre modelos si es necesario
User.hasMany(UserAchievement, { foreignKey: 'userId' });
UserAchievement.belongsTo(User, { foreignKey: 'userId' });

Group.hasMany(User, { foreignKey: 'groupId' });
User.belongsTo(Group, { foreignKey: 'groupId' });

Progress.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Progress, { foreignKey: 'userId' });

Achievement.hasMany(UserAchievement, { foreignKey: 'achievementId' });
UserAchievement.belongsTo(Achievement, { foreignKey: 'achievementId' });

Contact.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Contact, { foreignKey: 'userId' });

Advisory.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Advisory, { foreignKey: 'userId' });


// Relaciones exámenes - usuario
ExamResult.belongsTo(User, { foreignKey: "studentId" });
ExamResult.belongsTo(Exam, { foreignKey: "examId" });

User.hasMany(ExamResult, { foreignKey: "studentId" });
Exam.hasMany(ExamResult, { foreignKey: "examId" });


// Relaciones talleres - usuario
Workshop.belongsTo(User, { foreignKey: "teacherId" });
Workshop.belongsTo(Group, { foreignKey: "groupId" });

User.hasMany(Workshop, { foreignKey: "teacherId" });
Group.hasMany(Workshop, { foreignKey: "groupId" });



module.exports = models;
