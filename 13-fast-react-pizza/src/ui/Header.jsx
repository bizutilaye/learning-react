import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast React pizza.co</Link>
      <SearchOrder />
      <p>jonas</p>
    </div>
  );
}

export default Header;
