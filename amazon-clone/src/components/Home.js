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
                    <Product
                        title='Rework Hardcover'
                        image='https://images-na.ssl-images-amazon.com/images/I/41woojfwaaL._SX329_BO1,204,203,200_.jpg'
                        price={17.69}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title='Zero to One'
                        image='https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg'
                        price='18.69'
                        rating={5}

                    />
                    <Product
                        title='Remote: Office Not Required '
                        image='https://images-na.ssl-images-amazon.com/images/I/41L25AV2ZmL._SX352_BO1,204,203,200_.jpg'
                        price='17.95'
                        rating='4'
                    />
                    <Product
                        title='Self-Made Success'
                        image='https://images-na.ssl-images-amazon.com/images/I/51sLKCPNzRL._SX332_BO1,204,203,200_.jpg'
                        price='13.00'
                        rating='3'
                    />
                </div>

                <div className="home__row">
                    <Product
                        title='Influencing Virtual Teams'
                        image='https://images-na.ssl-images-amazon.com/images/I/51dkFs6PbJL._SX331_BO1,204,203,200_.jpg'
                        price='12.99'
                        rating='5'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
