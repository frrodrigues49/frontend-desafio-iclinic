import { cleanup } from "@testing-library/react";
import { getContainer } from "../../utils/actionsTest";
import SkeletonTheme from ".";

const callback = jest.fn((e) => e.preventDefault());

afterEach(() => {
  callback.mockClear();
  cleanup();
});

describe("return component skeletontheme", () => {
  it("should render skeleton component", async () => {
    const { getAllByTestId } = getContainer(SkeletonTheme, {});
    const skeleton = await getAllByTestId("skeleton");
    expect(skeleton).toBeTruthy();
  });
});
