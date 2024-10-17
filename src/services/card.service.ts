import { ICard, ICardData, ICardsData } from "@/interfaces/card.interfaces"
import { CardsData } from "@/pages"
import axios from "axios"

const API_URL = 'http://localhost:7000'

axios.defaults.baseURL = API_URL

export const CardService = {
    async getAll() {
        const { data } = await axios.get<ICardsData>('/cards')
        return data.cards
    },

    async getById(id: string) {
        const uri = `/cards/${id}`
        const { data } = await axios.get<ICard>(uri)
        return data
    },
}

// export const CardMediumService = {
//     async getAllMedium() {
//         const { data } = await axios.get<ICardMedium[]>('/mediumcard')
//         return data
//     },

//     async getByIdMedium(id: string) {
//         const { data } = await axios.get<ICardMedium[]>('/mediumcard', {
//             params: {
//                 id
//             },
//         })

//         return data[0]
//     },
// }

// export const CardLargeService = {
//     async getAllLarge() {
//         const { data } = await axios.get<ICardLarge[]>('/largecard')
//         return data
//     },

//     async getByIdLarge(id: string) {
//         const { data } = await axios.get<ICardLarge[]>('/largecard', {
//             params: {
//                 id
//             },
//         })

//         return data[0]
//     },
// }