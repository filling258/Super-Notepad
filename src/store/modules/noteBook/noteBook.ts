import {defineStore} from 'pinia'
interface noteBook{
    noteBookList:{
        randomId:number,
        selectIndex: number,
        text: string,
        num: number
    }[]
}
export const noteBook=defineStore('noteBook',{
    state:(): noteBook=>{
        return {
            noteBookList:[
                // {
                //     imgId: 56,
                //     text: 'jhkl',
                //     num: 787
                // }
            ]
        }
    },
    actions: {
        addNoteBook(payld: {randomId:number,selectIndex:number,text: string,num:number}) {
            this.noteBookList.push(payld)
        }
      },
})