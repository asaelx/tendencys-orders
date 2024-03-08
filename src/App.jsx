import { useState } from "react";
import OrdersTable from "./components/OrdersTable";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl mt-8 mb-8">Órdenes de compra</h1>
        <OrdersTable />
      </div>
    </>
  );
}

export default App;
