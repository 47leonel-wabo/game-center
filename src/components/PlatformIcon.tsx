import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaPlaystation } from "react-icons/fa";
import { FaComputer, FaLinux, FaWindows, FaXbox } from "react-icons/fa6";
import { MdOutlineVideogameAsset, MdTabletMac } from "react-icons/md";

interface Props {
  slug: string;
}

const PlatformIcon = ({ slug }: Props) => {
  if (slug === "playstation") return <FaPlaystation />;
  else if (slug === "xbox") return <FaXbox />;
  else if (slug === "ios") return <AiFillApple />;
  else if (slug === "pc") return <FaComputer />;
  else if (slug === "windows") return <FaWindows />;
  else if (slug === "linux") return <FaLinux />;
  else if (slug === "android") return <AiFillAndroid />;
  else if (slug === "mac") return <MdTabletMac />;
  else return <MdOutlineVideogameAsset />;
};

export default PlatformIcon;
