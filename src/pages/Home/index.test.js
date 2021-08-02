import { fireEvent, cleanup } from "@testing-library/react";
import { getContainer } from "../../utils/actionsTest";
import Home from ".";

const callback = jest.fn((e) => e.preventDefault());

afterEach(() => {
  callback.mockClear();
  cleanup();
});

describe("return to a home screen", () => {
  it("should render home sreen", async () => {
    const { getAllByTestId } = getContainer(Home, {});
    const homePage = await getAllByTestId("homePage");
    expect(homePage).toBeTruthy();
  });

  it("should render title home sreen", async () => {
    const { getByTitle } = getContainer(Home, {});
    const title = getByTitle("Welcome to iClinic");
    expect(title).toBeTruthy();
  });

  it("should render sub-title home sreen", async () => {
    const { getByText } = getContainer(Home, {});
    const title = getByText("FRONTEND CHALLENGE");
    expect(title).toBeTruthy();
  });

  it("must click and call the method", async () => {
    const { getAllByTestId } = getContainer(Home, {});
    const btnStart = getAllByTestId("btnStart");

    expect(btnStart.length).toBe(1);
    btnStart[0].onclick = callback;
    fireEvent.click(btnStart[0]);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
