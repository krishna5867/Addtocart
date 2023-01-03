import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, CardBody, Row } from 'reactstrap';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);

    const [totalAmount, setTotalAmount] = useState(0);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
        toast.success("Removed Successfully");

    };
    useEffect(() => {
        setTotalAmount(products.reduce((acc, curr) => acc + curr.price, 0));
    }, [products]);

    return (
        <>
            {
                products.length > 0 ? (
                    <>
                        <Container fluid className='d-lg-flex'>
                            <ToastContainer position="top-right" autoClose={1000} />
                            <div className='col-md-8 mx-2'>
                                <Row>
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
                                                            className="btn text-danger rounded-circle btn-lg"
                                                            onClick={() => handleRemove(product.id)}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </Container>
                                </Row>
                            </div>
                            <div className='col-md-4 mx-2'>
                                <Container fluid className='mt-4'>
                                    <Row>
                                        <Card >
                                            <CardBody>
                                                <h3 className='mb-4 mt-4'>YOUR CART SUMMARY</h3>
                                                <h5 className='mt-4 mb-2'>Toal Items : {products.length}</h5>
                                                <h5 className='mb-5'>Total Amount : ${totalAmount}</h5>
                                                <button className='btn btn-warning'><h5>Checkout</h5></button>
                                            </CardBody>
                                        </Card>
                                    </Row>
                                </Container>
                            </div>
                        </Container>
                    </>
                ) : (
                    <>
                        <div className='mt-4'>
                            <h2 className='mt-5'>Cart is Empty !</h2>
                            <Link to="/">
                                <button className='btn btn-warning mt-4'><h5>Shop Now</h5></button>
                            </Link>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Cart;
