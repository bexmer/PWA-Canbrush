"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Iconos ---
const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7H13M13 7L7 1M13 7L7 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// --- Animaciones ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.1 },
};

export default function Home() {
  return (
    <div className="bg-light-bg flex flex-col items-center">
      <motion.header
        className="fixed top-4 z-50 w-[95%] max-w-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-dark-card text-white/80 rounded-full flex justify-between h-16 items-center p-2 px-6 md:px-10 shadow-header">
          <div className="font-bold text-base md:text-lg tracking-wider">
            LEFT4TEAM
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#studio" className="hover:text-white transition-colors">
              Studio
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </motion.header>

      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-center items-center text-center px-4">
        <motion.div
          className="absolute inset-0 z-0 bg-gray-300"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/imagen_hero.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <motion.div
          className="relative z-10 flex flex-col gap-12 md:gap-20 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h1
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            CanBrush!
          </h1>
          <button className="bg-cyan-800 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-xl w-full max-w-xs md:w-[40%] hover:bg-cyan-700 transition-colors">
            Descargar
          </button>
        </motion.div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 space-y-24 md:space-y-32">
        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Mecánicas
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mt-4">
            ¿Qué puedes encontrar en el juego?
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            CanBush! es un juego en primera persona ambientado en realidad
            virtual donde el jugador sobrevive a oleadas de enemigos utilizando
            un pincel y una libreta mágica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">
                Combate mediante patrones
              </h3>
              <p className="text-gray-text mt-2">
                El jugador debe enfrentarse a criaturas hostiles utilizando su
                pincel principal para dibujar patrones o símbolos que
                representen a los enemigos.
              </p>
              <span className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6">
                Parte esencial
              </span>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">Trampas estratégicas</h3>
              <p className="text-gray-text mt-2">
                Con un pincel secundario, el jugador puede pintar trampas y
                obstáculos sobre el mapa para ralentizar o dañar a los enemigos.
              </p>
              <span className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6">
                Ayuda al jugador
              </span>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">Explosión de energía</h3>
              <p className="text-gray-text mt-2">
                Tras eliminar una cantidad determinada de enemigos, el jugador
                puede liberar una explosión de energía en área, generando un
                ataque masivo.
              </p>
              <span
                id="studio"
                className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6"
              >
                Momento de la gloria
              </span>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Referencias del Juego
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mt-4">
            Ampliamos tu perspectiva con un vistazo al juego
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            Transformamos tu visión en realidad con una jugabilidad creativa y
            envolvente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <div className="w-full h-80 md:h-96 bg-card-bg rounded-3xl mb-6 relative">
                <Image
                  src="/juego_ref_1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Combate"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="font-semibold text-xl text-left">Combate</h3>
              <p className="text-gray-text text-left mt-2">
                Pelea para sobrevivir en un mundo hostil con tu pincel.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <div className="w-full h-80 md:h-96 bg-card-bg rounded-3xl mb-6 relative">
                <Image
                  src="/image_ref_2.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Jefes"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="font-semibold text-xl text-left">
                Derrota a grandes Jefes
              </h3>
              <p className="text-gray-text text-left mt-2">
                Enfréntate a poderosos enemigos y demuestra tu habilidad.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <div className="w-full h-80 md:h-96 bg-card-bg rounded-3xl mb-6 relative">
                <Image
                  src="/image_ref_3.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Estrategia"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="font-semibold text-xl text-left">Sé estratega</h3>
              <p className="text-gray-text text-left mt-2">
                Planifica tus movimientos y utiliza el entorno a tu favor.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-6 shadow-card">
              <div className="w-full h-80 md:h-96 bg-card-bg rounded-3xl mb-6 relative">
                <Image
                  src="/image_ref_4.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Poder"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="font-semibold text-xl text-left">
                Controla tu poder
              </h3>
              <p id="about" className="text-gray-text text-left mt-2">
                Domina tus habilidades y utiliza tu creatividad para superar
                desafíos.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            About
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mt-4">
            Sobre nosotros
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-semibold text-xl">Nuestra visión</h3>
              <p className="text-gray-text mt-2">
                Convertirnos en un referente dentro del desarrollo de
                videojuegos independientes en México, impulsando el talento
                local.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-semibold text-xl">Nuestra misión</h3>
              <p className="text-gray-text mt-2">
                Desarrollar videojuegos innovadores que desafíen la forma
                tradicional de jugar, integrando mecánicas únicas de dibujo y
                estrategia.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card lg:col-span-2">
              <h3 className="font-semibold text-xl">Nuestra esencia</h3>
              <p id="contact" className="text-gray-text mt-2">
                Somos Left4Team, un equipo apasionado por la creación de
                experiencias inmersivas que combinan arte, tecnología y emoción.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white rounded-5xl p-8 md:p-16 shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
                Contacto
              </span>
              <h2 className="text-3xl md:text-5xl font-medium mt-4">
                ¿Te interesaría saber más?
              </h2>
              <p className="text-gray-text mt-4">
                Déjanos saber cómo podemos ayudarte.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Correo: left4team@gmail.com",
                "Instagram: @left4team",
                "Twitter: @left4_team",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-card-bg rounded-2xl p-5 flex justify-between items-center"
                >
                  <p className="font-medium text-sm md:text-base">{q}</p>
                  <PlusIcon />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Equipo
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mt-4">
            Personas encargadas de crear el proyecto
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 mt-12">
            <div className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center gap-4 flex-1 min-w-[250px]">
              <h2 className="font-semibold text-xl">Gabriel Muñoz</h2>
              <div className="relative w-44 h-52 bg-card-bg rounded-3xl">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Gabriel Muñoz"
                  src="/foto_1.png"
                  className="rounded-3xl"
                />
              </div>
              <p className="text-gray-text mt-4">Diseñador Digital 3D</p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center gap-4 flex-1 min-w-[250px]">
              <h2 className="font-semibold text-xl">Luis Arredondo</h2>
              <div className="relative w-44 h-52 bg-card-bg rounded-3xl">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Luis Arredondo"
                  src="/foto_2.png"
                  className="rounded-3xl"
                />
              </div>
              <p className="text-gray-text mt-4">Programador</p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center gap-4 flex-1 min-w-[250px]">
              <h2 className="font-semibold text-xl">Dorle Perez</h2>
              <div className="relative w-44 h-52 bg-card-bg rounded-3xl">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Dorle Perez"
                  src="/foto_4.png"
                  className="rounded-3xl"
                />
              </div>
              <p className="text-gray-text mt-4">Programador</p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card flex flex-col items-center gap-4 flex-1 min-w-[250px]">
              <h2 className="font-semibold text-xl">Bernardo Islas</h2>
              <div className="relative w-44 h-52 bg-card-bg rounded-3xl">
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="Bernardo Islas"
                  src="/foto_3.png"
                  className="rounded-3xl"
                />
              </div>
              <p className="text-gray-text mt-4">Diseñador Digital 3D</p>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        {...fadeIn}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 pb-12"
      >
        <div className="border-t border-gray-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Left4Team®</h3>
              <p className="text-gray-text mt-4">
                Creando experiencias inmersivas que combinan arte, tecnología y
                emoción.
              </p>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Páginas</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-black transition-colors">
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Recursos</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#studio">Studio</a>
                </li>
              </ul>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
