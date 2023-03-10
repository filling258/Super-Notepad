import { defineStore } from 'pinia'
interface data {
    title?: string,
    content?: string,
}
interface note {
    noteList: {
        contentId: number,
        data: data[]

    }[]
}
export const note = defineStore('note', {

    state: (): note => {
        return {
            noteList: [
                {
                    contentId: 10000000,
                    data: []
                }
            ]
        }
    },
    actions: {
        addContentId(contentId: number) {
            this.noteList.push({ contentId, data: [] })
        },
        updateNoteList(Id: number, data: { title: string, content: string }) {
            const index = this.noteList.findIndex(item => item.contentId === Id)
            if(index!==0){
                this.noteList[0].data.push(data)
                this.noteList[index].data.push(data)
            }else {
                this.noteList[0].data.push(data)
            }
        }
    }
})