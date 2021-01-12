import React from "react";
import { render, screen } from "@testing-library/react";
import LinkImage from "../components/atoms/LinkImage";
import DummyImage from "../assets/images/githubIcon.png";

describe("Rendering", () => {
  it("Should render LinkImage correctly", () => {
    render(
      <LinkImage
        name="dummy"
        url="https://gadget-master.web.app/"
        image={DummyImage}
      />
    );
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.queryByAltText("dummy")).toBeTruthy();
  });
});
