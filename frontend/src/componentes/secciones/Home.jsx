import React from 'react';
import { motion } from 'motion/react';
import HeroImage from '../../assets/hero_png.png';
import { FaRocket, FaStar, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Elementos decorativos flotantes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            />
            <motion.div
                animate={{
                    y: [0, 25, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-2xl"
            />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Contenido de texto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-purple-200"
                    >
                        <FaStar className="text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-700">
                            Más de 10,000 estudiantes activos
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Aprende sin límites en{' '}
                        <span className="bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
                            BARG Cursos
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        Descubre una nueva forma de aprender con nuestros cursos interactivos
                        diseñados por expertos para impulsar tu carrera al siguiente nivel.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FaRocket className="group-hover:translate-x-1 transition-transform" />
                            Comenzar Ahora
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/80 backdrop-blur-sm border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Ver Cursos
                        </motion.button>
                    </div>

                    {/* Estadísticas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-3 gap-6 mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                50+
                            </h3>
                            <p className="text-sm text-gray-600 font-semibold">Cursos</p>
                        </div>
                        <div className="text-center border-x border-gray-300">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                98%
                            </h3>
                            <p className="text-sm text-gray-600 font-semibold">Satisfacción</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                                24/7
                            </h3>
                            <p className="text-sm text-gray-600 font-semibold">Soporte</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Imagen con efectos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative flex justify-center"
                >
                    {/* Anillos decorativos */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] border-4 border-primary/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.15, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] border-4 border-secondary/20 rounded-full"
                        />
                    </div>

                    {/* Resplandor de fondo */}
                    <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-primary/30 via-purple-500/30 to-secondary/30 rounded-full blur-3xl"></div>

                    <motion.img
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        src={HeroImage}
                        alt="Estudiantes aprendiendo online"
                        className="relative max-w-full h-auto drop-shadow-2xl z-10"
                        style={{ maxHeight: '550px' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;