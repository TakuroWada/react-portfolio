import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../components/atoms/Text";

describe("Rendering", () => {
  it("Should render Text correctly", () => {
    render(<Text text="dummy" />);
    expect(screen.getByText("dummy")).toBeTruthy();
  });
});
