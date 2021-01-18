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
                        id="4545465"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                        price={29.99}
                        rating={5}/>
                    <Product
                        id="4545464"
                        title="Rework Hardcover Most business books give you the same old advice: Write a business plan, study the competition, seek investors, yadda yadda. If you're looking for a book like that, put this one back on the shelf."
                        image='https://images-na.ssl-images-amazon.com/images/I/41woojfwaaL._SX329_BO1,204,203,200_.jpg'
                        price={17.69}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="45454645"
                        title='Zero to One'
                        image='https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg'
                        price='18.69'
                        rating={5}

                    />
                    <Product
                        id="45454645"
                        title='Remote: Office Not Required '
                        image='https://images-na.ssl-images-amazon.com/images/I/41L25AV2ZmL._SX352_BO1,204,203,200_.jpg'
                        price='17.95'
                        rating='4'
                    />
                    <Product
                        id="45454465"
                        title='Self-Made Success'
                        image='https://images-na.ssl-images-amazon.com/images/I/51sLKCPNzRL._SX332_BO1,204,203,200_.jpg'
                        price='13.00'
                        rating='3'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="45454765"
                        title='Influencing Virtual Teams'
                        image='https://images-na.ssl-images-amazon.com/images/I/51dkFs6PbJL._SX331_BO1,204,203,200_.jpg'
                        price='12.99'
                        rating='5'
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4548954645"
                        title='Zero to One'
                        image='https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg'
                        price='18.69'
                        rating={5}

                    />
                    <Product
                        id="454454645"
                        title='Remote: Office Not Required '
                        image='https://images-na.ssl-images-amazon.com/images/I/41L25AV2ZmL._SX352_BO1,204,203,200_.jpg'
                        price='17.95'
                        rating='4'
                    />
                    <Product
                        id="454574465"
                        title='Self-Made Success'
                        image='https://images-na.ssl-images-amazon.com/images/I/51sLKCPNzRL._SX332_BO1,204,203,200_.jpg'
                        price='13.00'
                        rating='3'
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;
