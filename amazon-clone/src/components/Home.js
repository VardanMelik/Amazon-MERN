import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" 
                    alt="img"/>
            
                <div className="home__row">
                    <Product
                        title='The lean startup'
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        price={29.99}
                        rating={5}/>
                    <Product/>
                </div>

                <div className="home__row">
                    <Product />
                    <Product/>
                    <Product/>
                </div>

                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home;
