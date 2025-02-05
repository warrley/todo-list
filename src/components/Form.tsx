import { useContext, useState } from "react"
import { Item } from "./Item"
import { List } from "@/types/List"
import { createContext } from "vm"
import { ItemsContext } from "@/app/page"
import { setMaxListeners } from "events"

export const Items = createContext()

export const Form = () => {
    const ItemsCtx = useContext(ItemsContext);
    const [title, setTitle] = useState('');

    const handleAdd = () => {
        ItemsCtx?.setItems([
            ...ItemsCtx.items,
            {id: (ItemsCtx.items.length + 1 ), title: title, checked: false}
        ]);
        setTitle('');
    }

    return(
        <div className="gap-8 w-2/4 ring-2 ring-sky-500/90 bg-blue-900 rounded-lg flex items-center justify-center flex-col p-8 shadow-md shadow-sky-500/80">
            <h1 className="text-5xl font-semibold">Todo List</h1>

            <div className="w-full flex rounded-xl text-2xl">
                <input value={title} onKeyDown={e => e.key === 'Enter' && handleAdd()} onChange={e => setTitle(e.target.value)} placeholder="What's the task today?" type="text" className="outline-none text-blue-900 bg-tra p-4 flex-1 rounded-md rounded-r-none"/>
                <button onClick={() => handleAdd()} className="py-2 px-3 bg-sky-500 rounded-r-md" >Add Task</button>
            </div>

            <Item/>
        </div>
    )
}