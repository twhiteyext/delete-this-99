export async function main(argumentJson) {
	console.log(argumentJson)

	return {
<<<<<<< Updated upstream
		"body": `healthy and running, env var`,
=======
		"body": `healthy and running, env var: dd`,
>>>>>>> Stashed changes
		"statusCode": 200,
		"headers": {
			// "Cache-control": "private",
			"X-Yext-Test": "Example header",
		},
	  };
}
