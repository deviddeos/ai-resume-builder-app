import AboutUs from "../components/home/AboutUs"
import Banner from "../components/home/Banner"
import CallToAction from "../components/home/CallToAction"
import Features from "../components/home/Features"
import Footer from "../components/home/Footer"
import Hero from "../components/home/Hero"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <div>

      <Banner />
      <Hero />

      <section id="features">
        <Features />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

      <section id="cta">
        <CallToAction />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

      {/* <Features/>
       <Testimonial />
       <CallToAction /> */}
      <Footer />
    </div>
  )
}

export default Home