import PageHeader from "../components/pageHeader/PageHeader";
import Awards from "../components/awards/Awards";
import VideoSection from "../components/videoSection/VideoSection";
import ServiceSection from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import HistoryOff from "../components/historyOff/HistoryOff";
import Reviews from "../components/reviews/Reviews";
import Contact from "../components/contact/Contact";
import FrontBlog from "../components/frontBlog.jsx/FrontBlog";

const Home = () => {
  return (
    <section>
      <PageHeader />
      <Awards />
      <VideoSection />
      <Portfolio />
      <ServiceSection />
      <HistoryOff />
      <Reviews />
      <Contact />
      <FrontBlog />
    </section>
  );
};

export default Home;
