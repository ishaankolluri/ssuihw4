class GlobalFlavors {
  constructor(){
    this.flavors = [
      "caramelpecan@2x.jpg",
      "mapleapple@2x.jpg",
      "original@2x.jpg",
      "vegan@2x.jpg",
      "gluten@2x.jpg",
      "bacon@2x.jpg",
      "cranberry@2x.jpg",
      "buttermilk@2x.jpg",
      "bday@2x.jpg",
      "carrot@2x.jpg",
      "lemon@2x.jpg",
      "pumpkin@2x.jpg",
      "strawberry@2x.jpg",
      "walnut@2x.jpg",
      "blackberry@2x.jpg",
    ];
    this.names = [
      "Caramel Pecan",
      "Maple Apple Pecan",
      "Original",
      "Original(Vegan)",
      "Original(Gluten-Free)",
      "Bacon",
      "Cranberry",
      "Buttermilk",
      "Birthday Cake",
      "Carrot Cake",
      "Lemon",
      "Pumpkin Spice",
      "Strawberry",
      "Walnut",
      "Blackberry",
    ]
  }
}

// Singleton
export default (new GlobalFlavors());