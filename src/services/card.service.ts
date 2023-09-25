import { ICard, ICardData } from "@/interfaces/card.interfaces"
import { CardData } from "@/pages"
import axios from "axios"

const API_URL = 'http://localhost:7000'

axios.defaults.baseURL = API_URL

export const CardService = {
    async getAllSmall() {
        const { data } = await axios.get<CardData[]>('/cards')
        console.log(data)
        return data
    },

    async getByIdSmall(id: string) {
        const { data } = await axios.get<ICard>('/cards/:cardId', {
            
            params: {
                id
            },
        })
       

        return data[0]
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