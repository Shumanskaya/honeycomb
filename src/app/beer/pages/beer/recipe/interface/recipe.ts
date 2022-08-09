import { Characterisric } from "./characteristic";
import { Ingredients } from "./ingredients";

export interface BeerRecipe {
    id: number;
    title: string,
    description: string,
    characterisric?: Characterisric,
    ingredients?: Ingredients,
};
