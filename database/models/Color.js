module.exports = (sequelize, DataTypes) => {

    const alias = 'Color';

    const cols = {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            },
            code: {
                type: DataTypes.STRING(10)
            }
    }

    const config = {
        tableName: 'colors',
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config)

    return Color;

}