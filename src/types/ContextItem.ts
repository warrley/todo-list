import { List } from "./List"

export type ContextItems = {
    items: List[];
    setItems: (a: List[]) => void
}