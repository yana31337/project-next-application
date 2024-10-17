import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/screens/home/Home'
import { ICardMedium } from '@/interfaces/cardMedium.intesfaces'
import { ICard, ICardData, ICardsData } from '@/interfaces/card.interfaces'
import { ICardLarge } from '@/interfaces/cardLarge.intesfaces'
import { GetStaticProps } from 'next'
import { CardService } from '@/services/card.service'


const inter = Inter({ subsets: ['latin'] })

export type CardsData = {
  mediumcard: ICard[],
  smallcard: ICard[],
  largecard: ICard[],
}

export default function PageHome(cards: CardsData) {
  return (
    <Home {...cards} />
  )
}

export const getStaticProps: GetStaticProps<ICardsData> = async () => {
  const cards = await CardService.getAll()
  const cardsData: CardsData = {
    mediumcard: cards.mediumcard,
    smallcard: cards.smallcard,
    largecard: cards.largecard
  }
  return {
    props: {
      cards: cardsData
    },
    revalidate: 60,
  }
}