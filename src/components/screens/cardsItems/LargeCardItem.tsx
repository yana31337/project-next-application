import Image from "next/image";
import { ICardDataSingleLarge } from '@/interfaces/cardLarge.intesfaces';
import Link from "next/link";


export default function LargeCardItem(props: ICardDataSingleLarge) {
    return (
        <div className=' h-auto relative'>
            <div className='absolute  flex flex-col w-full inset-x-0 bottom-0 ml-3'>
                <div className=''>
                    <a href="#" className='mr-5 uppercase hover:underline '> {props.largecard.title} </a>
                </div>

                <Link href={`/card/${props.largecard.id}`} className='text-4xl font-normal font-sans '> {props.largecard.description} </Link>
                <div className=' flex flex-row mb-2'>
                    <img src='../svg/menu.svg' alt="" className='w-4 h-4 aling-center mt-1 ' />
                    <a href="" className='uppercase ml-2'>Read</a>
                </div>
            </div>
            <Image src={props.largecard.image} alt='' width={670} height={400} className='' />
        </div>
    )
}
