import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming 
  { name: "C", level: 85, category: "Programming" },
  { name: "Python", level: 90, category: "Programming" },
  { name: "Java", level: 90, category: "Programming" },
  { name: "C++", level: 85, category: "Programming" },


  // Web Development
  { name: "HTML", level: 95, category: "Web Development" },
  { name: "CSS", level: 95, category: "Web Development" },
  { name: "JavaScript", level: 90, category: "Web Development" },
  { name: "Bootstrap", level: 85, category: "Web Development" },
  { name: "React", level: 90, category: "Web Development" },
  { name: "Next.js", level: 80, category: "Web Development" },
  { name: "Node.js", level: 80, category: "Web Development" },
  { name: "Express.js", level: 75, category: "Web Development" },
  { name: "MongoDB", level: 70, category: "Web Development" },
  { name: "MySQL", level: 90, category: "Web Development" },
   
  //AI/ML
  { name: "Artificial Intelligence", level: 90, category: "AI/ML" },
  { name: "Machine Learning", level: 90, category: "AI/ML" },
  { name: "Deep Learning", level: 85, category: "AI/ML" },
  { name: "Natural Language Processing", level: 80, category: "AI/ML" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Anaconda", level: 85, category: "Tools" },
  { name: "IntellijIdea", level: 85, category: "Tools" },
];

const categories = ["All", "Programming","Web Development", "AI/ML", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
