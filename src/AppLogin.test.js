import React from "react";
import { render, screen } from "@testing-library/react";

// component to test
import App from "./App";
import { useAuth0 } from "@auth0/auth0-react";

// create a dummy user profile
const user = {
  name: "Chandana Mahajan",
};

// intercept the useAuth0 function and mock it
jest.mock("@auth0/auth0-react");

describe("components/App - logged in", () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });

  it("Renders with required props", async () => {
    const view = render(<App />);
    expect(view).toBeTruthy();
  });

  it("Renders with user details", async () => {
    const view = render(<App />);
    expect(view).toBeTruthy();

    const userName = screen.getByText(`hello ${user.name}`);
    expect(userName).toBeInTheDocument();
    const logoutBtn = screen.getByText(/Log out/i);
    expect(logoutBtn).toBeInTheDocument();
  });
});

afterEach(() => jest.clearAllMocks());
