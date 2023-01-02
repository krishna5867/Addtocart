import { getNodeText } from '@testing-library/react';
import e from 'cors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, CardBody} from 'reactstrap';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <>
            <Container fluid className='mt-4'>
                {products.map((product) => (
                    <Card>
                        <CardBody key={product.id} className="d-flex justify-content-around mt-4">
                            <img src={product.image} alt="cartImg" className='mx-4' style={{ width: '4rem' }} />
                            <div style={{ width: "20rem" }}>
                                <h5 className='mx-4 mt-4'>{product.title}</h5>
                            </div> 
                            <h5 className='mx-4 mt-4' >${product.price}</h5>
                            <div className='mt-3'>
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
        </>
    );
};

export default Cart;
