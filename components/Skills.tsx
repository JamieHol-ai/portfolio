import { HoverEffect } from "./ui/CardHoverEffect";
import { skills } from "@/data";
 
export function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-20" id="skills">
        <h1 className="heading">
            Some {" "} 
            <span className="text-purple">skills</span>
            {" "} I&apos;m developing
        </h1>
        <HoverEffect items={skills}/>
    </section>
  );
}