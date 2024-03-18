import Image from 'next/image';
import { SiNextdotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si';
export const runtime = 'edge';

export default function Page() {
  return (
    <>
      <section className='flex flex-col items-center justify-center mb-2 p-2 text-sm dark:bg-gray-950 border dark:border-gray-90 text-center'>
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
          <Image
            src="/avatar.webp"
            alt="Avatar de Eslán"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">Bienvenido a mi Blog! Soy Eslán Sánchez.</h1>
        <p className="mb-4 text-center font-sans text-lg">
          Estudiante de <strong>Ingienería en Ciencias Informáticas</strong>,
          Desarrollador Web. Soy de Cuba, tengo 22 años. Me defino por ser una persona con ganas de aprender, creativo y espontáneo. Me gustan los retos. Estoy en la universidad terminando mis estudios y trabajando a la vez.
        </p>
        <h2 className="text-xl font-semibold mb-2">Experiencia Laboral</h2>
        <ul className="list-disc pl-5 text-center">
          <li className="mb-1">Desarrollador Web - Autodidacta (2024)</li>
          <li className="mb-1">Desarrollador Frontend - Xetid (2023)</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Educación</h2>
        <ul className="list-disc pl-5 text-center">
          <li className="mb-1">Universidad - Universidad de Ciencias Informáticas, La Habana, Cuba (2021)</li>
          <li className="mb-1">IPU - Pedro Valdivia Paz, Ciego de Ávila, Cuba (2016 - 2019)</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Habilidades Técnicas</h2>
        <ul className="list-disc pl-5 text-center text-lg">
          <li className="mb-1 flex items-center justify-center">React <SiReact className="ml-2" size={24} /></li>
          <li className="mb-1 flex items-center justify-center">Next.js <SiNextdotjs className="ml-2" size={24} /></li>
          <li className="mb-1 flex items-center justify-center">TypeScript <SiTypescript className="ml-2" size={24} /></li>
          <li className="mb-1 flex items-center justify-center">PostgreSQL <SiPostgresql className="ml-2" size={24} /></li>
        </ul>
      </section>
    </>
  );
}
