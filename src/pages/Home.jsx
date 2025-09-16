import PageHeader from "../components/pageHeader/PageHeader";
import Awards from "../components/awards/Awards";
import VideoSection from "../components/videoSection/VideoSection";
import ServiceSection from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import HistoryOff from "../components/historyOff/HistoryOff";

const Home = () => {
  return (
    <section>
      <PageHeader />
      <Awards />
      <VideoSection />
      <Portfolio />
      <ServiceSection />
      <HistoryOff />
    </section>
  );
};

export default Home;
