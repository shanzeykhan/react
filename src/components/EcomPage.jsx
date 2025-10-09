import React from "react";
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

import { aboutUs, favorites, offers, reviews, shopMore, topReviews} from "../utils/constants";


const EcomPage = () => {

  return (
    <main className="w-full h-full text-black bg-white">
      <Header />
      <Banner />
      <ShopbyCategory />

      <Shopmore shopMore={shopMore}/>

      <Aboutus aboutUs={aboutUs} />

      <Favorites favorites={favorites} />

      <TopReviews topReviews={topReviews} />

      <Section />
      <UseRef/>


      <FeaturedReviews reviews={reviews} />
      <Offers offers={offers} />
      <Footer />
      


      
    </main>
  );
};

export default EcomPage;
