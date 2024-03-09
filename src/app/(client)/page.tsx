export default function Page() {
  return (
     <div className='mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-90 hover:text-purple-500'>
       <span className="flex justify-center text-2xl font-bold mb-4">Hi! I am Eslan.</span>
       <p className="mb-4">
         Mi pasión por la web comenzó en 2019, cuando comencé a trabajar en proyectos sencillos con HTML, CSS y JavaScript. En ese momento, no tenía muchos vínculos con este mundo y me costaba encontrar información. Sin embargo, todo cambió en 2020 cuando ingresé a la universidad. Fue allí donde empecé a entender y aplicar de manera más efectiva mis habilidades de programación web.
       </p>
       <h2 className="text-xl font-semibold mb-2">Experiencia Profesional</h2>
       <ul className="list-disc pl-5">
         <li className="mb-1">Desarrollador Web - Autodidacta (2019 - 2020)</li>
         <li className="mb-1">Desarrollador Frontend - Xetid (2023)</li>
       </ul>
       <h2 className="text-xl font-semibold mb-2">Educación</h2>
       <ul className="list-disc pl-5">
         <li className="mb-1">Universidad - UCI, La Habana, Cuba (2016 - 2019)</li>
         <li className="mb-1">IPU - Pedro Valdivia Paz, Ciego de Avila, Cuba (2023)</li>
       </ul>
       <h2 className="text-xl font-semibold mb-2">Habilidades Técnicas</h2>
       <ul className="list-disc pl-5">
         <li className="mb-1">React</li>
         <li className="mb-1">Next.js</li>
         <li className="mb-1">TypeScript</li>
         <li className="mb-1">PostgreSQL</li>
       </ul>
     </div>
  );
 }
 