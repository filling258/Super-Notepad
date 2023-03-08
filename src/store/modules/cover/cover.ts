import {defineStore} from 'pinia'
interface cover{ 
      imgUrl:{
        id: number,
        url: string
      }[] 
}
export const cover=defineStore('cover',{
    state:():cover=>{
        return {
            imgUrl:[{
                id: 1001,
                url: "/src/assets/images/black_03.jpg"
            },{
                id: 1002,
                url: "/src/assets/images/green_03.jpg"
            },{
                id: 1003,
                url: "/src/assets/images/yellow_03.jpg"
            },{
                id: 1004,
                url: "/src/assets/images/zongse_03.jpg"
            }]
        }
    }
})