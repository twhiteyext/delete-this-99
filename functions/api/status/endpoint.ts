export async function main(argumentJson) {
	let catResp;
	console.log(argumentJson)

	return {
		"body": "healthy and running",
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };
}