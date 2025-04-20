import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

// ScrollTop
import ScrollTop from "pages/ScrollTop";

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Search from './pages/Search';

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/post/:idPost" element={<Post />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />
                    
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;
