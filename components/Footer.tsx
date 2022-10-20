import { CiInstagram, CiLinkedin } from "react-icons/ci";
import Col from "./Col";
import Grid from "./Grid";
import LogoText from "./LogoText";

const Footer = () => {
  return (
    <Grid className="sm:mt-20 mt-10 sm:py-10 py-5 border-t border-black">
      <Col className="flex flex-row items-center sm:col-span-3 col-span-12 sm:justify-start justify-center">
        <a>
          <CiLinkedin className="w-16 h-16 p-1" />
        </a>
        <a>
          <CiInstagram className="w-16 h-16 p-1" />
        </a>
      </Col>

      <Col className="flex flex-row sm:col-span-6 col-span-12 flex flex-row justify-center items-center">
        <LogoText />
      </Col>

      <Col className="sm:flex hidden flex-row col-span-3" />
    </Grid>
  );
};

export default Footer;
