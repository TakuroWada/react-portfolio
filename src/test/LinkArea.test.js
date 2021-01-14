import React from "react";
import { render, screen } from "@testing-library/react";
import LinkArea from "../components/molecules/LinkArea";

describe("Rendering", () => {
  it("Should render LinkArea correctly", () => {
    render(<LinkArea />);
    expect(screen.getAllByRole("link")).toBeTruthy();
  });
});
