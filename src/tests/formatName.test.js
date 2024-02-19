import formatName from "../helpers/formatName";

test("Correct returns the last name in any given string", () => {
    const testName1 = formatName("Sneed");
    const testName2 = formatName("Hercule Poirot");
    const testName3 = formatName("Mrs Doubtfire");
    const testName4 = formatName("Father Ted Crilly");

    expect(testName1).toBe("Sneed");
    expect(testName2).toBe("Poirot");
    expect(testName3).toBe("Doubtfire");
    expect(testName4).toBe("Crilly");
})