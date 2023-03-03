export async function main(argumentJson) {
	let catResp;
	console.log(argumentJson)

	return {
		"body": `healthy and running, env var: ${ENV_VAR_KEY}`,
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };
}