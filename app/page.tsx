import Hero from '@/components/Sections/Hero';
import Projects from '@/components/Sections/Projects';
import Skills from '@/components/Sections/Skills';
import Contact from '@/components/Sections/Contact';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className='relative flex flex-col w-full h-full overflow-hidden mx-auto sm:px-10 px-5 z-50 '>
      <Nav />

      <div className='w-full'>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
