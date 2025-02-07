import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ItemsContext } from "@/context/ItemContext";

export const Item = () => {
    const ItemsCtx = useContext(ItemsContext);
    const [hoverDelete, setHoverDelete] = useState<number | null>(null);
    const [hoverCheck, setHoverCheck] = useState<number | null>(null);

    if(!ItemsCtx || !ItemsCtx?.items) return; //verifica para garantir que ItemsCtx não seja undefined

    const handleDelete = (id: number) => {
        const newList = ItemsCtx?.items.filter(key => key !== ItemsCtx?.items[id]);
        ItemsCtx?.setItems(newList);
    };


    const hoverTrueDelete = (id: number) => {
        setHoverDelete(id);
    };

    const hoverFalseDelete = () => {
        setHoverDelete(null);
    };

    const hoverTrueCheck = (id: number) => {
        setHoverCheck(id);
    };

    const hoverFalseCheck = () => {
        setHoverCheck(null);
    };

    return(
        <div className="flex flex-col gap-4 w-full text-lg lg:text-2xl">
            {ItemsCtx?.items.map(item => (
                <div className={`${hoverDelete === item.id ? 'bg-red-600' : 'bg-sky-500'} ${hoverCheck === item.id ? 'bg-green-600' : 'bg-sky-500'} transition-all duration-200 py-2 px-3 lg:py-3 lg:px-4 rounded-md flex justify-between`}key={item.id}>
                    <p>{item.title}</p>
                    <div className="flex gap-4">
                        <p className="cursor-pointer" onMouseOver={() => hoverTrueCheck(item.id)} onMouseLeave={() => hoverFalseCheck()} onClick={() => handleCheck(item.id)}><FontAwesomeIcon icon={faCheck}/></p>
                        <p className="cursor-pointer" onMouseOver={() => hoverTrueDelete(item.id)} onMouseLeave={() => hoverFalseDelete()} onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></p>
                    </div>
                </div>
            ))}
        </div>
    )
}