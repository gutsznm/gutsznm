import Hero from "@/components/hero";
import Posts from "@/components/posts";
import TechStack from "@/components/tech-stack";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Certificates />
      <Posts />
      <Footer />
    </main>
  );
}