export interface Ingredients {
    malt: Malt[],
    hops: Hops[],
    yeast: string,
}

export interface Malt {
    name: string,
    amount: number,
}

export interface Hops {
    name: string,
    amount: number,
    addingTime: string,
    attribute: string,
}