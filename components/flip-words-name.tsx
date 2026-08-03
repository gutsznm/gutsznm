import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsName() {
  const words = ["Learner", "Engineer"];

  return (
    <div className="flex justify-center items-center">
      <div className="text-3xl sm:text-4xl font-light text-foreground flex flex-wrap items-center justify-center gap-1">
        <span>Backend</span>
        {/* Bungkus FlipWords dengan div yang punya lebar tetap */}
        <div className="inline-block min-w-[120px] sm:min-w-[160px]">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}