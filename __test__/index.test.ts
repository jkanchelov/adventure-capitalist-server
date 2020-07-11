import { getHelloWorld } from "../src/index";

test("Test example of Hello World", () => {
    expect(getHelloWorld()).toBe("Hello World");
});
