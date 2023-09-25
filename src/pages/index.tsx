import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/screens/home/Home'
import { ICardMedium } from '@/interfaces/cardMedium.intesfaces'
import { ICard, ICardData } from '@/interfaces/card.interfaces'
import { ICardLarge } from '@/interfaces/cardLarge.intesfaces'
import { GetStaticProps } from 'next'
import { CardService } from '@/services/card.service'


const inter = Inter({ subsets: ['latin'] })

export type CardData = {
  mediumcard: ICardMedium[],
  smallcard: ICard[],
  largecard: ICardLarge[],
  card: ICard[]
}

export default function PageHome(cards: ICard[]) {
  return (
    <Home card={cards} />
  )
}

export const getStaticProps: GetStaticProps<CardData> = async () => {
  const cards = await CardService.getAllSmall()
  return {
    props: {
      cards
    },
    revalidate: 60,
  }
}