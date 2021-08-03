import { fireEvent, cleanup } from "@testing-library/react";
import { getContainer } from "../../utils/actionsTest";
import Theme from ".";

const callback = jest.fn((e) => e.preventDefault());

afterEach(() => {
  callback.mockClear();
  cleanup();
});

describe("return to a theme screen", () => {
  it("should render theme sreen", async () => {
    const { getAllByTestId } = await getContainer(Theme, {});
    const themePage = await getAllByTestId("themePage");
    expect(themePage).toBeTruthy();
  });
  it("should render profile web theme", async () => {
    const { getAllByTestId } = await getContainer(Theme, {});
    const web = await getAllByTestId("web");
    expect(web).toBeTruthy();
  });
  it("should render profile mobile theme", async () => {
    const { getAllByTestId } = await getContainer(Theme, {});
    const mobile = await getAllByTestId("mobile");
    expect(mobile).toBeTruthy();
  });
  it("should render text button", async () => {
    const { getAllByText } = await getContainer(Theme, {});
    const textButton = await getAllByText("choose your path again, Padawan");
    expect(textButton).toBeTruthy();
  });
  it("should render avatar", async () => {
    const { getByTag } = await getContainer(Theme, {});
    const avatar = await getByTag("img");
    expect(avatar).toBeTruthy();
  });
  it("should render master name", async () => {
    const { getAllByTitle } = await getContainer(Theme, {});
    const title = await getAllByTitle("Your master is Luck");
    expect(title).toBeTruthy();
  });
  it("must click and call the method", async () => {
    const { getAllByTestId } = getContainer(Theme, {});
    const btnStart = getAllByTestId("btnStart");

    expect(btnStart.length).toBe(2);
    btnStart[0].onclick = callback;
    fireEvent.click(btnStart[0]);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
