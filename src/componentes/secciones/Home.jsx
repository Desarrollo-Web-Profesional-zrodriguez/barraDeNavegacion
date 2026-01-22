import React from 'react';
import { motion } from 'motion/react';
import HeroImage from '../../assets/hero_png.png';

const Home = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Contenido de la sección Home */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Aprende sin límites en <span className="text-secondary">BARG Cursos</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Descubre una nueva forma de aprender con nuestros cursos interactivos diseñados para impulsar tu carrera profesional.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-secondary text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition shadow-lg">
                            Ver Cursos
                        </button>
                        <button className="border-2 border-secondary text-secondary font-semibold px-8 py-3 rounded-md hover:bg-secondary hover:text-white transition">
                            Más Info
                        </button>
                    </div>
                </motion.div>

                {/* Imagen de la sección Home */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Decoración del fondo de la imagen */}
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    <img
                        src={HeroImage}
                        alt="Estudiantes aprendiendo online"
                        className="max-w-full h-auto drop-shadow-2xl z-10"
                        style={{ maxHeight: '500px' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;