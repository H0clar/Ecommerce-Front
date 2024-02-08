import Logo from '../../assets/img/logo.svg';
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={Logo} alt="Logo" className='w-10 uppercase' />
                            Tienda
                        </a>
                    </div>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'/>
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>

                </div>
                <button onClick={() => alert("Ordenar")} className='bg-gradient-to-tr from-primary to-secondary text-white px-4 py-2 rounded-full absolute top-1/2 -translate-y-1/2 right-3 sm:right-6'>
                    <span>Orden</span>
                </button>
            </div>
        </div>
        
    )

};


export default Navbar;
        
                
  