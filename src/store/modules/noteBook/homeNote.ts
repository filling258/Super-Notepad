import { defineStore } from 'pinia'
interface homeNote{
    homeNote:{
        title?: string,
        content: string
    }
}
export const homeNote = defineStore('homeNote', {
    state: () => {
        return {

        }
    }
})