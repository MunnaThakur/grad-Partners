import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from './components/Story'
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Opportunities from "./components/Opportunities";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Companies />
      <Story />
      <Opportunities />
      <Testimonials />
      <Newsletter />
    </>
  );
}
