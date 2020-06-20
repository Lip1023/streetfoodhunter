
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('howtoTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('howtoTable').insert([
        {

          "recipe_id": 1,
          "howto": "1. In a large bowl, add all ingredients and mix with a whisk until only very small lumps remain. Set batter in the fridge for one hour.,2. Read instructions on whether your pan can be placed directly onto stove or if it needs a wire rack and do accordingly. Pre-heat each half of the waffle pans on medium-high heat until hot (about 1-2 minutes).,3.Lightly brush each pan with vegetable oil (don't use spray). Turn heat to medium (I set mine at dial at 4).,4.Pour 3\/4 cup of the batter into the middle of the egg waffle pan and then immediately flip pan, making sure to hold pan together tightly so it doesn't leak. Cook for 2 minutes, then flip to other side and cook for 2 minutes. The egg waffle will now require one more cook on each side. Timing may vary depending on stove, but mine needed 2 more minutes on each side. (You first waffle will like still be pale yellow and may have cooked unevenly. Like the first pancake, this is your throwaway one. The ones after should look light brown when they are finished.),5.Remove the side of the pan the finished egg waffle is clinging to, and hold it above a plate with the waffle upside down. Using a chopstick or spoon, gently loosen it from the pan, starting on the top edge, using gravity to help it release. It will start to curl as it falls off and you should be able to get it out in one piece (except for the first waffle).,6.Repeat with the remaining batter (re-greasing pans first) and then serve immediately.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 2,
          "howto": "1.In a medium saucepan, bring the soy milk to a gentle boil over Medium Low heat. Stir the milk occasionally to prevent it from sticking to the bottom of the pan and burning. Use a fine sieve to skim off any bubbles or foam from the top and discard,2.Prepare the thickener by combining the corn starch and water in a small bowl. Stir until smooth.,3.In another small bowl, measure out the GDL and set aside for now.,4.Once the soy milk comes to a gentle boil, turn off the heat.,5.Stir the corn starch and water mixture again. Add the GDL to the corn starch mixture and combine together. Pour the contents into a 2-quart bowl.,6.Working quickly, pour the hot soy milk into the 2-quart bowl. Stir the mixture just once. (The pudding starts to set quickly so do not over-stir.),7.Skim off any bubbles on top of the soy milk and discard.,8.Cover the bowl with a kitchen towel and a lid.,9.Let the tofu pudding rest undisturbed for 30 minutes.,Making the Ginger Syrup,1.Peel the ginger skin and discard. Cut the ginger into thin pieces.,2.Transfer the ginger into a small bowl. Add the white sugar and combine. Let rest for 10 minutes,3.Using a wooden pestle, break the brown slab sugar into small pieces.,4.Transfer the ginger into a medium saucepan. Using Medium heat, cook the ginger stirring continuously for 5-6 minutes. When the sugar recrystallizes, add the water and brown slab sugar. Cook over Medium heat melting the sugar. Stir occasionally to help the sugar dissolve. Once the sugar is completely dissolved, reduce the heat to Medium Low. Continue cooking for another 5-6 minutes allowing the liquid to thicken into a syrup.,5.Transfer the ginger syrup into a medium bowl and let cool.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 3,
          "howto": "1. Wash all vegetables.,2.Slice long chilies in half and remove seeds. Slice eggplant at an angle (to make the slices longer) into 1\/4\" thick slices.  ,3.Slice bitter melon into 1\/4\" thick rounds and remove the inside pulp and seeds, leaving only the green rind. ,4.Smear the fish paste into\/onto all vegetables.,5.Heat up a non stick pan (we use cast iron) over medium heat, add 1 tbsp oil and add in green chilies, fish paste side down, and turn heat to low.  ,6.Cook for 3-4 minutes until fish paste is a golden brown, then flip and cook for another 2-3 minutes.  Check bottom, when golden brown spots appear, remove to serving plate.,7.Turn heat to medium, add another tbsp of oil, then add in eggplant, fish paste side down and turn heat to low.  Cook for 4-5 minutes or until the fish paste is a golden brown, then flip and cook for another 3-4 minutes.  ,8.Add 3 tbsp of chicken stock, cover and turn heat up to medium.  When the stock boils turn down heat to low and let cook until the eggplant is cooked through. ,9.Remove to serving plate.  Repeat for the bitter melon.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 4,
          "howto": "1.Soak the Chinese vermicelli noodles in water until soften, cut it few times. Marinate the pork\/ chicken with some soy sauce, sugar and corn starch. Or you can used leftover chicken. Cut the shiitake mushrooms and black fungus into thinly slices.,2.In a large pot, bring the chicken broth into boil, then add in meat, shiitake mushrooms and black fungus. Once it boils, turn to low heat and cook for 10 minutes. Then return the heat to medium high, add in all seasoning and vermicelli noodles. Cook for 2 minutes.,3.Mix the water chestnut flour with 2 tablespoons of water, then add in the soup, keep stirring and soup will thicken. Remove from heat, add in beaten egg, let it set for 5 seconds, then use chopsticks to stir to make egg drop. Enjoy!",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 5,
          "howto": "1. Whisk first 5 ingredients in medium bowl. Set dressing aside.,2.Cook beans in medium saucepan of boiling salted water until crisp-tender, about 5 minutes. ,3.Rinse under cold water. Cut into 2-inch pieces. ,4.Using julienne peeler, peel enough papaya to measure 6 cups. Place in large bowl. ,5.Add tomatoes, cilantro, green onions, chile, and green beans. Pour dressing over; toss. ,6.Sprinkle peanuts over and serve.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 6,
          "howto": "METHOD -FOR PASTRY,1.Cream butter with icing sugar, egg yolk and egg white.,2.Add in flour and mix well. Once it is well mixed, using hand, press the mixture together and form a dough. If the dough is too wet or oily, do add some flour. Give it a few knead. ,3.Wrap the dough in a clingwrap. Put it into the fridge for 15mins to let it cool. Take the dough out of the fridge.,4.Cut pastries into 12 equal portion (about 38g each). Roll individual dough into a ball. ,5.Using a tart case, press the pastry ball into a flat piece. Line dough in the middle of tart cases, lightly press the dough into the tart cases. 6.Refrigerate the tart cases for 30mins, and it is ready to use.,METHOD -FOR FILLING ,1.Add castor sugar into hot water, mix until sugar completely dissolved. ,2.Set aside and let it cool. Beat eggs with milk, vanilla essence and salt. Pour in sugar water. Mix well,3.Sift egg mixture TWICE to achieve smooth egg mixture. ,4.Take tarts out of the refrigerator, carefully pour egg mixture into each tart shells. Bake tarts for 25mins at 180 degree, fan ON.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 15,
          "howto": "\n1.Heat oil in a wok or large pan over medium heat. Add pork shank, and turn up the heat a bit. Fry until golden brown on both sides. Transfer the leg to drain on a paper towel.,2.Pound garlic, peppercorns, and corriander in a mortar and pestle until it becomes a fine paste. Set aside.,3.Place fried pig leg in a pot and cover with water. Add garlic paste mixture, cinnamon, star anise, black soy, thin soy, Golden Mtn, salt, palm sugar, 5-spice, and eggs. Bring to a boil then reduce heat, and cook for another 2-3 hours until tender.,4.While the pork is cooking, thinly slice the pickled mustard green, gently squeeze it to remove the pickling liquid, and rinse it one time in a colander. Then slowly boil it in a bit of water or chicken stock, about 1.5 cups, until water evaporates, and set aside.,5.Separately, pound 2-3 fresh Thai chile peppers in a mortar and pestle. Transfer to a small sauce bowl, add 1 teaspoon salt and 1\/2 cup vinegar. This sauce should be served with the khao kha moo.,6.Serve the meat over steamed jasmine rice, topped with some pickled mustard green, steamed bokchoy and the chile-vinegar sauce.\n",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 7,
          "howto": "1. In a bowl wash rice well in several changes of cold water until water is clear. Soak rice in cold water to cover overnight.,2. Drain rice well in a sieve. Set sieve over a large deep saucepan of simmering water (sieve should not touch water) and steam rice, covered with a kitchen towel and a lid, 30 to 40 minutes, or until tender (check water level in pan occasionally, adding more water if necessary).,3. While rice is cooking, in a small saucepan bring 1 cup coconut milk to a boil with 1\/3 cup sugar and salt, stirring until sugar is dissolved, and remove from heat. Keep mixture warm.,4. Transfer cooked rice to a bowl and stir in coconut-milk mixture. Let rice stand, covered, 30 minutes, or until coconut-milk mixture is absorbed. Rice may be prepared up to this point 2 hours ahead and kept covered at room temperature,5. While rice is standing, in cleaned small pan slowly boil remaining 1\/3 cup coconut milk with remaining 3 tablespoons sugar, stirring occasionally, 1 minute. Transfer sauce to a small bowl and chill until cool and thickened slightly.,6. To serve, mold 1\/4 cup servings of sticky rice on dessert plates. Drizzle desserts with sauce and sprinkle with sesame seeds. Divide mango slices among plates.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 8,
          "howto": "\n1.In a blender or mortar, blend or pound garlic, salt, peanuts, chilies, sugar and shrimp (if using) into a paste. Transfer to a large bowl and mix in lime juice and fish sauce. Use a spoon (or the mortar) to lightly crush tomatoes and beans (if using), then add to bowl and mix lightly.2.Peel and coarsely grate or shred papaya, discarding seeds and inner membrane. There should be 4 to 6 cups.,3.Add papaya to bowl and lightly but thoroughly toss together. Taste for seasoning. Mound in a bowl (if desired, line bowl with lettuce leaves beforehand). Sprinkle with peanuts and serve.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 9,
          "howto": "1.Make sure you separate the egg yolks from the white very carefully. Leaving as little trace of egg whites as possible when separating. If there is a trace of egg whites, you can run the egg yolks through the sieve. This is to ensure you don't get any lumps in the kaya. Otherwise, beat the yolks until smooth just using a regular fork is perfectly fine. Run it through the sieve if you want to., 2.Place coconut cream, sugars, pandan leaves (for regular kaya), pandan extract or pandan juice (for pandan kaya) in a saucepan. ,3.Cook over medium heat and just cook until the sugar melted. It shouldn't be boiling, just heated to warm. ,4.Tempering the egg yolks:\nWith one hand still beating the egg yolks, the other hand holding the saucepan with coconut cream, add 1\/4 of the coconut cream mixture., 5.Continue doing so several times, 6.Then you can pour the egg mixture back to the saucepan., 7.Stir to mix everything and then place this on the stove over medium heat., 8.Continue to stir over medium heat. The mixture started to thicken for me at around 8 minutes mark and continue to stir. It may still appear a bit runny, but it will continue to thicken once it cools down completely. Discard the pandan leaves.,9.At 10 minutes mark, the kaya jam is thick enough. If you use pandan juice instead of extract, you may need to cook a bit longer to get to this consistency. Remove from the heat., 10.Spread the kaya generously on both sides of the toast,  Cut thin slices of cold butter and arrange it on top of the toast, about 4 slices. 11. Finish",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 10,
          "howto": "1. Preheat steamer and greasing pudding cups with oil. Place cups into steamer.,2. In a pot over medium high heat, melt sugar and water together. Set aside.,3. Combine rice flour, wheat starch and coconut milk into a smooth paste,4. Slowly whisk in sugar mixture.,5. Put mixture into a spouted cup for easy pouring. After steamer is heated for 2-3 minutes, pour mixture into the preheated pudding cups.,6. Add in beans.,7. Steam for 15-20 minutes.,8. Let pudding cakes cool for about 2 hours before serving.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 11,
          "howto": "1.Heat 1 tbsp oil in a very large heavy based skillet or wok over high heat,2.Add garlic, cook 15 seconds. Add chicken, cook until it mostly changes from pink to white.,3.Add Chinese broccoli stems, cook until chicken is almost cooked through.,4.Add Chinese broccoli leaves, cook until just wilted.,5.Push everything to one side, crack egg in and scramble. Remove everything onto a plate (scrape wok clean).,6.Return wok to stove, heat 2 tbsp oil over high heat. 7.Add noodles and Sauce. Toss as few times as possible to disperse Sauce and make edges of noodles caramelise. ,8.Quickly add chicken and veg back in, and toss to disperse. Serve immediately!",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 12,
          "howto": "1.Pour vegetable or mushroom stock into a large saucepan. Add in minced garlic, freshly grated ginger, soy sauce, rice wine vinegar, and miso if using. Bring the broth to a boil and reduce to a simmer.,2.Add in sliced mushrooms, red pepper, and bok choy into broth, and simmer for 7-10 minutes, or until greens are wilted.,3.Add in packaged ramen noodles (discard seasoning pack) and cook according to package directions–about 3 minutes.,4.Dish up cooked ramen into serving bowls and top ramen as desired. ",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 13,
          "howto": "1.Prepare sago pearls. Put a small pot of water to boil. Once boiling, add the sago seeds. Lower heat and cook for around 10 minutes. Turn off the heat and allow the remaining heat to finish cooking the sago seeds. When the sago seeds turn translucent, ladle up and place them in a bowl of water till ready to use.,2.Cut the pomelo. Slice off the top of the pomelo. Make vertical slits (about ½ inch thick) along the sides of the pomelo. Using your hand, peel off the skin working from the top to bottom. Peel away the membrane from 3 wedges of pomelo and remove the pomelo sacs. Loosen the sacs with a spoon and set aside.,3.Cut the mango into cubes. Reserve about a quarter of the mangoes and set aside to be used as toppings for the dessert.,4.Place the mango cubes, evaporated milk and ice cubes into a blender. Blend for a short while till smooth. I did not break the ice completely as I wanted some pieces of ice cubes inside the dessert. You may replace the ice cubes with water if you wish to chill it in the fridge.,5.Pour pureed mango into a large bowl. Strain cooked sago seeds with a small sieve and add into the mango puree. Add the pomelo sacs and 3 tbsp of sugar syrup (or to taste). Reserve some of the pomelo sacs for topping. Mix well.,6.Ration into serving bowls and top with reserved mango cubes and pomelo sacs. Serve immediately or refrigerate to chill and serve later.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 14,
          "howto": "1. Gather the ingredients. ,2. Combine water and tea leaves in a small saucepan over medium heat.,3. Bring to a low boil. Reduce heat and simmer for 3 minutes.,4. Remove from heat. Stir in sweetened, condensed milk. Return to heat.,5. Return to a boil. Simmer for 3 more minutes.,6. Strain tea and condensed milk.,7. Serve hot or (optional) chill and serve over ice. Small glasses are ideal.",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 16,
          "howto": "\n1.Heat oil in a wok or large pan over medium heat. Add pork shank, and turn up the heat a bit. Fry until golden brown on both sides. Transfer the leg to drain on a paper towel.,2.Pound garlic, peppercorns, and corriander in a mortar and pestle until it becomes a fine paste. Set aside.,3.Place fried pig leg in a pot and cover with water. Add garlic paste mixture, cinnamon, star anise, black soy, thin soy, Golden Mtn, salt, palm sugar, 5-spice, and eggs. Bring to a boil then reduce heat, and cook for another 2-3 hours until tender.,4.While the pork is cooking, thinly slice the pickled mustard green, gently squeeze it to remove the pickling liquid, and rinse it one time in a colander. Then slowly boil it in a bit of water or chicken stock, about 1.5 cups, until water evaporates, and set aside.,5.Separately, pound 2-3 fresh Thai chile peppers in a mortar and pestle. Transfer to a small sauce bowl, add 1 teaspoon salt and 1\/2 cup vinegar. This sauce should be served with the khao kha moo.,6.Serve the meat over steamed jasmine rice, topped with some pickled mustard green, steamed bokchoy and the chile-vinegar sauce.\n",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 17,
          "howto": "\n1.Heat oil in a wok or large pan over medium heat. Add pork shank, and turn up the heat a bit. Fry until golden brown on both sides. Transfer the leg to drain on a paper towel.,2.Pound garlic, peppercorns, and corriander in a mortar and pestle until it becomes a fine paste. Set aside.,3.Place fried pig leg in a pot and cover with water. Add garlic paste mixture, cinnamon, star anise, black soy, thin soy, Golden Mtn, salt, palm sugar, 5-spice, and eggs. Bring to a boil then reduce heat, and cook for another 2-3 hours until tender.,4.While the pork is cooking, thinly slice the pickled mustard green, gently squeeze it to remove the pickling liquid, and rinse it one time in a colander. Then slowly boil it in a bit of water or chicken stock, about 1.5 cups, until water evaporates, and set aside.,5.Separately, pound 2-3 fresh Thai chile peppers in a mortar and pestle. Transfer to a small sauce bowl, add 1 teaspoon salt and 1\/2 cup vinegar. This sauce should be served with the khao kha moo.,6.Serve the meat over steamed jasmine rice, topped with some pickled mustard green, steamed bokchoy and the chile-vinegar sauce.\n",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        },
        {

          "recipe_id": 18,
          "howto": "\n1.Heat oil in a wok or large pan over medium heat. Add pork shank, and turn up the heat a bit. Fry until golden brown on both sides. Transfer the leg to drain on a paper towel.,2.Pound garlic, peppercorns, and corriander in a mortar and pestle until it becomes a fine paste. Set aside.,3.Place fried pig leg in a pot and cover with water. Add garlic paste mixture, cinnamon, star anise, black soy, thin soy, Golden Mtn, salt, palm sugar, 5-spice, and eggs. Bring to a boil then reduce heat, and cook for another 2-3 hours until tender.,4.While the pork is cooking, thinly slice the pickled mustard green, gently squeeze it to remove the pickling liquid, and rinse it one time in a colander. Then slowly boil it in a bit of water or chicken stock, about 1.5 cups, until water evaporates, and set aside.,5.Separately, pound 2-3 fresh Thai chile peppers in a mortar and pestle. Transfer to a small sauce bowl, add 1 teaspoon salt and 1\/2 cup vinegar. This sauce should be served with the khao kha moo.,6.Serve the meat over steamed jasmine rice, topped with some pickled mustard green, steamed bokchoy and the chile-vinegar sauce.\n",
          "created_at": "2020-06-19T11:49:27Z",
          "updated_at": "2020-06-19T11:49:27Z"
        }
      ]);
    });
};
