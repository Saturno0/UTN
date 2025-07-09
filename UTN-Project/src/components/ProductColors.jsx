

const ProductColors = ({ product, quantities, onQuantityChange }) => {
    return(
        <table className="color-table">
            <thead>
                <tr>
                    <th>COLOR</th>
                    <th>CANTIDAD</th>
                    <th>STOCK DISPONIBLE</th>
                </tr>
            </thead>
            <tbody>
                {product.colores.map(({ nombre, stok }) => (
                    <tr key={nombre}>
                        <td>{nombre}</td>
                        <td>
                            <input
                                type="number"
                                min="0"
                                max={stok}
                                value={quantities[nombre]}
                                onChange={(e) => onQuantityChange(nombre, e.target.value)}
                            />
                        </td>
                        <td>{stok}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductColors;