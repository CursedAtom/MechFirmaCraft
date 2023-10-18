ServerEvents.recipes(event => {
    event.custom(
      {
         "type": "mekanism:combining",
         "extraInput": {
           "ingredient": {
             "tag": "forge:cobblestone/normal"
           }
         },
         "mainInput": {
           "ingredient": {
             "item": "minecraft:flint"
           }
         },
         "output": {
           "item": "minecraft:gravel"
         }
       }
       )
})