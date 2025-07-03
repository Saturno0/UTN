import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductInfo = ({ productos, id }) => {
    const producto = productos.find((prod) => prod.id === id);
    return (
        <Link to={{
                pathname: `/producto/${producto.id}`,
                hash: "#main"
            }} state={{productos: productos, producto: producto}}>
            <div className="card">
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={`imagen de ${producto.nombre}`} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio_actual}</p>
            </div>
        </Link>
    );
};

ProductInfo.propTypes = {
    product: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        calificación: PropTypes.number.isRequired,
        opiniones: PropTypes.number.isRequired,
        descripción: PropTypes.string.isRequired,
        descuento: PropTypes.number.isRequired,
        stock: PropTypes.bool.isRequired,
        precio_actual: PropTypes.number.isRequired,
        precio_original: PropTypes.number.isRequired,
        tamaños: PropTypes.arrayOf(PropTypes.string).isRequired,
        especificaciones: PropTypes.shape({
            material: PropTypes.string.isRequired,
            peso: PropTypes.string.isRequired,
            fabricado_en: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};


export default ProductInfo;