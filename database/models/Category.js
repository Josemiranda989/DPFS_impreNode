module.exports = (sequelize, DataTypes) => {

    const alias = 'Category';

    const cols = {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            }
    }

    const config = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    return Category;

}