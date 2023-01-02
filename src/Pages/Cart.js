import { getNodeText } from '@testing-library/react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, CardBody} from 'reactstrap';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const product = useSelector((state) => state.product);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <>
            <Container fluid>
                {products.map((product) => (
                    <Card>
                        <CardBody key={product.id} className="d-flex justify-content-around mt-4">
                            <img src={product.image} alt="cartImg" className='mx-4' style={{ width: '4rem' }} />
                            <div style={{ width: "20rem" }}>
                                <h5 className='mx-4'>{product.title}</h5>
                            </div> 
                            <h5 className='mx-4 mt-4' >{product.price}</h5>
                            <div className='mt-3'>
                                {/* <button className="btn btn-secondary mx-3" 
                                    onClick={() => setCount(count - 1)}>-</button>
                                <span className='mt-5'>
                                    {count}
                                </span>
                                <button className="btn btn-secondary mx-3"
                                        onClick={() => setCount(count + 1)}>+</button> */}
                                <button
                                    className="btn btn-danger btn-lg"
                                    onClick={() => handleRemove(product.id)}>
                                    Remove
                                </button>
                            </div>

                        </CardBody>
                    </Card>
                ))}
            </Container>

            {/* <div className='d-flex justify-content-center'>
                <div>
                <h1>Total</h1>
                </div>
                    <div className='mx-2'><h1> = ({products.price})/-</h1></div>
            </div> */}
        </>
    );
};

export default Cart;
