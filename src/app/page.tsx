import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <AuroraBackground>
      <Container>
        <span className="text-4xl">👋</span>
        <Heading className="font-black">DuneAI</Heading>
        <Paragraph className="max-w-xl mt-4">Let's get started</Paragraph>
      </Container>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </AuroraBackground>
  );
}
