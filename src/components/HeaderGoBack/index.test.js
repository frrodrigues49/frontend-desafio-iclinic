import { fireEvent, cleanup } from "@testing-library/react";
import { getContainer } from "../../utils/actionsTest";
import HeaderGoBack from ".";

const callback = jest.fn((e) => e.preventDefault());

afterEach(() => {
  callback.mockClear();
  cleanup();
});

describe("return component goback", () => {
  it("should render goback component", async () => {
    const { getAllByTestId } = getContainer(HeaderGoBack, {});
    const goback = await getAllByTestId("goback");
    expect(goback).toBeTruthy();
  });

  it("should render icon arrow back", async () => {
    const { getAllByTestId } = getContainer(HeaderGoBack, {});
    const avatar = await getAllByTestId("avatar");
    expect(avatar).toBeTruthy();
  });

  it("should render text back", async () => {
    const { getByText } = getContainer(HeaderGoBack, {});
    const text = await getByText("back");
    expect(text).toBeTruthy();
  });

  it("should click link goback", async () => {
    const { getByTestId } = getContainer(HeaderGoBack, {});
    const goback = await getByTestId("goback");

    goback.onclick = callback;
    fireEvent.click(goback);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
