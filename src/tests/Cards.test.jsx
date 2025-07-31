import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

// verifica della renderizzazione delle bootstrap card quanti sono i libri nel file json

const arrayBooks = fantasy.map((book) => {
  return book;
});

describe("testing initial mounting", () => {
  it("checks of bootstrap cards", () => {
    // 1) montiamo il componente delle card sono presenti nel VIRTUAL DOM
    render(<BookList books={fantasy} />);
    // 2) individuare gli elementi da recuperare
    const card = screen.getAllByTestId("card");
    // 3) interazione con il componente se necessario
    // 4) verifica dei risultati
    expect(card).toHaveLength(arrayBooks.lenght);
  });
});
