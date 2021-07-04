import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../pages/index";
import WeatherCard from "components/weatherCard";

const DEFAULT_PROPS = {
  temp: 25,
  name: "Istanbul",
  imageUrl: "/Istanbul.jpeg",
  imageAlt: "istanbul",
  onClick: jest.fn(),
  handleSubtract: jest.fn(),
};

const renderComponent = (props = {}) => {
  return {
    ...render(<WeatherCard {...DEFAULT_PROPS} {...props} />),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
};

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Populer Cities")).toBeInTheDocument();
  });
  it("shows the Istanbul's weather", () => {
    renderComponent();
    expect(screen.getByText("Istanbul")).toBeInTheDocument();
  });
  it("select Istanbul's weather", () => {
    renderComponent();
    userEvent.click(screen.getByRole('button'));
    expect(DEFAULT_PROPS.onClick).toBeCalled();
    expect(DEFAULT_PROPS.onClick).toBeCalledTimes(1);
  });
});
