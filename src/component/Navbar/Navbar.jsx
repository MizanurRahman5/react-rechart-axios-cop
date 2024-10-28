import { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [open , setOpen] = useState(false)

    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'services', path: '/services', name: 'Services' },
        { id: 'portfolio', path: '/portfolio', name: 'Portfolio' }
      ];


    return (
        <div className="">
           <div className="md:hidden py-3 pl-4 bg-green-500" onClick={() => setOpen(!open)}>
            {
                open?<IoMdClose className=" text-2xl" />: <FaBars  className=" text-2xl" />
            }
           
           </div>
            <ul className={`md:flex pl-4 gap-10 duration-1000 bg-blue-600
                ${open?'':'hidden'}
                
                absolute md:static py-4`}>
                {
                    routes.map(route =><Link key={route.id} route={route}></Link> )
                }
            </ul>


        </div>
    );
};

export default Navbar;