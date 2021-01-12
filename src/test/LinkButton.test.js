import React from "react";
import { render, screen } from "@testing-library/react";
import LinkButton from "../components/atoms/LinkButton";
import DummyIcon from "../assets/images/githubIcon.png";

describe("Rendering", () => {
  it("Should render link&img correctly", () => {
    render(
      <LinkButton
        link="https://github.com/TakuroWada"
        icon={DummyIcon}
        text="dummy"
      />
    );
    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.queryByAltText("dummy")).toBeTruthy();
  });
});
