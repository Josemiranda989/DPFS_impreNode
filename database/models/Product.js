module.exports = (sequelize, DataTypes) => {

    const alias = 'Product';

    const cols = {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            name: {
                type: DataTypes.STRING(255)
            },
            description: {
                type: DataTypes.TEXT,
            },
            image: {
                type: DataTypes.TEXT
            },
            price: {
                type: DataTypes.INTEGER.UNSIGNED
            },
            category_id: {
                type: DataTypes.INTEGER
            },
            color_id: {
                type: DataTypes.INTEGER
            }
    }

    const config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)

    return Product;

}