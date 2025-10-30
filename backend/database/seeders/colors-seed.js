'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      { id: 1, name: 'Rojo', code: '#FF0000' },
      { id: 2, name: 'Verde', code: '#00FF00' },
      { id: 3, name: 'Azul', code: '#0000FF' },
      { id: 4, name: 'Amarillo', code: '#FFFF00' },
      { id: 5, name: 'Negro', code: '#000000' },
      { id: 6, name: 'Blanco', code: '#FFFFFF' },
      { id: 7, name: 'Gris', code: '#808080' },
      { id: 8, name: 'Naranja', code: '#FFA500' },
      { id: 9, name: 'Violeta', code: '#800080' },
      { id: 10, name: 'Cian', code: '#00FFFF' },
      { id: 11, name: 'Cyan Azul', code: '#4f8fff' },
      { id: 12, name: 'Amarillo Verde', code: '#eff15d' }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};