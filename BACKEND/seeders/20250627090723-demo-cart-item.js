'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CartItems', [
      {
        name: 'Boho Skirt',
        price: 389.75,
        quantity: 1,
        image: '/images/skirt-8.jpg',
        store: 'Preloved Finds',
        selected: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Corduroy Pants',
        price: 499.5,
        quantity: 2,
        image: '/images/pants.jpg',
        store: 'Thrift Store A',
        selected: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CartItems', null, {});
  },
};

