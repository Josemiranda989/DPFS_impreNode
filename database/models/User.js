module.exports = (sequelize, DataTypes) => {

    const alias = 'User';

    const cols = {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            },
            direction: {
                type: DataTypes.TEXT,
            },
            email: {
                type: DataTypes.STRING(255)
            },
            profile: {
                type: DataTypes.TEXT
            },
            password: {
                type: DataTypes.STRING(100)
            },
            rol: {
                type: DataTypes.STRING(20)
            },
            
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    return User;

}

