import { useState, useEffect, useRef, useCallback } from 'react';
import UserNav from './user/UserNav';
import AdminNav from './admin/AdminNav';
import { useMediaQuery } from 'react-responsive';

const Nav = () => {
    const [role, setRole] = useState('user');
    const [menuOpen, setMenuOpen] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 640 });

    const navRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        // if (isMobile) return
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setRole(user.role);
        }
    }, [])

    const bigMenuOpen = () => {
        if (isMobile) return false
        else {
            return menuOpen
        }
    }

    return (
        <>

            {!menuOpen &&
                <button className='absolute bottom-2 left-3 text-2xl max-sm:flex hidden cursor-pointer text-dark-blue justify-center items-center w-[30px] h-[30px] z-[51] rounded-lg bg-slate-400/20' onClick={() => setMenuOpen(true)}>
                    <i className='fi-br-menu-burger w-[30px] h-[30px]' />
                </button>
            }

            <header className={`${bigMenuOpen() ? 'max-w-[300px]' : 'max-w-[75px]'} w-full z-50 h-screen fixed duration-[0s] top-0 left-0 ${menuOpen ? '' : 'max-sm:-translate-x-full'} transform`}
                ref={navRef}
            >
                {role === 'admin' && (
                    <AdminNav setMenuOpen={setMenuOpen} menuOpen={bigMenuOpen()} />
                )}
                {role === 'user' && (
                    <UserNav setMenuOpen={setMenuOpen} menuOpen={bigMenuOpen()} />
                )}
            </header>
        </>
    );
};

export default Nav;
