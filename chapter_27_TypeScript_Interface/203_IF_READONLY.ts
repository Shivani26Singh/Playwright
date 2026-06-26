interface APIReponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly

// ? - optional

let response: APIReponse = {
    statusCode: 200,  // can set only once and then we can read it
    body: '{"user": "admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

/*Status: 200
Body: {"user": "admin"}
Headers: undefined*/

// response.statusCode = 404; // not allowed as readonly
response.body = "dasdadas";  // can change