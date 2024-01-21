import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calendar from "@/components/calendar/index";

const mockDate = new Date(2024, 0, 1);
global.Date.now = jest.fn(() => mockDate.getTime());
describe("Calener Component", () => {
  test("generates the calendar correctly with current month", () => {
    render(<Calendar />);
    const days = screen
      .getAllByTestId("day")
      .filter((day) => day.classList.contains("current-month"));

    expect(days.length).toBe(31);
  });

  test("navigates to the next month", () => {
    render(<Calendar />);
    fireEvent.click(screen.getByText("<"));
    const days = screen
      .getAllByTestId("day")
      .filter((day) => day.classList.contains("current-month"));

    expect(days.length).toBe(31);
  });

  test("navigates to the previous month", () => {
    render(<Calendar />);
    fireEvent.click(screen.getByText(">"));
    const days = screen
      .getAllByTestId("day")
      .filter((day) => day.classList.contains("current-month"));

    expect(days.length).toBe(29);
  });
  test("selects a date", () => {
    render(<Calendar />);
    const dayToSelect = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "10日" && day.classList.contains("current-month")
      );

    if (dayToSelect) {
      fireEvent.click(dayToSelect);
    }
    expect(dayToSelect).toHaveClass("active");
  });
  test("selects a range of dates", () => {
    render(<Calendar />);
    const fistDayToSelect = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "20日" && day.classList.contains("current-month")
      );

    const secondDayToSelect = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "25日" && day.classList.contains("current-month")
      );

    if (fistDayToSelect) {
      fireEvent.click(fistDayToSelect);
    }
    if (secondDayToSelect) {
      fireEvent.click(secondDayToSelect);
    }
    const daySelected = screen
      .getAllByTestId("day")
      .filter((day) => day.classList.contains("active"));
    expect(daySelected.length).toBe(6);
  });

  test("click date is earlier than current option will reset start date value", () => {
    render(<Calendar />);

    const startDateSelected = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "21日" && day.classList.contains("current-month")
      );

    const endDateSelected = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "25日" && day.classList.contains("current-month")
      );

    const resestStartDateSelected = screen
      .getAllByTestId("day")
      .find(
        (day) =>
          day.textContent === "16日" && day.classList.contains("current-month")
      );

    if (startDateSelected) {
      fireEvent.click(startDateSelected);
    }
    if (endDateSelected) {
      fireEvent.click(endDateSelected);
    }
    if (resestStartDateSelected) {
      fireEvent.click(resestStartDateSelected);
    }
    const daySelected = screen
      .getAllByTestId("day")
      .filter((day) => day.classList.contains("active"));
    expect(daySelected.length).toBe(10);
  });
});
