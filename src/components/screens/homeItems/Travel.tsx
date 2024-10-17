
import { FC } from "react"
import Image from "next/image"
import LargeCardItem from "../cardsItems/LargeCardItem"
import MediumCardItem from "../cardsItems/MediumCardItem"
import SmallCardItem from "../cardsItems/SmallCardItem"
import { CardsData } from "@/pages"
import { ICard } from "@/interfaces/card.interfaces"


const Travel: FC = ({cards} : {cards: CardsData}) => {
    return (
        <div className='bg-black '>

            <div className=' text-white pb-10 relative  h-auto ml-auto'>

                <div className='absolute grid grid-cols-12 gap-x-10 col-start-auto max-w-5xl text-white pb-14  ml-52'>

                    <div className='col-span-12 text-center py-16 min-h-min'>
                        <h2 className='text-5xl font-semibold uppercase tracking-wider'> Travel</h2>
                        <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
                        </div>
                    </div>

                    <div className='col-span-8'>

                        <LargeCardItem largecard={cards.largecard[1]} />

                        <div className='flex flex-row justify-between mt-10'>
                        <MediumCardItem mediumcard={cards.mediumcard[2]} />
                        <MediumCardItem mediumcard={cards.mediumcard[3]} />
                        </div>

                    </div>

                    <div className='col-span-4'>

                        <div className='flex ml-2 '>
                            <div className='w-1 mr-4 mb-4 h-8 bg-yellow-400'> </div>
                            <h2 className=' uppercase text-3xl mb-4 '>Today's Picks</h2>
                        </div>

                        <div >
                        {cards.smallcard.map((card: ICard)=> <SmallCardItem key={card.id} card={card}/>)}
                      
                        </div>

                        <div className=''>
                            <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
                        </div>
                    </div>

                </div>
                <Image src='/jpg/national.jpg' alt="" width={1440} height={500} className="" />
                <div className='bg-black h-40 '></div>

            </div>

        </div>
    )
}

export default Travel