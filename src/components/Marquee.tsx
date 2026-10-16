const skills = [
  "Web Design",
  "UI/UX",
  "React",
  "TypeScript",
  "Figma",
  "Motion Design",
  "Branding",
  "Prototyping",
  "CSS Animation",
  "Design Systems",
];

const Marquee = () => {
  return (
    <div className="py-12 bg-charcoal-light border-y border-border overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="font-display text-2xl md:text-4xl text-foreground/10 hover:text-primary transition-colors duration-500 cursor-default whitespace-nowrap">
                {skill}
              </span>
              <span className="ml-8 w-2 h-2 rounded-full bg-primary/30" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden>
          {[...skills, ...skills].map((skill, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-8">
              <span className="font-display text-2xl md:text-4xl text-foreground/10 hover:text-primary transition-colors duration-500 cursor-default whitespace-nowrap">
                {skill}
              </span>
              <span className="ml-8 w-2 h-2 rounded-full bg-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
