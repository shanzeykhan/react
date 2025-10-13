import React, { Children } from "react";
import Header from "./Header";
import Banner from "./Banner";
import ShopbyCategory from "./ShopbyCategory";
import Shopmore from "./Shopmore";
import Aboutus from "./Aboutus";
import Favorites from "./Favorites";
import TopReviews from "./TopReviews";
import Section from "./Section";
import FeaturedReviews from "./FeaturedReviews";
import Footer from "./Footer";
import Offers from "./Offers";
import UseRef from "./useRef";
import { useState } from "react";
import { aboutUs, favorites, offers, reviews, shopMore, topReviews} from "../utils/constants";
import Practice from "./practice";

import CounterContext from "../providers/context";
const EcomPage = () => {

  const [count, setCount] = useState(0);
  const counter= ()=>{
    setCount(count-1)
  }

  const Dropdown = (props)=> {
    return <div className="dropdown">
      {props.children}
    </div>

  }



  return (
    <main className="w-full h-full text-black bg-white">
      <CounterContext.Provider value={{count, setCount, counter}}>
      <Header />
      <Banner />
      <Dropdown>
      <ShopbyCategory />
      </Dropdown>

      <Shopmore shopMore={shopMore}/>

      <Aboutus aboutUs={aboutUs} />
      <Favorites favorites={favorites} />

      <TopReviews topReviews={topReviews} />

      <Section />
      <UseRef/>


      <FeaturedReviews reviews={reviews} />
      <Offers offers={offers} />
      <Footer />
      <Practice/>
      
      </CounterContext.Provider>


      
    </main>
  );
};

export default EcomPage;
