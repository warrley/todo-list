"use client"

import { Form } from "@/components/Form";
import { ContextItems } from "@/types/ContextItem";
import { List } from "@/types/List";
import { createContext, useState } from "react";

export const ItemsContext = createContext<ContextItems | null>(null)

export default function Home() {
  const [items, setItems] = useState<List[]>([
      {id: 1, title: "example 1", checked: false},
      {id: 2, title: "example 2", checked: false}
  ])

  


  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <div className="h-screen w-full bg-zinc-800 flex items-center justify-center flex-col">
        <Form/>
      </div>

      
    </ItemsContext.Provider>
  );
}
