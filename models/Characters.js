module.exports = function(sequelize, DataTypes){
    var user_Info = sequelize.define('user_Info', {
        userName : {
            type : DataTypes.STRING(225),
            allowNull : false,
            unique : true,
            // validate: {notEmpty: true}
        },
        password : {
            type : DataTypes.STRING(225),
            allowNull: false,
            // validate: {notEmpty: true}
        },
        experience : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        },
        level : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        },
        HP : {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 12
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        }
    },{
        timestamps : false,
        freezeTableName : false
    });
    return user_Info;
}
