import { ICardDataSingle } from "@/interfaces/card.interfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const SmallCardItem: FC<ICardDataSingle> = ({ card }) => {

  return (
   
    <div className='flex flex-row mb-5'>
      
      {/* <Image src="https://i.natgeofe.com/n/c7be73b1-527f-467d-af2e-1806ae2a56e4/STOCK_MM9481_SOYI_USA_SD_WandaGarnier_square.jpg?w=390&h=390" alt="" width={96} height={96} className='mr-5' /> */}
     <Image src={card.image} alt="" width={96} height={96} className='mr-5' />
      <div>
        <Link href={`/card/${card.id}`} className=''>
          <div className='tracking-wider text-sm pb-1'>{card.title}</div>
          <div className=' text-base tracking-wide hover:underline'>{card.description}</div>
        </Link>
      </div>
    </div>
  )
}

export default SmallCardItem;