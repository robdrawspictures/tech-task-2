import formatURL from "../helpers/formatURL";

test("Correctly returns provided URL with appended http://", () => {

    const testURL = formatURL("google.com");
    const testURL2 = formatURL("sneed.org");
    const testURL3 = formatURL("sausages.co.uk");
    const testURL4 = formatURL("www.blueyonder.net");

    expect(testURL).toBe('http://google.com');
    expect(testURL2).toBe('http://sneed.org');
    expect(testURL3).toBe('http://sausages.co.uk');
    expect(testURL4).toBe("http://www.blueyonder.net");
})

test("Function rejects non-string argument", () => {

    const testURL = formatURL(69);

    expect(testURL).toBe('Error: Provided URL must be a string');
})

test("Function rejects URL without period", () => {

    const testURL = formatURL("google");

    expect(testURL).toBe('Error: Provided URL format incompatible');
})