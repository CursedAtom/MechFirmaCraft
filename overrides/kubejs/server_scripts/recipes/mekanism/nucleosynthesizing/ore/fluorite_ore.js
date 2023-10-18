ServerEvents.recipes(event => {
  event.custom(
      {
          "type": "mekanism:nucleosynthesizing",
          "duration": 1000,
          "gasInput": {
            "amount": 4,
            "gas": "mekanism:antimatter"
          },
          "itemInput": {
            "ingredient": {
              "item": "mekanism:fluorite_ore"
            }
          },
          "output": {
            "amount": 2,
            "item": "mekanism:fluorite_ore"
          }
        }
     )
})