import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

//  controllo di montaggio del componente Welcome

describe("testing initial mounting", () => {
  it("cheks if component Welcome is in the DOM", () => {
    // 1) montiamo il componente Welcome nel VIRTUAL DOM
    render(<Welcome />);
    // 2) individuare le componenti interessate per il recupero
    const welcome = screen.getByText("Benvenuti in EpiBooks!");
    // 3) interazione con il componente se necessario
    // 4) verifica dei risultati
    expect(welcome).toBeInTheDocument();
  });
});
