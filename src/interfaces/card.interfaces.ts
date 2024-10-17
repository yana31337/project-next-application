
export interface ICard {
    id: number,
    title: string,
    description: string,
    image: string,
    text: string,
    content: string,
}

export interface ICardData {
    mediumcard:  ICard[],
    smallcard: ICard[],
    largecard:  ICard[]
}

export interface ICardsData {
    cards: ICardData
}

export interface ICardDataSingle {
    card: ICard
}

