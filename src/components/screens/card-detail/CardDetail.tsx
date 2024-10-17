import Layout from "@/components/layout/Layout";
import { ICardDataSingle } from "@/interfaces/card.interfaces";
import { FC } from "react";
import Image from "next/image";
import { CardsData } from "@/pages";

const CardDetail: FC<ICardDataSingle> = ({ card })=> {
    return (
        <div className='flex flex-row mb-5'>
            <Image src={card.image} alt="" width={96} height={96} className='mr-5' />
            <div>

                <div className='tracking-wider text-sm pb-1'>{card.title}</div>
                <div className=' text-base tracking-wide hover:underline'>{card.description}</div>

            </div>
        </div>
    )
}

export default  CardDetail;