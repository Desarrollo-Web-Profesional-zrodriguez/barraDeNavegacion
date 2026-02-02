import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaCss3Alt, FaVideo, FaStar, FaClock, FaUsers, FaCode } from 'react-icons/fa';

const Cursos = () => {
    const courses = [
        {
            title: "React desde Cero a Experto",
            description: "Domina React.js y conviértete en un desarrollador front-end profesional",
            icon: <FaReact size={40} />,
            color: "from-blue-400 to-cyan-500",
            price: "$49.99",
            rating: 4.9,
            students: "15,234",
            duration: "40 horas",
            lessons: 120
        },
        {
            title: "Tailwind CSS Avanzado",
            description: "Crea interfaces modernas y responsive con el framework CSS más popular",
            icon: <FaCss3Alt size={40} />,
            color: "from-teal-400 to-blue-500",
            price: "$39.99",
            rating: 4.8,
            students: "12,456",
            duration: "25 horas",
            lessons: 85
        },
        {
            title: "Framer Motion Pro",
            description: "Animaciones profesionales y micro-interacciones que impresionan",
            icon: <FaVideo size={40} />,
            color: "from-purple-400 to-pink-500",
            price: "$44.99",
            rating: 5.0,
            students: "8,932",
            duration: "18 horas",
            lessons: 65
        },
        {
            title: "JavaScript Moderno ES6+",
            description: "Todo lo que necesitas saber sobre JavaScript moderno y sus características",
            icon: <FaCode size={40} />,
            color: "from-yellow-400 to-orange-500",
            price: "$54.99",
            rating: 4.9,
            students: "20,145",
            duration: "50 horas",
            lessons: 145
        },
        {
            title: "Next.js Completo",
            description: "Aprende el framework de React para aplicaciones production-ready",
            icon: <FaReact size={40} />,
            color: "from-gray-700 to-gray-900",
            price: "$59.99",
            rating: 4.8,
            students: "11,234",
            duration: "35 horas",
            lessons: 95
        },
        {
            title: "Diseño UI/UX Profesional",
            description: "Principios de diseño y creación de interfaces centradas en el usuario",
            icon: <FaCss3Alt size={40} />,
            color: "from-pink-400 to-rose-500",
            price: "$44.99",
            rating: 4.9,
            students: "9,876",
            duration: "30 horas",
            lessons: 75
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 pt-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Nuestros Cursos Premium
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explora nuestra colección curada de cursos diseñados por expertos de la industria.
                        Aprende a tu propio ritmo y transforma tu carrera profesional.
                    </p>
                </motion.div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
                        >
                            {/* Card Header with Icon */}
                            <div className={`bg-gradient-to-br ${course.color} p-8 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="mb-4">{course.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                                    <p className="text-white/90 text-sm">{course.description}</p>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-primary" />
                                        <span className="text-sm text-gray-600">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaVideo className="text-secondary" />
                                        <span className="text-sm text-gray-600">{course.lessons} lecciones</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-yellow-500" />
                                        <span className="text-sm text-gray-600">{course.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUsers className="text-purple-500" />
                                        <span className="text-sm text-gray-600">{course.students}</span>
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 line-through">$99.99</p>
                                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {course.price}
                                        </p>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Inscribirse
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-primary via-purple-600 to-secondary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Contáctanos y ayúdanos a crear el curso perfecto para ti
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                        >
                            Solicitar Curso Personalizado
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Cursos; 