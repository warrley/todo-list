import { List } from "./List";
import { Dispatch, SetStateAction } from "react";

export type ContextItems = {
    items: List[];
    setItems: Dispatch<SetStateAction<List[]>>; // Tipagem correta
}
