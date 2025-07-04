import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import '../style/Product.css';


const Product = () => {
    const { state } = useLocation();
    // const dataGet = state.productos;
    const producto = state.producto;

    return (
        <>
            <Navbar />
            <ProductDetail id="main" product={producto} />
            {/* <ProductsOfKeen products={dataGet} type={producto.type} /> */}
            <Footer />
        </>
    );
}

export default Product;