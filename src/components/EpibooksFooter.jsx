import Nav from "react-bootstrap/Nav";

const EpibooksFooter = () => {
  return (
    <Nav
      navigation="true"
      className="flex-column align-items-center p-2 bg-success fluid"
    >
      <Nav.Item>
        <p className="text-light fs-4 fw-light">Made with 🔥</p>
      </Nav.Item>
      <Nav.Item>
        <p className="text-light fw-light">Lee ©️ {new Date().getFullYear()}</p>
      </Nav.Item>
    </Nav>
  );
};

export default EpibooksFooter;
