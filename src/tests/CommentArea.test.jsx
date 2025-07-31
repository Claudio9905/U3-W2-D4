import CommentArea from "../components/CommentArea";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("testing initial mounting", () => {
  it("checks CommentArea", () => {
    render(<CommentArea idBook="123ab" />);
    const commentTitle = screen.getByText("Recensioni del libro");
    expect(commentTitle).toBeInTheDocument();
  });
});
