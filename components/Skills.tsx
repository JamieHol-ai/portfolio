import { HoverEffect } from "./ui/CardHoverEffect";
import { skills } from "@/data";
 
export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="heading">
            Some {" "} 
            <span className="text-purple">skills</span>
            {" "} I've picked up
        </h1>
        <HoverEffect items={skills}/>
    </div>
  );
}