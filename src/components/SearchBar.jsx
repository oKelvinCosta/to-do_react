import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function SearchBar() {
  return (
    <>
      <div className="flex relative w-full gap-2">
        <Textarea placeholder="Your task" className="pr-[80px]" />
        <Button className="absolute right-3 bottom-3 ">Add</Button>
      </div>
    </>
  );
}
