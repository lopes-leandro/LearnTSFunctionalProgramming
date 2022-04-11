import { tests } from "./overloading-function";

describe("Test file overloading-function ", () => {

    it("should return I'm single. for tests(true).", () => {
        expect(tests(true)).toBe("I'm single.");
    });

    it("should return I'm not single. for tests(false).", () => {
        expect(tests(false)).toBe("I'm not single.");
    });

    it("should return I'm 39 years old. for tests(39).", () => {
        expect(tests(39)).toBe("I'm 39 years old.");
    });
});