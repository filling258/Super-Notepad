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
            ]
        }
    },
    actions: {
        addNoteBook(payld: {randomId:number,selectIndex:number,text: string,num:number}) {
            this.noteBookList.push(payld)
            console.log(this.noteBookList);
            
        }
      },
})