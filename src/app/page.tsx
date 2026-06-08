import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Featured from "@/components/Featured";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Featured />
        <Collection />
        <About />
      </main>
      <Footer />
    </>
  );
}
