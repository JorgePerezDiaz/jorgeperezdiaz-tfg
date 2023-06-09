import { BsCartCheck } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    icon: <FaUser />
  },
  {
    path: "/analiticas",
    name: "Analiticas",
    icon: <BiAnalyse />
  },
  {
    path: "/productos",
    name: "Pedidos",
    icon: <BsCartCheck />
  }
];
