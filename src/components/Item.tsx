import { list } from "@/data/list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

export const Item = () => {
    return(
        <div className="flex flex-col gap-4 w-full text-xl">
            {list.map(item => (
                <div className="bg-sky-500 py-3 px-4 rounded-md flex justify-between"key={item.id}>
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