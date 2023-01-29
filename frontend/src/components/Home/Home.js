import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import WhyChoose from './WhyChoose';
import MemberCert from './MemberCert/MemberCert.js';
import EnquiryForm from './EnquiryForm/EnquiryForm';
import AboutUs from './AboutUs/AboutUs';
import ContactForm from './EnquiryForm/ContactForm';
import ProductsHome from './Products/ProductsHome';
import { getAllProducts } from '../../actions/ProductAction';
import Loader from '../Layout/Loader/Loader';
import { Link } from 'react-router-dom';

const Home = () => {

    const dispatch = useDispatch();
      const { products, loading, error } = useSelector(
        (state) => state.products
      );
    useEffect(() => {
      console.log('getproducts ')
      dispatch(getAllProducts());
    }, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section class="home" id="home">
          <div class="content">
            <h3>
              {" "}
              <span> NAMASTE </span>
            </h3>
          </div>
        </section>
      )}
      <WhyChoose />
      <ProductsHome />
      <MemberCert />
      <ContactForm />
      
      {/* <EnquiryForm/> */}
      <AboutUs />
    </>
  );
}

export default Home