import { Item } from "./Item"

export const Form = () => {
    return(
        <div className="gap-8 w-2/4 ring-2 ring-sky-500/90 bg-blue-900 rounded-lg flex items-center justify-center flex-col p-8 shadow-md shadow-sky-500/80">
            <h1 className="text-4xl font-semibold">Todo List</h1>

            <div className="w-full flex rounded-xl">
                <input placeholder="What's the task today?" type="text" className="outline-none text-blue-900 bg-tra p-3 flex-1 rounded-md rounded-r-none"/>
                <button className="py-2 px-3 bg-sky-500 rounded-r-md">Add Task</button>
            </div>

            <Item/>
        </div>
    )
}