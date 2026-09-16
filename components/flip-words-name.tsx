import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsName() {
  const words = ["Learner", "Enthusiast"];

  return (
    <div className="flex justify-center items-center">
      <div className="text-2xl sm:text-3xl font-light text-foreground flex flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap">
        <span>Tech</span>
        <div className="inline-block">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}