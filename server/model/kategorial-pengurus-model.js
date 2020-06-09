"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  let KategorialPengurus = sequelize.define(
    "KategorialPengurus",
    {
      kategorialId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      jabatan: {
        type: DataTypes.STRING(50),
      },
      nama: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "kategorial_pengurus",
      timestamps: false,
    }
  );

  return KategorialPengurus;
};
