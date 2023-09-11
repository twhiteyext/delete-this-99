export async function main(body) {
    return {
        body: `completed publish`,
        statusCode: 200,
        headers: {
            // "Cache-control": "private",
            "X-Yext-Test": "Example header",
        },
    };
}