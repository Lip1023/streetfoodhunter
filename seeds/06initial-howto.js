
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('howtoTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('howtoTable').insert([
        {id: 1, recipe_id: 1, howto: 'In a large bowl, add all ingredients and mix with a whisk until only very small lumps remain. Set batter in the fridge for one hour.\nRead instructions on whether your pan can be placed directly onto stove or if it needs a wire rack and do accordingly. Pre-heat each half of the waffle pans on medium-high heat until hot (about 1-2 minutes).\nLightly brush each pan with vegetable oil -not spray. Turn heat to medium\nPour 3/4 cup of the batter into the middle of the egg waffle pan and then immediately flip pan, making sure to hold pan together tightly. Cook for 2 minutes, then flip to other side and cook for 2 minutes. The egg waffle will now require one more cook on each side. Timing may vary depending on stove, but mine needed 2 more minutes on each side. (You first waffle will like still be pale yellow and may have cooked unevenly. Like the first pancake, this is your throwaway one. The ones after should look light brown when they are finished.)\nRemove the side of the pan the finished egg waffle is clinging to, and hold it above a plate with the waffle upside down. Using a chopstick or spoon, gently loosen it from the pan, starting on the top edge, using gravity to help it release. It will start to curl as it falls off and you should be able to get it out in one piece (except for the first waffle).\nRepeat with the remaining batter (re-greasing pans first) and then serve immediately.'},
        {id: 2, recipe_id: 2, howto: 'In a medium saucepan, bring the soy milk to a gentle boil over Medium Low heat. Stir the milk occasionally to prevent it from sticking to the bottom of the pan and burning. Use a fine sieve to skim off any bubbles or foam from the top and discard\nPrepare the thickener by combining the corn starch and water in a small bowl. Stir until smooth.\nIn another small bowl, measure out the GDL and set aside for now.\nOnce the soy milk comes to a gentle boil, turn off the heat.\nStir the corn starch and water mixture again. Add the GDL to the corn starch mixture and combine together. Pour the contents into a 2-quart bowl.\nWorking quickly, pour the hot soy milk into the 2-quart bowl. Stir the mixture just once. (The pudding starts to set quickly so do not over-stir.)\nSkim off any bubbles on top of the soy milk and discard.\nCover the bowl with a kitchen towel and a lid.\nLet the tofu pudding rest undisturbed for 30 minutes.\nMaking the Ginger Syrup\nPeel the ginger skin and discard. Cut the ginger into thin pieces.\nTransfer the ginger into a small bowl. Add the white sugar and combine. Let rest for 10 minutes\nUsing a wooden pestle, break the brown slab sugar into small pieces.\nTransfer the ginger into a medium saucepan. Using Medium heat, cook the ginger stirring continuously for 5-6 minutes. When the sugar recrystallizes, add the water and brown slab sugar. Cook over Medium heat melting the sugar. Stir occasionally to help the sugar dissolve. Once the sugar is completely dissolved, reduce the heat to Medium Low. Continue cooking for another 5-6 minutes allowing the liquid to thicken into a syrup.\nTransfer the ginger syrup into a medium bowl and let cool.'},
        {id: 3, recipe_id: 3, howto: 'Wash all vegetables.\nSlice long chilies in half and remove seeds. Slice eggplant at an angle (to make the slices longer) into 1/4" thick slices.\nSlice bitter melon into 1/4" thick rounds and remove the inside pulp and seeds, leaving only the green rind. \nSmear the fish paste into/onto all vegetables.\nHeat up a non stick pan (we use cast iron) over medium heat, add 1 tbsp oil and add in green chilies, fish paste side down, and turn heat to low.  \nCook for 3-4 minutes until fish paste is a golden brown, then flip and cook for another 2-3 minutes.  Check bottom, when golden brown spots appear, remove to serving plate.\nTurn heat to medium, add another tbsp of oil, then add in eggplant, fish paste side down and turn heat to low.  Cook for 4-5 minutes or until the fish paste is a golden brown, then flip and cook for another 3-4 minutes.  \nAdd 3 tbsp of chicken stock, cover and turn heat up to medium.  When the stock boils turn down heat to low and let cook until the eggplant is cooked through. \nRemove to serving plate.  Repeat for the bitter melon.'},
        {id: 4, recipe_id: 4, howto: 'Soak the Chinese vermicelli noodles in water until soften, cut it few times. Marinate the pork/ chicken with some soy sauce, sugar and corn starch. Or you can used leftover chicken. Cut the shiitake mushrooms and black fungus into thinly slices.\nIn a large pot, bring the chicken broth into boil, then add in meat, shiitake mushrooms and black fungus. Once it boils, turn to low heat and cook for 10 minutes. Then return the heat to medium high, add in all seasoning and vermicelli noodles. Cook for 2 minutes.\nMix the water chestnut flour with 2 tablespoons of water, then add in the soup, keep stirring and soup will thicken. Remove from heat, add in beaten egg, let it set for 5 seconds, then use chopsticks to stir to make egg drop. Enjoy!'},
        {id: 5, recipe_id: 5, howto: 'Whisk first 5 ingredients in medium bowl. Set dressing aside.\nCook beans in medium saucepan of boiling salted water until crisp-tender, about 5 minutes. \nRinse under cold water. Cut into 2-inch pieces. \nUsing julienne peeler, peel enough papaya to measure 6 cups. Place in large bowl. \nAdd tomatoes, cilantro, green onions, chile, and green beans. Pour dressing over; toss. \nSprinkle peanuts over and serve.'},
        {id: 6, recipe_id: 6, howto: 'METHOD (FOR PASTRY\nCream butter with icing sugar, egg yolk and egg white.\nAdd in flour and mix well. Once it is well mixed, using hand, press the mixture together and form a dough. If the dough is too wet or oily, do add some flour. Give it a few knead. \nWrap the dough in a clingwrap. Put it into the fridge for 15mins to let it cool. Take the dough out of the fridge. \nCut pastries into 12 equal portion (about 38g each). Roll individual dough into a ball. \nUsing a tart case, press the pastry ball into a flat piece. Line dough in the middle of tart cases, lightly press the dough into the tart cases. 6.Refrigerate the tart cases for 30mins, and it is ready to use.,METHOD (FOR FILLING)\nAdd castor sugar into hot water, mix until sugar completely dissolved. \nSet aside and let it cool. Beat eggs with milk, vanilla essence and salt. Pour in sugar water. Mix well\nSift egg mixture TWICE to achieve smooth egg mixture. \nTake tarts out of the refrigerator, carefully pour egg mixture into each tart shells. Bake tarts for 25mins at 180 degree, fan ON.'},
        {id: 7, recipe_id: 7, howto: 'In a bowl wash rice well in several changes of cold water until water is clear. Soak rice in cold water to cover overnight.\n Drain rice well in a sieve. Set sieve over a large deep saucepan of simmering water (sieve should not touch water) and steam rice, covered with a kitchen towel and a lid, 30 to 40 minutes, or until tender (check water level in pan occasionally, adding more water if necessary).\n While rice is cooking, in a small saucepan bring 1 cup coconut milk to a boil with 1/3 cup sugar and salt, stirring until sugar is dissolved, and remove from heat. Keep mixture warm.\n Transfer cooked rice to a bowl and stir in coconut-milk mixture. Let rice stand, covered, 30 minutes, or until coconut-milk mixture is absorbed. Rice may be prepared up to this point 2 hours ahead and kept covered at room temperature\n While rice is standing, in cleaned small pan slowly boil remaining 1/3 cup coconut milk with remaining 3 tablespoons sugar, stirring occasionally, 1 minute. Transfer sauce to a small bowl and chill until cool and thickened slightly.\n To serve, mold 1/4 cup servings of sticky rice on dessert plates. Drizzle desserts with sauce and sprinkle with sesame seeds. Divide mango slices among plates.)'}
      ]);
    });
};
