import Hero from "@/components/hero";
import Posts from "@/components/posts";
import TechStack from "@/components/tech-stack";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Certificates />
      <Posts />
    </main>
  );
}