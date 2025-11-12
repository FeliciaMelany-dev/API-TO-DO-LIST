'use strict';

/** @type {import('sequelize-cli').Migration} */
const seeder = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Comprar mantimentos',
        description: 'Ir ao mercado e comprar frutas, legumes e arroz',
        status: 'pendente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Estudar JavaScript',
        description: 'Revisar funções, objetos e promessas',
        status: 'a_fazer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Enviar relatório',
        description: 'Finalizar e enviar relatório mensal para o gestor',
        status: 'concluida',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {})
  }
};

export default seeder;
