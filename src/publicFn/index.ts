import router from "../router"
export const go = (name: string) => {
    router.push({ path: name })
    return false
}
export const goBack = () => {
    router.back()
}
export const currentPath = (val: string) => {
    if (val === "/") {
        return '全部笔记'
    } else if (val === '/Agent') {
        return '代办'
    } else {
        return Number(val.substring(10))
    }
}
export const getTime=()=>{
    const Time=new Date()
    const M=Time.getMonth()
    const D=Time.getDate()
    const h=Time.getHours()
    const m=Time.getMinutes()
    return {M,D,h,m}
}