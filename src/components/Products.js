import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, CardBody, col, Row } from 'reactstrap';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';


const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading Data....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <Container className='col-10 w-100'>
            <Row>
                    {
                            products.map((product) => (
                            <CardBody key={product.id} style={{width:'12rem'}} className="my-4 p-3 m-2 shadow">
                                <img src={product.image} alt="img" style={{ width: '10rem' }} height="200px" />
                                <div style={{height:'50px'}} className="overflow-hidden mt-2">
                                    {product.title}
                                </div>
                                <h3>${product.price}</h3>
                                <button className="btn btn-success" onClick={() => handleAdd(product)}>
                                    Add to cart
                                </button>
                            </CardBody>
                        ))
                    }
            </Row>
        </Container>
    );
}
export default Products;
