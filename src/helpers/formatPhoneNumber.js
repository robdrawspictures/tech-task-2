function formatPhoneNumber(num) {

	let numArr = num.split(/[^0-9|x]/g);
	let numEnd = numArr[numArr.length - 1];

	let countryCode;
	let areaCode;
	let phoneNum;
	let ext;

	if (numArr[0].length === 1) {
		countryCode = `+${numArr[0]} `;
		if (numArr[1].length === 3 && numArr[2].length === 3) {
			areaCode = `(${numArr[1]}) `;
			phoneNum = `${numArr[2]}-${numArr[3]}`;
		}
		if (numEnd.includes("x")) {
			ext = ` ${numEnd}`;
		}
	} else if (numArr[0].length === 3 && numArr[1].length === 3) {
		areaCode = `(${numArr[0]}) `;
		phoneNum = `${numArr[1]}-${numArr[2]}`;
		if (numEnd.includes("x")) {
			ext = ` ${numEnd}`;
		}
	} else {
		phoneNum = `${numArr[0]}-${numArr[1]}`;
		if (numEnd.includes("x")) {
			ext = ` ${numEnd}`;
		}
	}

	const formattedNum = `${countryCode ? countryCode : ""}${
		areaCode ? areaCode : ""
	}${phoneNum}${ext ? ext : ""}`;

	return formattedNum;
}

export default formatPhoneNumber;
