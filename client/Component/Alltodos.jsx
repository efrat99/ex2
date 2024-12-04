import { useReducer, useRef } from "react"
import Todo from "./Todo"

const Alltodos=()=>{
    const update=(state,action)=>
    {
        switch(action.type)
        {
            case "ADD":
                console.log(action.what)
                const s1=state.map(a=>{return {id:a.id,name:a.name}})
                s1.push(action.what)
                return s1//state.map(a=>{return {id:a.id,name:a.name}}).push(action.what)
            case "DELETE":
                return state.filter(assignment=>assignment.id!=action.what.id)
                default: throw new Error()
        }
    }

    const intial=[{id:1,name:"go shopping"},{id:2,name:"do homework"},{id:3,name:"clean the floor"}]
    const [assignments,dispatch]=useReducer(update,intial)
    const refid=useRef(0)
    const refname=useRef("")
    return(
        <>
        <label>id:</label>
        <input type="number" ref={refid}/>
        <label>name:</label>
        <input type="text" ref={refname}/>
        <button onClick={()=>{dispatch({type:"ADD",what:{id:refid.current.value,name:refname.current.value}})}}>Add❤❤</button>
        {console.log(assignments.type)}
        {assignments.map(a=>{return <Todo assignment={{id:a.id,name:a.name}} dispatch={dispatch}/>})}
        </>
    )

}
export default Alltodos

