import React, { useState } from 'react'
import { navbarLinks } from '../data/data.js'
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";
import { motion } from "motion/react";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='container flex justify-between font-bold items-center py-8'>
                    {/* Sección de Logo */}
                    <div className='text-2xl flex items-center gap-2 uppercase'>
                        <ImBooks className="text-primary" />
                        <p>El sitio de BARG</p>
                        <p className='text-secondary'>Cursos</p>
                    </div>

                    {/* Sección de Menú (Desktop) */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-7 text-gray-600">
                            {navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.url}
                                        className="inline-block py-1 px-3 hover:text-primary duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sección de Íconos */}
                    <div className="flex items-center gap-4">
                        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                            <CiSearch />
                        </button>
                        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                            <PiShoppingCartLight />
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block"
                        >
                            Ingresar
                        </motion.button>
                    </div>

                    {/* Sección de Móvil */}
                    <div className="md:hidden">
                        <MdMenu
                            onClick={() => setAbierto(!abierto)}
                            className="text-4xl cursor-pointer"
                        />
                    </div>
                </div>
            </motion.nav>

            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
        </>
    )
}

export default Navbar 