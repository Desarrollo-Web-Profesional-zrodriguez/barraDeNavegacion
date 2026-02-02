import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaTimes, FaUser, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header con gradiente */}
                            <div className="bg-gradient-to-r from-primary to-secondary p-6 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
                                >
                                    <FaTimes size={20} />
                                </button>
                                <h2 className="text-3xl font-bold text-white mb-2">Bienvenido</h2>
                                <p className="text-white/90">Inicia sesión en tu cuenta</p>
                            </div>

                            {/* Formulario */}
                            <div className="p-8">
                                <form className="space-y-6">
                                    {/* Campo de Usuario */}
                                    <div className="relative">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Usuario o Email
                                        </label>
                                        <div className="relative">
                                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                                placeholder="usuario@ejemplo.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Campo de Contraseña */}
                                    <div className="relative">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Contraseña
                                        </label>
                                        <div className="relative">
                                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="password"
                                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>

                                    {/* Recordar y Olvidé contraseña */}
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                                            />
                                            <span className="text-sm text-gray-600">Recordarme</span>
                                        </label>
                                        <a href="#" className="text-sm text-primary hover:underline font-semibold">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>

                                    {/* Botón de Iniciar Sesión */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Iniciar Sesión
                                    </motion.button>
                                </form>

                                {/* Divisor */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-white px-4 text-sm text-gray-500">O continúa con</span>
                                    </div>
                                </div>

                                {/* Registro */}
                                <div className="text-center mt-6">
                                    <p className="text-gray-600">
                                        ¿No tienes una cuenta?{' '}
                                        <a href="#" className="text-primary font-bold hover:underline">
                                            Regístrate
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
