import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast pizaa company.</Link>

      <SearchOrder />

      <p>ALi</p>
    </header>
  );
}

export default Header;
