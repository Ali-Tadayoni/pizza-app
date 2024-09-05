import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="lauout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <h1>content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
