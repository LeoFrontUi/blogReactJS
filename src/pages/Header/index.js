import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../svg/blog-logo.svg';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [form, setForm] = useState({ search: '' });

    function onChange(event) {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    }

    function handleSearch(e) {
        e.preventDefault();
        navigate(`/search/${form.search}`);
    }

    // Esse useEffect garante que os elementos existam antes de adicionar event listeners
    useEffect(() => {
        const bx = document.querySelector('.bx');
        const menu_mobile = document.querySelector('.menu-mobile');
        const link_mobile = document.querySelectorAll('.link-menu-mobile');

        if (!bx || !menu_mobile || link_mobile.length === 0) return;

        const toggleMenu = () => {
            bx.classList.toggle('activebx');
            menu_mobile.classList.toggle('showmenu');
        };

        const closeMenu = () => {
            menu_mobile.classList.remove('showmenu');
        };

        bx.addEventListener('click', toggleMenu);
        link_mobile.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        // Cleanup
        return () => {
            bx.removeEventListener('click', toggleMenu);
            link_mobile.forEach(item => {
                item.removeEventListener('click', closeMenu);
            });
        };
    }, []);

    return (
        <>
            <header className="py-1 px-2">
                <nav>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <ul className="menu">
                        <li><Link to="/about" className="p-1">Sobre</Link></li>
                        <li><Link to="/contact" className="p-1">Contato</Link></li>
                    </ul>
                </nav>
                <div className="bx"></div>
                <div className="flex-start-row">
                    <div className="search">
                        { !location.pathname.startsWith('/search') && (
                            <form className="flex" onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar..."
                                    onChange={onChange}
                                />
                                <button className="btn-search"></button>
                            </form>
                        )}
                    </div>
                    <div className="cta-desktop ml-3">
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile mr-1">
                        <Link to="/login" className="link">Login</Link>
                    </div>
                </div>
            </header>

            <div className="relative">
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li><Link to="/about" className="link-menu-mobile">Sobre</Link></li>
                        <li><Link to="/contact" className="link-menu-mobile">Contato</Link></li>
                        <li className="py-2 pl-2">
                            { !location.pathname.startsWith('/search') && (
                                <form className="flex" onSubmit={handleSearch}>
                                    <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar..."
                                    onChange={onChange}
                                />
                                    <button className="btn-search"></button>
                                </form>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
