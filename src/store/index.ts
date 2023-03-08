import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import {defineStore} from 'pinia'
import { cover } from './modules/cover/cover'
import { noteBook } from './modules/noteBook/noteBook'
const pinia=createPinia()
pinia.use(piniaPersist)

interface test{
    name:string,
    age: number
    sex: string
}
export const testStore=defineStore('test',{
    state:():test=>{
        return {
            name:'kljhj',
            age: 18,
            sex: '男'
        }
    }
})
export {cover,noteBook}
export default pinia
