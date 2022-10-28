import useWindowSize from "../hooks/useWindowSize";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

const Home = () => {
  const { width } = useWindowSize();

  return width ? width > 1280 ? <HomeDesktop /> : <HomeMobile /> : null;
};

export default Home;
