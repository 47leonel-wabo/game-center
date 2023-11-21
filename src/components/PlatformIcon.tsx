import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaGlobeAfrica, FaPlaystation } from "react-icons/fa";
import { FaComputer, FaLinux, FaWindows, FaXbox } from "react-icons/fa6";
import { MdTabletMac } from "react-icons/md";
import { SiNintendoswitch, SiPlaystation4 } from "react-icons/si";

interface Props {
  slug: string;
}

const iconsMap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  playstation4: SiPlaystation4,
  xbox: FaXbox,
  ios: AiFillApple,
  nintendo: SiNintendoswitch,
  pc: FaComputer,
  windows: FaWindows,
  linux: FaLinux,
  android: AiFillAndroid,
  mac: MdTabletMac,
  web: FaGlobeAfrica,
};

const PlatformIcon = ({ slug }: Props) => (
  <Icon as={iconsMap[slug]} color="gray.400" />
);

export default PlatformIcon;
