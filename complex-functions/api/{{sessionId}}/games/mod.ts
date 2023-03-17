export interface PluginInput {
	queryParams: Record<string, string>;
	pathParams: Record<string, string>;
}

export interface PluginResponse {
  body: string,
  statusCode: number,
  flag?: string,
  headers?: Record<string, string>
}

export async function main(argumentJson: PluginInput): Promise<PluginResponse> {
	console.log('dang');
	console.log(argumentJson.pathParams.sessionId);
	console.log(argumentJson);
	console.log('pondg');

	return {
		body: JSON.stringify({
			count: argumentJson.pathParams.sessionId,
			count2: 1,
		}),
		statusCode: 200,
		headers: {"Content-Type": "application/json"}
	}
}