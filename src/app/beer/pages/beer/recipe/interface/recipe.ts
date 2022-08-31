import { Characterisric } from "./characteristic";
import { Ingredients } from "./ingredients";

export interface BeerRecipe {
    title: string,
    description: string,
    characterisric?: Characterisric,
    ingredients?: Ingredients,
};
