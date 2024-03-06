import { ProductDetail } from "./ProductDetail"
import { PropTypes } from "prop-types"

export const ProductGrid = ({ products, handlerRemove, handlerProductSelected }) => {
    return (
        <table className="table table-hover table-stripe">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (<ProductDetail product={product} key={product.id} handlerRemove={handlerRemove} handlerProductSelected={handlerProductSelected} />)
                })}
            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
}