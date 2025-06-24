import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductInfo = ({ producto }) => {
    return (
        <Link to={`/producto/${producto.id}`}>
            <div className="card">
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={`imagen de ${producto.nombre}`} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
            </div>
        </Link>
    );
};

ProductInfo.propTypes = {
    producto: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired
    }).isRequired
};

export default ProductInfo;