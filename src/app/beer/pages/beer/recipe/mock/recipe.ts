import { BeerRecipe } from "../interface/recipe"

export let beer = {
    beers: [
        {
            id: 1,
            title: "dog fight",
            description: "rye ipa - flying dog collab.",
            characterisric: {
                volume: 20,
                boilVolume: 25,
                abv: 8.5,
                targetFg: 1012,
                targetOg: 1078,
                ebc: 31.2,
                srm: 15.6,
                ph: 4.4,
                attenuationLevel: 84.6
            },
            ingredients: {
                malt: [
                    {
                        name: "Extra Pale",
                        amount: 7
                    },
                    {
                        name: "Caramalt",
                        amount: 0.25
                    },
                    {
                        name: "Extra Pale",
                        amount: 1.5
                    }
                ],
                hops: [
                    {
                        name: "Chinook",
                        amount: 50,
                        addingTime: "Start",
                        attribute: "Bitter"
                    },
                    {
                        name: "Amarillo",
                        amount: 62.5,
                        addingTime: "Moddle",
                        attribute: "Flavour"
                    },
                    {
                        name: "Chinook",
                        amount: 62.5,
                        addingTime: "End",
                        attribute: "Flavour"
                    },
                    {
                        name: "Amarillo",
                        amount: 107.14,
                        addingTime: "Dry Hop",
                        attribute: "Aroma"
                    },
                    {
                        name: "Chinook",
                        amount: 142.86,
                        addingTime: "Dry Hop",
                        attribute: "Aroma"
                    }
                ],
                yeast: "Wyeast 1272 - American Ale"
            }
        },
        {
            id: 2,
            title: "brown ale",
            description: "Медведь на велосипеде",
            characterisric: {
                volume: 20,
                boilVolume: 25.5,
                abv: null,
                targetFg: 1012,
                targetOg: 1078,
                ebc: 31.2,
                srm: 15.6,
                ph: 4.4,
                attenuationLevel: 84.6
            },
            ingredients: {
                malt: [
                    {
                        name: "Pale Ale",
                        amount: 4
                    },
                    {
                        name: "Melano",
                        amount: 0.25
                    },
                    {
                        name: "Crystal 150",
                        amount: 0.35
                    },
                    {
                        name: "Chocolat",
                        amount: 0.08
                    },
                    {
                        name: "Special B",
                        amount: 0.35
                    }
                ],
                hops: [
                    {
                        name: "Galena",
                        amount: 5,
                        addingTime: "Start",
                        attribute: "Bitter"
                    },
                    {
                        name: "Golding",
                        amount: 8,
                        addingTime: "Start",
                        attribute: "Bitter"
                    },
                    {
                        name: "Golding",
                        amount: 8,
                        addingTime: "Middle",
                        attribute: "Flavour"
                    },
                    {
                        name: "Willamitte",
                        amount: 6,
                        addingTime: "Middle",
                        attribute: "Flavour"
                    },
                    {
                        name: "Willamitte",
                        amount: 15,
                        addingTime: "End",
                        attribute: "Flavour"
                    }
                ],
                yeast: "US - 05"
            }
        }
    ]
}