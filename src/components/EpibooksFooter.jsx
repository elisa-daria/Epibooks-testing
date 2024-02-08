import Nav from "react-bootstrap/Nav";

const EpibooksFooter = () => {
  return (
    <Nav
      navigation="true"
      className="justify-content-center align-items-center p-2 bg-success fluid"
    >
      <Nav.Item>
        <p className="text-light fs-5">Made with 🔥</p>
      </Nav.Item>
    </Nav>
  );
};

export default EpibooksFooter;
