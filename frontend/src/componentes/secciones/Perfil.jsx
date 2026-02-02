import React from 'react';
import { motion } from 'motion/react';
import { FaUser, FaEnvelope, FaGraduationCap, FaTrophy, FaCertificate, FaEdit } from 'react-icons/fa';

const Perfil = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 pt-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Mi Perfil
                    </h1>
                    <p className="text-xl text-gray-600">Gestiona tu información y progreso académico</p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Perfil del Usuario */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                                    BG
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-purple-500"
                                >
                                    <FaEdit className="text-purple-600" />
                                </motion.button>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">BARG Usuario</h2>
                                <p className="text-gray-600 flex items-center gap-2 justify-center md:justify-start mb-4">
                                    <FaEnvelope className="text-purple-500" />
                                    usuario@bargcursos.com
                                </p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                                        Estudiante Premium
                                    </span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Editar Perfil
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all hover:-translate-y-1"
                        >
                            <FaGraduationCap className="text-4xl mb-3 opacity-80" />
                            <h3 className="text-3xl font-bold mb-1">12</h3>
                            <p className="text-blue-100">Cursos Completados</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all hover:-translate-y-1"
                        >
                            <FaCertificate className="text-4xl mb-3 opacity-80" />
                            <h3 className="text-3xl font-bold mb-1">8</h3>
                            <p className="text-purple-100">Certificados Obtenidos</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all hover:-translate-y-1"
                        >
                            <FaTrophy className="text-4xl mb-3 opacity-80" />
                            <h3 className="text-3xl font-bold mb-1">24</h3>
                            <p className="text-pink-100">Logros Desbloqueados</p>
                        </motion.div>
                    </div>

                    {/* Cursos en Progreso */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cursos en Progreso</h2>
                        <div className="space-y-4">
                            <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-300 transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-lg text-gray-800">Curso de React Avanzado</h3>
                                    <span className="text-purple-600 font-semibold">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-300 transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-lg text-gray-800">Diseño UI/UX Profesional</h3>
                                    <span className="text-purple-600 font-semibold">45%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>

                            <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-300 transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-lg text-gray-800">JavaScript Moderno ES6+</h3>
                                    <span className="text-purple-600 font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Perfil;
