import Hero from "./components/home/Hero";
import Brands from "./components/common/Brands";
import HealthTracking from "./components/home/HealthTracking";
import RedefineHealthCare from "./components/home/RedefineHealthCare";
import Journey from "./components/home/Journey";
import Products from "./components/home/Products";
import Reviews from "./components/home/Reviews";
import Banner from "./components/common/Banner";
import Footer from "./components/common/Footer";
import Who from "./components/about/Who";
export default function Home(){
  return(
    <>
      <Hero />
      <Brands />
      <HealthTracking />
      <RedefineHealthCare />
      <Journey />
      <Products />
      <Reviews />
      <Banner />
      <Footer/>
    </>
  )
}