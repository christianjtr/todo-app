import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import useAuthentication from "../../hooks/useAuthentication";

import Login from "../../pages/Login";

/**
 * Example on how to test a page view...
 */

jest.mock("../../hooks/useAuthentication");

describe("Login page component", () => {
    beforeAll(() => {
        (useAuthentication as jest.Mock) = jest.fn().mockReturnValue({
            logIn: () => jest.fn(),
        });
    });

    afterEach(() => {
        cleanup();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it("should render component properly", () => {
        const renderer = createRenderer();

        const component = renderer.render(<Login />);

        expect(component).toBeDefined();
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });

    it("should perform a login by filling in the form and clicking on submit button", () => {
        useAuthentication().logIn = jest.fn();

        const { container } = render(<Login />);

        expect(useAuthentication).toHaveBeenCalled();

        const usernameInputElement = container.querySelector("#username");
        const passwordInputElement = container.querySelector("#password");
        const logInBtn = container.querySelector("#submitBtn");

        fireEvent.change(usernameInputElement!, {
            target: { value: "username" },
        });

        fireEvent.change(passwordInputElement!, {
            target: { value: "12345678" },
        });

        fireEvent.click(logInBtn!);

        expect(useAuthentication().logIn).toHaveBeenCalled();
    });
});
