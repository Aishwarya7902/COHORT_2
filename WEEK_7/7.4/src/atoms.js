import { atom, selectorFamily,atomFamily } from "recoil";
import axios from 'axios'
import { TODOS } from "./todos";

export const todosAtomFamily=atomFamily({
 key:"todosAtomFamily",
 default:selectorFamily({
    id:"todosSelectorFamily",
    get:(id)=>async ({get}) =>{
        await new Promise(r=>setTimeout(r,1000));
        const res=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
    }
 })
})


//atomFamily lets u dynamically create multiple atoms