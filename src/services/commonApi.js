import axios from "axios";
import { baseURL } from "./serverURL"; 

// configuration file for axios

const commonApi = async(httpmethod,endPoint,requestBody)=>{
    const requestConfig={
 method:httpmethod,
 url : baseURL+endPoint,
 data:requestBody
    }
 return await axios(requestConfig).then((res)=>{
    return res
}).catch((err)=>{
    return err
})

}

export default commonApi