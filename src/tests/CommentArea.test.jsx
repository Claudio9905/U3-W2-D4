import CommentArea from "../components/CommentArea";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Verifica della renderizzazione del componente CommentArea

describe("testing initial mountin", () => {
  it("checks if CommentArea is in the VIRTUAL DOM", () => {
    // 1) montare il componente CommentArea nel VIRTUAL DOM

    render(<CommentArea idBook="ABC123" />);
    // 2)individuare gli elementi che vogliamo recuperare
    const commentArea = screen.getByTestId("comments");
    // 3) interazione con il componente se necessario
    // 4) verifica dei risultati
    expect(commentArea).toBeInTheDocument();
  });
});
