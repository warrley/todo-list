import { ContextItems } from "@/types/ContextItem";
import { createContext } from "react";

export const ItemsContext = createContext<ContextItems | null>(null);
