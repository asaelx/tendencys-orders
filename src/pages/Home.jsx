import Navigation from "../components/Navigation";
import OrdersTable from "../components/OrdersTable";
import { Divider } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navigation />
        <h1 className="text-2xl font-semibold mt-8 mb-0">Órdenes de compra</h1>
        <Divider className="my-4" />
        <OrdersTable />
      </div>
    </>
  );
};

export default Home;
