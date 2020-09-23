// "use strict";
// const Sequelize = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   let Kategorial = sequelize.define(
//     "Kategorial",
//     {
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: Sequelize.UUIDV4,
//         primaryKey: true,
//       },
//       nama: {
//         type: DataTypes.STRING(100),
//       },
//       lastEditedDate: {
//         type: DataTypes.DATE,
//       },
//       lastEditedBy: {
//         type: DataTypes.STRING(100),
//       },
//     },
//     {
//       tableName: "kategorial",
//       timestamps: false,
//     }
//   );

//   Kategorial.associate = (models) => {
//     models.Kategorial.hasMany(models.KategorialDeskripsi, {
//       foreignKey: "id",
//       as: "deskripsi",
//     });

//     models.Kategorial.hasMany(models.KategorialPengurus, {
//       foreignKey: "id",
//       as: "pengurus",
//     });
//   };

//   return Kategorial;
// };
