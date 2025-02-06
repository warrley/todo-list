import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ItemsContext } from "@/context/ItemContext";

export const Item = () => {

    const ItemsCtx = useContext(ItemsContext)

    return(
        <div className="flex flex-col gap-4 w-full text-lg lg:text-2xl">
            {ItemsCtx?.items.map(item => (
                <div className="bg-sky-500 py-2 px-3 lg:py-3 lg:px-4 rounded-md flex justify-between"key={item.id}>
                    {item.title}
                    <div className="flex gap-4">
                        <p className="cursor-pointer"><FontAwesomeIcon icon={faCheck}/></p>
                        <p className="cursor-pointer"><FontAwesomeIcon icon={faTrashCan} /></p>
                    </div>
                 </div>
            ))}
        </div>
    )
}