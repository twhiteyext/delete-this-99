export async function main(argumentJson) {
	console.log(argumentJson)

	return {
		"body": `healthy and running, env var`,
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };
}