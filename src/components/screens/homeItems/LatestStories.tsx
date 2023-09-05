import React, { FC } from 'react'
import SmallCardItem from '../cardsItems/SmallCardItem';
import MediumCardItem from '../cardsItems/MediumCardItem';
import LargeCardItem from '../cardsItems/LargeCardItem';

const LatestStories: FC<any> = () => {
    return (
        <div className='bg-black w-screen'>

            <div className='grid grid-cols-12 gap-x-10 col-start-auto max-w-5xl mx-auto my-0 text-white pb-14'>

                <div className='col-span-12 text-center pt-16 pb-9 '>
                    <h2 className='text-5xl font-semibold uppercase tracking-wider'> Latest Stories</h2>
                    <div className='text-lg font-normal leading-6 mt-3.5 mb-7 mx-0'>
                        <span className='tracking-wider'>
                            <a href="" className='decoration-yellow-500 underline decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black min-w-fit '> Subscribe </a>  for full access to read stories from National Geographic.
                        </span>
                        <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
                        </div>
                    </div>
                </div>

                <div className='col-span-4'>

                    <div className='flex ml-2'>
                        <div className='w-1 mr-4 mb-8 h-8 bg-yellow-400'> </div>
                        <h2 className=' uppercase text-3xl mb-8 '>Today's Picks</h2>
                    </div>

                    <div>
                        <SmallCardItem />

                        <SmallCardItem />
                        <SmallCardItem />
                        <SmallCardItem />
                        <SmallCardItem />
                        <SmallCardItem />
                    </div>

                    <div>
                        <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
                    </div>

                </div>

                <div className='col-span-8 '>

                    <LargeCardItem />

                    <div className='flex flex-row justify-between h-1/2 mt-10'>
                        <MediumCardItem />
                        <MediumCardItem />

                    </div>

                </div>
            </div>
            <div className='py-10 bg-gray-200 w-full'>

            </div>
        </div>
    )
}

export default LatestStories;