import { defineStore } from 'pinia'
interface data {  
        title?: string,
        content?: string,
}
interface note {
    noteList: {
        contentId: number,
        data: data []

    }[]
}
export const note = defineStore('note', {

    state: (): note => {
        return {
            noteList: [

            ]
        }
    },
    actions: {
        addContentId(contentId: number) {
            this.noteList.push({contentId,data: []})
        },
        updateNoteList(Id: number,data: {title: string,content: string}) {
            const index = this.noteList.findIndex(item => item.contentId ===Id)
            this.noteList[index].data.push(data)
        }
    }
})