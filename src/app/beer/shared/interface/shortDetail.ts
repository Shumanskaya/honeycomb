import { Characterisric } from "./characteristic";

export interface Details {
    //TODO id:number нужно переделать на тип string
    id: number,
    title: string,
    characterisric?: Characterisric,
    image?: string;
};