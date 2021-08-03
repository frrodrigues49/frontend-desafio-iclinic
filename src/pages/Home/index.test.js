import nock from "nock";
import { fireEvent, cleanup } from "@testing-library/react";
import { getContainer } from "../../utils/actionsTest";
import Home from ".";
import Theme from "../Theme";

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

  it("must render result to click", async () => {
    nock("https://swapi.dev")
      .get("/api/people/1")
      .reply(200, {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: [],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      });

    const { getByTestId } = getContainer(Theme, {});
    const themePage = getByTestId("themePage");
    expect(themePage).toBeTruthy();
  });
});
