export async function main(argumentJson) {
	console.log(argumentJson)

	setTimeout(()=>{
		return {
			"body": `healthy and running, env var`,
			"statusCode": 200,
			"headers": {
				// "Cache-control": "private",
				"X-Yext-Test": "Example header",
			},
		  };
	}, 2000)
}