import useWindowSize from "../hooks/useWindowSize";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

const Home = () => {
  const { width } = useWindowSize();

  return width > 1280 ? <HomeDesktop /> : <HomeMobile />;
};

export default Home;
