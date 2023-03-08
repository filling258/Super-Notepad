import router from "../router"
export const go=(name:string)=>{
    console.log(name);
    
    router.push({path: name})
}
export const goBack=()=>{
    router.back()
}