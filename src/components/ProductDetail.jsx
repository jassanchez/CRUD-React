import { PropTypes } from "prop-types"

export const ProductDetail = ({ product, handlerRemove, handlerProductSelected}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => handlerProductSelected(product)} className="btn btn-secondary btn-sm">
                    Update
                </button>
            </td>
            <td>
                <button onClick={() => handlerRemove(product.id)} className="btn btn-danger btn-sm">
                    Remove
                </button>
            </td>
        </tr>
    )
}

ProductDetail.propType = {
    product: PropTypes.object.isRequired
}