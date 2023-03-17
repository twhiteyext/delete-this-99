export interface PluginInput {
	queryParams: Record<string, string>;
	pathParams: Record<string, string>;
}

export interface PluginResponse {
  body: string,
  statusCode: number,
  flag?: string,
  headers?: Record<string, string>,
  site?: Record<string, string>
}

export async function main(argumentJson: PluginInput): Promise<PluginResponse> {
	return {
		body: JSON.stringify({
			sessionId: argumentJson.pathParams.sessionId,
			site: argumentJson.site,
		}),
		statusCode: 200,
		headers: {"Content-Type": "application/json"}
	}
}
