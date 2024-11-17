import { RiHome2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdMovieCreation } from "react-icons/md";

export const navigation = [
  {
    lable: "TV Shows",
    href: "tv",
    icon: <PiTelevisionSimpleFill />,
  },
  {
    lable: "Movies",
    href: "movie",
    icon: <MdMovieCreation />,
  },
];

export const mobileNavigation = [
  {
    lable: "Home",
    href: "/",
    icon: <RiHome2Fill />,
  },
  ...navigation,
];
