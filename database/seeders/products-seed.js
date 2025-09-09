'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: 'Soporte para celular',
        description: 'Impreso en PLA, ideal para escritorios y mesas de trabajo.',
        image: 'soporte_celular.jpg',
        price: 1200,
        category_id: 5, // Soportes y organizadores
        color_id: 1     // Rojo
      },
      {
        id: 2,
        name: 'Maceta decorativa',
        description: 'Diseño artístico para plantas pequeñas, resistente al agua.',
        image: 'maceta_decorativa.jpg',
        price: 1800,
        category_id: 4, // Decoración
        color_id: 3     // Azul
      },
      {
        id: 3,
        name: 'Engranaje para motor',
        description: 'Pieza técnica para proyectos electrónicos y robótica.',
        image: 'engranaje_motor.jpg',
        price: 950,
        category_id: 6, // Piezas para electrónica
        color_id: 5     // Negro
      },
      {
        id: 4,
        name: 'Figura de personaje geek',
        description: 'Modelo coleccionable impreso en alta resolución.',
        image: 'figura_geek.jpg',
        price: 2500,
        category_id: 12, // Geeks
        color_id: 9      // Violeta
      },
      {
        id: 5,
        name: 'Organizador de cables',
        description: 'Evita enredos y mejora la estética del escritorio.',
        image: 'organizador_cables.jpg',
        price: 700,
        category_id: 5, // Soportes y organizadores
        color_id: 7     // Gris
      },
      {
        id: 6,
        name: 'Modelo educativo de ADN',
        description: 'Ideal para clases de biología y demostraciones científicas.',
        image: 'modelo_adn.jpg',
        price: 3200,
        category_id: 7, // Modelos educativos
        color_id: 10    // Cian
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};