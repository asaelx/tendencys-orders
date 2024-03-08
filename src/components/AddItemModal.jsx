import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

const AddItemModal = (props) => {
  const { toggleModal, showModal, onSubmit } = props;

  const [formState, setFormState] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    toggleModal();
  };

  return (
    <Modal isOpen={showModal}>
      <ModalContent>
        <ModalHeader>Agregar producto</ModalHeader>
        <ModalBody>
          <Input
            isRequired
            type="string"
            name="sku"
            value={formState.sku}
            label="SKU"
            className="max-w-xs"
            errorMessage=""
            onChange={handleChange}
          />
          <Input
            isRequired
            type="string"
            name="name"
            value={formState.name}
            label="Nombre"
            className="max-w-xs"
            onChange={handleChange}
          />
          <Input
            isRequired
            type="number"
            name="quantity"
            value={formState.quantity}
            label="Cantidad"
            className="max-w-xs"
            onChange={handleChange}
          />
          <Input
            isRequired
            type="number"
            name="price"
            value={formState.price}
            label="Precio"
            className="max-w-xs"
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onClick={() => toggleModal()}>
            Cancelar
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Agregar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddItemModal;
