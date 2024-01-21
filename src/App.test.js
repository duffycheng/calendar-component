import { render, fireEvent, screen } from "@testing-library/react";
import App from "@/App";

const mockDate = new Date(2024, 0, 1);
global.Date.now = jest.fn(() => mockDate.getTime());
describe("Render App Component", () => {
  test("renders correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/2024年1月/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Calendar Component - get multile '1日' in the calendar", () => {
    render(<App />);
    const dayElements = screen.queryAllByText(/1日/i);
    dayElements.forEach((dayElement) => {
      expect(dayElement).toBeInTheDocument();
    });
  });
});
