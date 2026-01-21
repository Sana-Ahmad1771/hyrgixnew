import HealthServices from "../components/about/HealthServices"
import Who from "../components/about/Who"
import HealthPriority from "../components/about/HealthPriority"
import WhyChooseUs from "../components/about/WhyChooseUs"
import Success from "../components/about/Success"
import Banner from "../components/common/Banner"
import Footer from "../components/common/Footer"
export default function About() {
    return(
        <>
            <HealthServices />
            <Who />
            <HealthPriority />
            <WhyChooseUs />
            <Success />
            <Banner />
            <Footer />
        </>
    )
}