import './style/Index.css';
import ProductsLister from './ProductsLister';
import Slides from './Slides';
import PropTypes from 'prop-types';


const Main = ( {products} ) =>{
    return(
        <main>
            <Slides />
            <section className="products-container" id="productos">
                <h1>Nuestros Productos</h1>
                <div className="cards-container">
                    <ProductsLister productos={products} />
                </div>
            </section>
        </main>
    );
}

Main.propTypes = {
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Main;