import { Characterisric } from "./characteristic";
import { Ingredients } from "./ingredients";

export interface BeerRecipe {
    id: number | undefined,
    title: string,
    description: string,
    characterisric?: Characterisric,
    ingredients?: Ingredients,
};
