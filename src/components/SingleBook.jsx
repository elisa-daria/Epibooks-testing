import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const SingleBook = ({ book, selected, changeSelected }) => {
  // const { book, selected, changeSelected } = this.props;
  const [borderBook, setBorderBook] = useState(false);
  return (
    <>
      <Col xs={12} sm={6} md={4}>
        <Card
          onClick={() => {
            changeSelected(book.asin);
            setBorderBook(!borderBook);
          }}
          data-testid={book.asin}
          className={
            selected === book.asin && borderBook
              ? "border-4 border-danger text-center h-100 opacity-50"
              : "text-center h-100"
          }
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt={"book-cover-" + book.title}
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-evenly">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <i className="bi bi-currency-euro"></i> {book.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
