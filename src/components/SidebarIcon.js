import { Link } from "react-router-dom";

const SidebarIcon = ({ img, label, to }) => (
  <Link to={to || "#"} className="flex flex-col items-center px-2 py-2 gap-1">
    <img src={img} alt={label} className="w-6 h-6" />
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);

export default SidebarIcon;
