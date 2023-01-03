import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CardBody, Row } from 'reactstrap';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Products = ({item}) => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const  remove  = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
        toast.success("Added Successfully");
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading Data....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <Container fluid className='col-10 w-100'>
        <ToastContainer position="top-right" autoClose={1000} />
            <Row>
                {
                    products.map((product) => (
                        <CardBody key={product.id} style={{ width: '12rem' }} className="my-4 p-3 m-2 shadow p-3 mb-5 bg-white rounded">
                            <img src={product.image} alt="img" style={{ width: '10rem' }} height="200px" />
                            <div style={{ height: '50px' }} className="overflow-hidden mt-2">
                                {product.title}
                            </div>
                            <h3>${product.price}</h3>


                            {/* {product.some((currItem) => currItem.id === item.id) ? (
                                <button className="btn btn-success" onClick={() => handleAdd(product)}>
                                Add to Cart
                            </button>
                            ) : (
                                <button className="btn btn-success">
                                Already Added
                            </button>
                            )} */}
                            <button className="btn btn-warning" onClick={() => handleAdd(product)}>
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
