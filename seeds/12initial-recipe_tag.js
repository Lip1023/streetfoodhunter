
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries

      return knex('recipe_tagTable').insert([
        {

          "tag_id": 1,
          "recipe_id": 1
        },
        {
    
          "tag_id": 2,
          "recipe_id": 2
        },
        {
    
          "tag_id": 4,
          "recipe_id": 3
        },
        {
    
          "tag_id": 5,
          "recipe_id": 4
        },
        {
    
          "tag_id": 7,
          "recipe_id": 5
        },
        {
    
          "tag_id": 10,
          "recipe_id": 6
        },
        {
    
          "tag_id": 15,
          "recipe_id": 7
        },
        {
    
          "tag_id": 6,
          "recipe_id": 1
        },
        {
    
          "tag_id": 10,
          "recipe_id": 1
        },
        {
    
          "tag_id": 12,
          "recipe_id": 1
        },
        {
    
          "tag_id": 1,
          "recipe_id": 2
        },
        {
    
          "tag_id": 3,
          "recipe_id": 2
        },
        {
    
          "tag_id": 8,
          "recipe_id": 2
        },
        {
          "tag_id": 12,
          "recipe_id": 2
        },
        {
          "tag_id": 4,
          "recipe_id": 3
        },
        {
    
          "tag_id": 7,
          "recipe_id": 3
        },
        {
    
          "tag_id": 12,
          "recipe_id": 3
        },
        {
    
          "tag_id": 11,
          "recipe_id": 4
        },
        {
    
          "tag_id": 12,
          "recipe_id": 4
        },
        {
    
          "tag_id": 2,
          "recipe_id": 5
        },
        {
    
          "tag_id": 4,
          "recipe_id": 5
        },
        {
    
          "tag_id": 9,
          "recipe_id": 5
        },
        {
    
          "tag_id": 16,
          "recipe_id": 5
        },
        {
    
          "tag_id": 1,
          "recipe_id": 6
        },
        {
    
          "tag_id": 6,
          "recipe_id": 6
        },
        {
    
          "tag_id": 10,
          "recipe_id": 6
        },
        {
    
          "tag_id": 12,
          "recipe_id": 6
        },
        {
    
          "tag_id": 1,
          "recipe_id": 7
        },
        {
    
          "tag_id": 3,
          "recipe_id": 7
        },
        {
    
          "tag_id": 6,
          "recipe_id": 7
        },
        {
    
          "tag_id": 16,
          "recipe_id": 7
        },
        {
    
          "tag_id": 1,
          "recipe_id": 9
        },
        {
    
          "tag_id": 8,
          "recipe_id": 9
        },
        {
    
          "tag_id": 12,
          "recipe_id": 9
        },
        {
    
          "tag_id": 9,
          "recipe_id": 8
        },
        {
    
          "tag_id": 16,
          "recipe_id": 8
        },
        {
    
          "tag_id": 7,
          "recipe_id": 10
        },
        {
    
          "tag_id": 16,
          "recipe_id": 10
        },
        {
    
          "tag_id": 11,
          "recipe_id": 11
        },
        {
    
          "tag_id": 14,
          "recipe_id": 11
        },
        {
    
          "tag_id": 12,
          "recipe_id": 12
        },
        {
    
          "tag_id": 6,
          "recipe_id": 12
        },
        {
    
          "tag_id": 1,
          "recipe_id": 12
        },
        {
    
          "tag_id": 1,
          "recipe_id": 13
        },
        {
    
          "tag_id": 11,
          "recipe_id": 14
        },
        {
    
          "tag_id": 14,
          "recipe_id": 14
        },
        {
    
          "tag_id": 11,
          "recipe_id": 15
        },
        {
    
          "tag_id": 14,
          "recipe_id": 15
        },
        {
    
          "tag_id": 11,
          "recipe_id": 16
        },
        {
    
          "tag_id": 14,
          "recipe_id": 16
        },
        {
    
          "tag_id": 11,
          "recipe_id": 17
        },
        {
    
          "tag_id": 14,
          "recipe_id": 17
        }
      ]);

};
