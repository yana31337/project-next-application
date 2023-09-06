import Image from "next/image";
import { ICardDataSingleLarge } from '@/interfaces/cardLarge.intesfaces';


export default function LargeCardItem(props: ICardDataSingleLarge) {
    return (
        <div className=' h-auto relative'>
            <div className='absolute  flex flex-col w-full inset-x-0 bottom-0 ml-3'>
                <div className=''>
                    <a href="#" className='mr-5 uppercase hover:underline '> title </a>
                </div>

                <a href="#" className='text-4xl font-normal font-sans '> description </a>
                <div className=' flex flex-row mb-2'>
                    <img src='../svg/menu.svg' alt="" className='w-4 h-4 aling-center mt-1 ' />
                    <a href="" className='uppercase ml-2'>Read</a>
                </div>
            </div>
            <Image src="https://i.natgeofe.com/n/014fd16c-b6f9-4103-8a97-58020c6c98d7/MM9980_220726_254-2_4x3.jpg?w=1272&h=954" alt='' width={670} height={400} className='' />
        </div>
    )
}
