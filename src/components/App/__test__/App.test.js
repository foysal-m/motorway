import React from "react";
import {
  render,
  screen,
  act,
  waitFor,
  getByAltText,
} from "@testing-library/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        url: "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM",
        alt_description: "white car",
      }),
  })
);

describe("App", () => {
  it("loads the image on mount", async () => {
    act(async () => render(<LazyLoadImage />));
    await waitFor(() =>
      expect(
        screen
          .getByAltText("white car")
          .toHaveAttribute(
            "src",
            "https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg"
          )
      )
    );
  });
});
