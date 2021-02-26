import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "../components/atoms/Icon";

describe("Rendering", () => {
  it("Should render img correctly", () => {
    render(<Icon />);
    expect(screen.getByRole("img")).toBeTruthy();
  });
});
