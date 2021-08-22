import { useState } from "react"
import Link from 'next/link';

export default function UserNavbar({ user }) {
    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <div className="hidden sm:block relative">
            <button onClick={() => setDisplayMenu(!displayMenu)} className="relative z-10 ml-5 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-800 focus:outline-none focus:border-white">
                <img className="h-full w-full object-cover " src={user.picture} alt="" />
            </button>
            {displayMenu &&
                <button tabIndex="-1" onClick={() => setDisplayMenu(false)} className="fixed inset-0 w-full h-full hover:cursor-default "></button>
            }
            {displayMenu &&
                <div className="absolute right-0 mt-1 py-2 w-48 bg-gray-200 rounded-lg py-2 shadow-xl">
                    <Link href="/profile"><a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" >Account</a></Link>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Support </a>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="/api/auth/logout" data-testid="logout">Sign out </a>
                </div>}
        </div>
    )
}
