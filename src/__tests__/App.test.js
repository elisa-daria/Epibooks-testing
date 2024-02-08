import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("General mounting items", () => {
  it("mounts the Welcome Alert", () => {
    render(<App />);
    const welcomeAlert = screen.getByText(/your favourite horror library/i);
    expect(welcomeAlert).toBeInTheDocument();
  });
  //   it("mounts the Navbar and Footer", () => {
  //     render(<App />);
  //     const navItems = screen.getAllByRole("navigation");
  //     expect(navItems).toHaveClass("Nav");
  //   });
});

describe("fetching Items", () => {
  it("correctly identifies how many cards have been fetched", async () => {
    render(<App />);
    const horrorsCards = await screen.findAllByAltText(/book-cover-/i);
    expect(horrorsCards).toHaveLength(150);
  });
  it("mounts the CommentArea", async () => {
    render(<App />);
    const sendButton = await screen.findByText(/send/i);
    expect(sendButton).toBeInTheDocument();
  });
});
describe("conditional styling", () => {
  it("checks if there is correct styling on a selected book", async () => {
    render(<App />);
    const selectedBook = await screen.findByTestId(/0316334758/i);
    fireEvent.click(selectedBook);
    expect(selectedBook).toHaveClass("border-danger");
  });
  it("checks if the previous book as returned in its default state when another book is selected", async () => {
    render(<App />);
    const selectedBook = await screen.findByTestId(/0316334758/i);
    const anotherBook = await screen.findByTestId("1455586625");
    fireEvent.click(anotherBook);
    expect(selectedBook).not.toHaveClass("border-danger");
  });
});
