
export interface ICard {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface ICardData {
    [x: string]: any
    card: ICard[]
    mediumcard:  ICard[],
    smallcard: ICard[],
    largecard:  ICard[]
}

export interface ICardDataSingle {
    card: ICard
}

