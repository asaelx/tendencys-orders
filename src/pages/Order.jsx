import { useState } from "react";
import Navigation from "../components/Navigation";
import { Divider } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import PlusIcon from "../components/PlusIcon";
import ItemsTable from "../components/ItemsTable";
import AddItemModal from "../components/AddItemModal";

const Order = () => {
  const location = useLocation();
  const { orderNumber } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState(location.state.items);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    toggleModal();
  };

  const handleSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <>
      <div className="container mx-auto">
        <Navigation />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold mt-8 mb-0">{`Detalle de la orden #${orderNumber}`}</h1>
        </div>
        <Divider className="my-4" />
        <ItemsTable items={items} />
        <div className="flex gap-3 justify-end">
          <Button
            color="primary"
            endContent={<PlusIcon />}
            onClick={() => handleClick()}
          >
            Agregar producto
          </Button>
        </div>
      </div>
      {showModal && (
        <AddItemModal
          toggleModal={toggleModal}
          showModal={showModal}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Order;
