import { FC } from "react"

const MediumCardItem: FC<any> = () => {
    return (
        <div className='w-80 text-black md:w-72'>
            <div className='h-auto relative'>
                <div className='absolute flex flex-col w-full inset-x-0 bottom-0 pl-3  bg-white   '>
                    <div className=''>
                        <a href="#" className='mr-5  text-xs uppercase'> title</a>
                    </div>

                    <a href="#" className=' text-xl font-medium font-sans '> description </a>
                    <div className='flex flex-row mb-2'>
                        <img src='../svg/menuBlack.svg' alt="" className='w-4 h-4 aling-center' />
                        <a href="" className='uppercase ml-2 text-xs'>Read</a>
                    </div>
                </div>
                <img src='https://i.natgeofe.com/n/db3d5094-277a-40b4-b922-6f58450b7ed3/DSC03088_4x3.jpg?w=620&h=466' alt="" className='' />
            </div>
        </div>

    )
}

export default MediumCardItem




