exports.seed = function (knex, Promise) {
    return knex('step-ingredients').insert([
      {  
        step_id:1,
        ingredient_id: 1,
        quantity: 0.014
      },
      {  
        step_id:1,
        ingredient_id: 3,
        quantity: 5.45
      },
    ]);
  };