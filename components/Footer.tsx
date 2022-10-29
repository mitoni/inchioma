import { CiInstagram, CiLinkedin } from "react-icons/ci";
import useWindowSize from "../hooks/useWindowSize";
import Col from "./Col";
import Grid from "./Grid";
import LogoText from "./LogoText";

const SocialLinks = () => {
  return (
    <>
      <a>
        <CiLinkedin className="w-16 h-16 p-1" />
      </a>
      <a>
        <CiInstagram className="w-16 h-16 p-1" />
      </a>
    </>
  );
};

const Footer = () => {
  const { width } = useWindowSize();

  return width ? (
    width > 1280 ? (
      <Grid className="mt-20 py-10 py-5 border-t border-black">
        <Col className="flex flex-row items-center col-span-3 justify-start">
          <SocialLinks />
        </Col>

        <Col className="flex flex-row col-span-6 flex flex-row justify-center items-center">
          <LogoText />
        </Col>

        <Col className="flex-row col-span-3" />
      </Grid>
    ) : (
      <Grid className="mt-5 py-5 border-t border-black">
        <Col className="flex flex-row col-span-12 flex flex-row justify-center items-center">
          <LogoText />
        </Col>

        <Col className="flex flex-row col-span-12 justify-around">
          <SocialLinks />
        </Col>
      </Grid>
    )
  ) : null;
};

export default Footer;
