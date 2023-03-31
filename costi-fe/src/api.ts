const url = "http://localhost:8080";

const POST = (endpoint: string, requestBody: any) => {
    return fetch(url + endpoint, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json())
}

export default POST;