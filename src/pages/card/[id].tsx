import { ICardDataSingle } from "@/interfaces/card.interfaces";
import { CardService } from "@/services/card.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CardsData } from "..";
import { ParsedUrlQuery } from "querystring";
import CardDetail from "@/components/screens/card-detail/CardDetail";
import Layout from "@/components/layout/Layout";

const CardDetailPage: NextPage<ICardDataSingle> = ({ card }) => {

    return (
        <>
            <Layout>
                {/* <CardDetail card={card} /> */}
                <div className='flex flex-row mb-5 '>
                    <Image src={card.image} alt="" width={794} height={764} className='mr-5 w-3/5' />
                    <div className="flex flex-col pr-32 w-auto my-auto ">
                        <div className="flex mb-6">
                            <div className="font-black text-lg text-yellow-500 mr-5">|</div>
                            <div className="tracking-wider text-lg font-bold uppercase pb-1">{card.title}</div>
                            <div className="font-black text-lg text-yellow-500 ml-5">|</div>
                        </div>
                        <div className=" text-4xl font-black tracking-wide ">{card.description}</div>
                        <div className=" text-base tracking-wide mt-5 ">{card.text}</div>
                    </div>
                </div>
                <div className="w-1/2 text-lg mx-auto ">
                    {card.content}
                </div>
            </Layout>
        </>
    )
}

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cards = await CardService.getAll()

    return {
        paths: cards.smallcard.map(card => ({
            params: {
                id: card.id.toString(),
            }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<ICardDataSingle> = async ({ params }) => {
    const card = await CardService.getById(String(params?.id))
    // const cardsData: CardsData = {
    //   mediumcard: cards.mediumcard,
    //   smallcard: cards.smallcard,
    //   largecard: cards.largecard
    // }
    console.log(card)
    return {
        props: {
            card
        },
        revalidate: 60,
    }
}

export default CardDetailPage;