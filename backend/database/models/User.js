module.exports = (sequelize, DataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        name: {
            type: DataTypes.STRING(255),
        },
        direction: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        profile: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.STRING(100),
        },
        rol: {
            type: DataTypes.STRING(20),
             defaultValue: 'USER'
        },
    };

    const config = {
        tableName: "users",
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);

    return User;
};
