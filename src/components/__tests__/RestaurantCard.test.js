import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props value", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});
