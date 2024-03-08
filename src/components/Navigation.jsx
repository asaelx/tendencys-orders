import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import enviaLogoSrc from "../assets/envia-logo.svg";

const Navigation = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <img src={enviaLogoSrc} width="100" alt="Envia" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Órdenes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Productos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Iniciar Sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
