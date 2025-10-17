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
import UseRef from "./UseRef";
import { useState } from "react";
import { aboutUs, favorites, offers, reviews, shopMore, topReviews} from "../utils/constants";
import Practice from "./NewComp";
import UseRed from "./UseRed";

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
      Hello

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
      <UseRed />

    
      </CounterContext.Provider>
    </main>
  );
};

export default EcomPage;
