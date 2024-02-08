import Logo from "../../assets/img/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";


const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Productos",
    link: "/#",
  },
  {
    id: 3,
    name: "Contacto",
    link: "/#",
  }
  
];

const DropdownLinks = [
  {
    id: 1,
    name: "Productos populares",
    link: "/#",
  },
  {
    id: 2,
    name: "Más vendidos",
    link: "/#",
  },
  {
    id: 3,
    name: "Más valorados",
    link: "/#",
  },
];


const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-200 relative z-40">
            
            <div className="bg-primary/40 py-2">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                            <img src={Logo} alt="Logo" className="w-10 h-10" />
                            La Escoba
                        </a>
                    </div>

                   
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group">
                            <input
                                type="text" placeholder="buscar" className="w-64 group-hover:w-80 transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"/>
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 transform -translate-y-1/2 right-4" />
                        </div>

                       
                        <button
                            onClick={() => handleOrderPopup()}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">
                                Ordenar
                            </span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                       
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar inferior */}
            <div data-aos="zoom-in" className="flex justify-center bg-white dark:bg-gray-900 transition-colors duration-200">
                <ul className="sm:flex hidden items-center gap-4 px-4 sm:px-6 lg:px-8">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a
                                href={data.link}
                                className="inline-block px-4 py-2 hover:text-primary transition-colors duration-200"
                            >
                                {data.name}
                            </a>
                        </li>
                    ))}
                    
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-2 py-2">
                            Productos populares
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-50 hidden group-hover:block w-64 rounded-md bg-white p-4 text-black shadow-lg">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="block w-full rounded-md p-2 hover:bg-primary/20 transition-colors duration-200"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
