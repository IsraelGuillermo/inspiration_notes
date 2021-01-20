const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    'notes',
    {
      new_note: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Note.associate = (models) => {
    Note.belongsTo(models.user);
  };
  return Note;
};
