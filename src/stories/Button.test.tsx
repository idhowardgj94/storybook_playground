import { fireEvent, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";

import Meta, { Primary } from "./Button.stories";

const PrimaryButton = composeStory(Primary, Meta);

test("Check unit test functionality", () => {
  render(<PrimaryButton />);
  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  expect(true).toBe(true);
});
