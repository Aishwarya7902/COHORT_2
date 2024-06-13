export function CreateTodo(){
    return <div>
        <input  style={{
            margin:10,
            padding:10
        }} type="text" placeholder="title"/><br /><br />
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="description"/><br /><br />

        <button>Add a todo</button>
    </div>
}