import axios from 'taro-axios'
import {useState, useEffect} from 'react'
axios.defaults.baseURL = 'http://127.0.0.1:3350/api'
type mixinUpperCase<T> = T
type axiosType = {
    url: string,
    method?: mixinUpperCase<'post' | 'get'>,
    body?:object,
}
type axiosReturnType = {
    res: object,
    loading : boolean,
    error: object,
}
const useAxios = (url :string, method ?:'post'|'get', body ?:object) :axiosReturnType=>{
    const [res, setRes] = useState<any>(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState<any>(null)
    const fetchData = ()=>{
        if(typeof method == 'undefined') method = 'post'
        axios[method](url, body)
        .then(result =>{
            // console.log(result)
            setRes(result.data)
        })
        .catch(err=>{
            seterror(err)
        })
        .finally(()=>{
            
            setTimeout(()=>setloading(false), 150)
        })
    }
    useEffect(() => {
        fetchData()
    }, [url, method])
    return {res, loading, error}
}

export default useAxios