interface PostCardProps {
    title: string;
    description: string;
    date: string;
    category: string;
    link: string;
    source: "medium" | "linkedin";
  }
  
  export default function PostCard({ 
    title, 
    description, 
    date, 
    category, 
    link, 
    source 
  }: PostCardProps) {
    return (
      <article className="group p-6 rounded-lg border border-border/40 hover:border-border transition-colors hover:bg-card/30">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-3">
            <span className="flex items-center gap-1">
              {category}
            </span>
            <span className="text-muted-foreground/30">•</span>
            <span>{date}</span>
          </div>
          
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </a>
          
          <p className="text-sm text-muted-foreground mt-2 font-light flex-grow">
            {description}
          </p>
          
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground/60 group-hover:text-foreground transition-colors"
            >
              Read on {source === "medium" ? "Medium" : "LinkedIn"} →
            </a>
          </div>
        </div>
      </article>
    );
  }