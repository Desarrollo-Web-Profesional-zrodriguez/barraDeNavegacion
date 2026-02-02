import React from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contacto = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 pt-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Contáctanos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes alguna pregunta? Nos encantaría saber de ti
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Información de Contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full text-white">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@bargcursos.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-full text-white">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Teléfono</h3>
                                    <p className="text-gray-600">+52 (123) 456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full text-white">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Ubicación</h3>
                                    <p className="text-gray-600">Av. Universidad 123, Ciudad de México</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario de Contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-xl"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
