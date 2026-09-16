import Hero from "@/components/hero";
import Posts from "@/components/posts";
import TechStack from "@/components/tech-stack";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <TechStack />
      <Projects />
      <Certificates />
      <Posts />
      <Footer />
    </main>
  );
}