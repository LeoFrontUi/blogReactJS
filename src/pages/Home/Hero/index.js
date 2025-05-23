import blog from '../../../svg/blog.svg';

// Link
import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog <span>.</span> </h1>
                        <p className="mt-2">
                            Um blog para todos. 
                            Escrever. Ler. Comentar. Contribuir. Aprender. Conectar.
                        </p>
                        <Link to="/login" className="btn mt-2">Começar a escrever</Link>

                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={blog} className="illustration" alt="" />
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>
        </>
    );
}

export default Hero;
