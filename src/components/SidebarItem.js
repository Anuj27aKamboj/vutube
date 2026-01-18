import { Link } from "react-router-dom";

const SidebarItem = ({ img, label, to }) => (
  <Link
    to={to || "#"}
    className="flex items-center gap-4 py-2 px-2 rounded-lg hover:bg-gray-100"
  >
    <img src={img} alt={label} className="w-6 h-6" />
    <span>{label}</span>
  </Link>
);

export default SidebarItem;
