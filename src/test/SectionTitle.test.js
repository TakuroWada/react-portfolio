import React from "react";
import { render, screen } from "@testing-library/react";
import SectionTitle from "../components/atoms/SectionTitle";

describe("Rendering", () => {
  it("Should render SectionTitle correctly", () => {
    render(<SectionTitle />);
    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
