import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const getContainer = (Component, props) => {
  const methods = render(
    <MemoryRouter>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...props} />
    </MemoryRouter>
  );

  const getByTag = (tagName) => [
    ...methods.container.querySelectorAll(tagName),
  ];
  return { ...methods, getByTag };
};
