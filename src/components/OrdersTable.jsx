import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import formatCurrency from "../utils/formatCurrency.js";

const OrdersTable = () => {
  const apiUrl = "https://eshop-deve.herokuapp.com/api/v2/orders";
  const authToken = import.meta.env.VITE_AUTH_TOKEN;

  const { data, error, loading } = useFetch(apiUrl, authToken);
  const orders = data?.orders;

  return (
    <>
      {loading && <Spinner label="Cargando..." color="primary" />}
      {error && <p>Error: {error.message}</p>}
      {orders && (
        <Table aria-label="Tabla de órdenes de compra" className="mb-12">
          <TableHeader>
            <TableColumn># ORDEN</TableColumn>
            <TableColumn>TOTAL</TableColumn>
            <TableColumn>ESTATUS</TableColumn>
          </TableHeader>
          <TableBody>
            {orders?.map((order) => {
              const totalAmount = formatCurrency(order.totals.total);
              const status =
                order.payment.status == "paid" ? "Pagada" : "Pendiente";
              const orderState = {
                orderNumber: order.number,
                items: order.items,
              };
              return (
                <TableRow key={order.id}>
                  <TableCell>
                    <Link
                      to={`/order/${order.number}`}
                      state={orderState}
                      className="text-cyan-500"
                    >
                      #{order.number}
                    </Link>
                  </TableCell>
                  <TableCell>{totalAmount}</TableCell>
                  <TableCell>
                    <Chip color="success">
                      <span className="text-emerald-50">{status}</span>
                    </Chip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default OrdersTable;
