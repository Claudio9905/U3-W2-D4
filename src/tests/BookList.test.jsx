import BookList from "../components/BookList";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import fantasy from "../data/fantasy.json";

describe("testing initial mounting", () => {
  // verifica della renderizzazione delle card in base al numero di libri nel file fantasy.json
  it("checks the bootstrap cards", () => {
    render(<BookList books={fantasy} />);
    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(fantasy.length);
  });
});
