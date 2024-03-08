import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import formatCurrency from "../utils/formatCurrency";

const ItemsTable = (props) => {
  const { items } = props;
  return (
    <Table aria-label="Tabla de productos" className="mb-8">
      <TableHeader>
        <TableColumn>SKU</TableColumn>
        <TableColumn>NOMBRE</TableColumn>
        <TableColumn>CANTIDAD</TableColumn>
        <TableColumn>PRECIO</TableColumn>
      </TableHeader>
      <TableBody>
        {items?.map((item, index) => {
          const priceAmount = formatCurrency(item.price);
          return (
            <TableRow key={index}>
              <TableCell>{item.sku ?? "SIN SKU"}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{priceAmount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ItemsTable;
