## Fetch
fetch is a modern JavaScript API for making network requests (HTTP requests) in web browsers. It provides a cleaner and more flexible alternative to the older XMLHttpRequest object. The fetch API is designed to be more powerful, more flexible, and to better support modern development practices, particularly when dealing with asynchronous operations like fetching data from a server.

1. The fetch function returns a Promise that resolves to the Response object representing the response to the request.
2. The first .then block checks if the response status is OK and throws an error if not.
3. The second .then block parses the response body as JSON (assuming it's JSON data). Note that this step is optional and depends on the type of data you are expecting.
4. The .catch block handles any errors that occur during the fetch process.

