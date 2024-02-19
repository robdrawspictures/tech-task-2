import formatPhoneNumber from "../helpers/formatPhoneNumber";

test("Correctly returns formatted number for maximum length", () => {

    const testNum = formatPhoneNumber('1(234)456-7890x420')

    expect(testNum).toBe('+1 (234) 456-7890 x420')

})