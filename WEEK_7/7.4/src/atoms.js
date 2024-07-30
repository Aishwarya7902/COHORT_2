import { atom, selector,atomFamily } from "recoil";
import axios from 'axios'
import { TODOS } from "./todos";

export const todosAtomFamily=atomFamily({
 key:"todosAtomFamily",
 default: id => {
   return TODOS.find(x=> x.id===id)
 }
})


//atomFamily lets u dynamically create multiple atoms