import Image from "next/image";
import Link from "next/link";
import { FC } from "react";




const SmallCardItem: FC<any> = () => {
    return (
      <div className='flex flex-row mb-5'>
        {/* <img src='' alt='Image' className='h-24 w-24 mr-5' /> */}
        <Image src='https://i.natgeofe.com/n/c7be73b1-527f-467d-af2e-1806ae2a56e4/STOCK_MM9481_SOYI_USA_SD_WandaGarnier_square.jpg?w=390&h=390' alt='#' width={96} height={96} className='mr-5' />
        <div>
          <Link href="#" className=''>
            <div className='tracking-wider text-sm pb-1'>title</div>
            <div className=' text-base tracking-wide hover:underline'>description</div>
          </Link>
        </div>
      </div>
    )
  }
  
  export default SmallCardItem;