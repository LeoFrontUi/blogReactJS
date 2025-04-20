// Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images
import LogoBlog from '../../svg/blog.svg';

const About = () => {
    return (
        <>
            <Header />
            <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">Sobre<span>.</span> </h1>
                        <p className="mt-2">
                            Um blog é um projeto desenvolvido em React.js para portfolio pessoal.
                        </p>
                        <a href="www.tivityElit.com" target="_blank" className="btn mt-2">Saber Mais</a>

                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={LogoBlog} className="illustration" alt="" />
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;