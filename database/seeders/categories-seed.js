'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { id: 1, name: 'Accesorios para el hogar' },
      { id: 2, name: 'Herramientas' },
      { id: 3, name: 'Juguetes y juegos' },
      { id: 4, name: 'Decoración' },
      { id: 5, name: 'Soportes y organizadores' },
      { id: 6, name: 'Piezas para electrónica' },
      { id: 7, name: 'Modelos educativos' },
      { id: 8, name: 'Artículos personalizados' },
      { id: 9, name: 'Repuestos y adaptadores' },
      { id: 10, name: 'Diseño artístico' },
      { id: 11, name: 'Accesorios para domotica' },
      { id: 12, name: 'Geeks' }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};