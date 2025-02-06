import { useContext, useState } from "react";
import { Item } from "./Item";
import { ItemsContext } from "@/context/ItemContext";

export const Form = () => {
    const ItemsCtx = useContext(ItemsContext);
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (!ItemsCtx) return; // Evita erro se o contexto for null

        if (title.length > 0) {
            ItemsCtx.setItems([
                ...ItemsCtx.items,
                { id: ItemsCtx.items.length + 1, title, checked: false }
            ]);
            setTitle("");
        }
    };

    return (
        <div className="gap-4 lg:gap-8 w-5/6 lg:w-2/4 ring-2 ring-sky-500/90 bg-blue-900 rounded-lg flex items-center justify-center flex-col p-4 lg:p-8 shadow-md shadow-sky-500/80">
            <h1 className="lg:text-5xl text-3xl font-semibold">Todo List</h1>

            <div className="flex  rounded-xl text-md lg:text-2xl">
                <input
                    value={title}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAdd();
                    }}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's the task today?"
                    type="text"
                    className="outline-none text-blue-900 px-3 lg:p-4 flex-1 rounded-md rounded-r-none"
                />
                <button onClick={handleAdd} className="py-2 px-3 bg-sky-500 rounded-r-md">
                    Add Task
                </button>
            </div>

            <Item />
        </div>
    );
};
