import { AboutSection } from "@/components/about-section";
import KripuKhadka from "@/assets/kripukhadka.webp"


export default function Home() {
    return (
        <main>
         <AboutSection ImageLink={KripuKhadka} title="Hi, 👋 I'm Kripu Khadka!" description="I am a Software Engineer who specializes in designing and developing platforms to solve problems through code."/>
        </main>
    );
}
