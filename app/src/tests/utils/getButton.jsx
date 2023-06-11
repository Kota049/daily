import { screen } from "@testing-library/react";
const getButton = (message) => {
  return screen.getByText(message, { selector: "button" });
};

export default getButton;
