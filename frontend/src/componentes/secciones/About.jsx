import React from 'react';
import { motion } from 'motion/react';
import { FaUsers, FaLightbulb, FaTrophy, FaHeart, FaGraduationCap, FaRocket } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaUsers size={32} />,
            title: "Comunidad Activa",
            description: "Únete a miles de estudiantes apasionados por el aprendizaje",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaLightbulb size={32} />,
            title: "Contenido Innovador",
            description: "Cursos actualizados con las últimas tendencias tecnológicas",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FaTrophy size={32} />,
            title: "Certificaciones",
            description: "Obtén certificados reconocidos en la industria",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaHeart size={32} />,
            title: "Soporte Dedicado",
            description: "Asistencia personalizada en cada paso de tu aprendizaje",
            color: "from-red-500 to-pink-500"
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 py-20 pt-32">
            <div className="container mx-auto px-6">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Sobre Nosotros
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        En BARG Cursos, transformamos vidas a través de la educación de calidad.
                        Nuestra misión es hacer el aprendizaje accesible, efectivo y emocionante para todos.
                    </p>
                </motion.div>

                {/* Tarjetas de Características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
                        >
                            <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de Misión y Visión */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                        <FaGraduationCap className="text-6xl mb-4 opacity-80" />
                        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                        <p className="text-lg leading-relaxed opacity-90">
                            Empoderar a millones de estudiantes en todo el mundo con educación de calidad,
                            proporcionando herramientas y conocimientos que transformen sus carreras y vidas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                        <FaRocket className="text-6xl mb-4 opacity-80" />
                        <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                        <p className="text-lg leading-relaxed opacity-90">
                            Ser la plataforma educativa líder a nivel global, reconocida por la excelencia
                            en la enseñanza y la innovación en métodos de aprendizaje interactivo.
                        </p>
                    </motion.div>
                </div>

                {/* Estadísticas Impactantes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-2xl p-12"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Logros que nos Enorgullecen
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <motion.h3
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                            >
                                10K+
                            </motion.h3>
                            <p className="text-gray-600 font-semibold">Estudiantes Activos</p>
                        </div>
                        <div className="text-center">
                            <motion.h3
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                                className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                            >
                                50+
                            </motion.h3>
                            <p className="text-gray-600 font-semibold">Cursos Premium</p>
                        </div>
                        <div className="text-center">
                            <motion.h3
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2"
                            >
                                98%
                            </motion.h3>
                            <p className="text-gray-600 font-semibold">Satisfacción</p>
                        </div>
                        <div className="text-center">
                            <motion.h3
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                                className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2"
                            >
                                24/7
                            </motion.h3>
                            <p className="text-gray-600 font-semibold">Soporte</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;