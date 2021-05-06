'use strict';
const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await models.product.bulkCreate([
     {name: 'Fiddle Leaf Fig',description: 'Tall, sculptural, and dramatic. This plant will flourish in the right conditions.', 
     image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_stone-alt.jpg?ver=279587',price: '$150'},
     {name: 'Monstera (Calathea)',description: 'Lively and wild with large, tropical leaves. Also known as the Swiss Cheese Plant', 
     image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_monstera_alt_stone.jpg?ver=279417',price: '$120'},
     {name: 'Bird\'s-Nest Fern',description: 'Elegant, low-maintence plant. Perfect for beginners.', 
     image: 'https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg',price: '$50'},
     {name: 'Rattlesnake Plant (Calathea Lancifolia)',description: 'Visually appealing, colorful and ornate. A great gift plant.', 
     image: 'https://pyxis.nymag.com/v1/imgs/ace/11e/b0136ec1d581928e3dd7733a6b483b0c33.2x.rhorizontal.w600.jpg',price: '$30'},
     {name: 'Sansevieria Cylindrica (African Spear Plant)',description: 'Great for enhancing the recipient’s home air quality, as well as being very easy to maintain.', 
     image: 'https://pyxis.nymag.com/v1/imgs/b82/665/f7757415a07efbf46caf22548dcabf9798-etsy-african-spear-plant.2x.rdeep-vertical.w245.jpg',price: '$30'},
     {name: 'Costa Farms ZZ Plant',description: 'Beautiful, glossy lobed leaves, these plants are hardy, only requiring water once a month.', 
     image: 'https://pyxis.nymag.com/v1/imgs/700/132/99ab236a71899e94d45b9003b6b3915985-raven-zz.2x.rhorizontal.w600.jpg',price: '$33'},
     {name: 'Pothos (Jade)',description: 'Leaves have a “visible wilt” when thirsty. A top choices for plant newbies.', 
     image: 'https://pyxis.nymag.com/v1/imgs/a2b/bd0/bb80f587c7ccdbe925470dd55a9476e048-Pothos-Jade.2x.rhorizontal.w600.jpg',price: '$32'},
     {name: 'Pilea Peperomioides',description: 'Known as the Chinese money plant or coin plant, the flat-leaved Pilea peperomioides is one of our experts’ top picks for plant hobbyists.', 
     image: 'https://pyxis.nymag.com/v1/imgs/f6b/b6e/0082102d01fd6b368eda2d024b6e3c2f82-pilea-peperomioides.2x.rhorizontal.w600.jpg',price: '$22'},
     {name: 'Hoya Carnosa Rope Plant',description: 'An intermediate-level gift, can tolerate some dry time but will need more attention than a ZZ or sansevieria. Slow to bloom, but yeilds a rewarding delayed-gratification.', 
     image: 'https://pyxis.nymag.com/v1/imgs/6f8/d39/e23defe27b53a5daf0589306e91f91a115-Hoya-Carnosa-Rope.2x.rhorizontal.w600.jpg',price: '$10'},
     {name: 'Thai Constellation Variegated Monstera',description: 'Not widely commercially grown. An impressive gift for people who know their plants.', 
     image: 'https://pyxis.nymag.com/v1/imgs/6de/6ed/759f5e9b96205b3ecc4526739c4aed49f1-Variegated-Monstera.2x.rhorizontal.w600.jpg',price: '$300'}
     
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
