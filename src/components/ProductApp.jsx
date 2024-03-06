import { PropTypes } from "prop-types"

import { useEffect, useState } from "react"
import { create, findAll, remove, update } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {
    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handlerAddProduct = async (product) => {
        if (product.id > 0) {
            const response = await update(product);
            setProducts(products.map(p => {
                if (p.id == response.data.id) {
                    return { ...response.data };
                }
                return p;
            }));
        } else {
            const response = await create(product);
            setProducts([...products, { ...response.data, id: response.data.id }]);
        }
    }

    const handlerRemoveProduct = async(id) => {
        await remove(id);
        setProducts(products.filter(product => product.id != id))
    }

    const handlerProductSelected = (product) => {
        setProductSelected({ ...product });
    }

    return (
        <div className="container my-4">
            <h2>{title}</h2>
            <div className="row">
                <div className="col"> <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} /> </div>
                <div className="col">
                    {
                        products.length > 0 ? <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
                            : <div className="alert alert-warning">No Products</div>
                    }

                </div>
            </div>
        </div>
    )
}

ProductApp.propType = {
    title: PropTypes.string.isRequired
}