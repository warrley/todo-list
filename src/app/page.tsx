"use client"

import { Form } from "@/components/Form";
import { useState } from "react";
import { List } from "@/types/List";
import { ItemsContext } from "@/context/ItemContext";

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
