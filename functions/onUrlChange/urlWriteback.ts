export async function main(argumentJson) {
	console.log(argumentJson)

	return {
		"body": "called onUrlChange plugin",
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };
}