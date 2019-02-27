# Instructions

`node .` to start the server

# General Notes

index.js creates a POST end-point for `createUser` which takes a `req` object containing the form fields and a `res` object that returns a response, in this case 200 as we're stubbing things out.

The end-point uses the store which returns a Promise object, in this case stubbed to always resolve. We have a `then()` block for returning the response on a successful resolve but will also need a `catch()` block for any rejection made.

There's also index.html which is just a simple form for logging in.

App JS binds an event to the form submit action which gets the form data and calls a function called `post`. This function uses the `fetch` API to post to the endpoint. It does nothing yet with the returned response.