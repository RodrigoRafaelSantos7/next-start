# 📡 API Layer

### Use a Single Instance of the API Client

When your application interacts with either RESTful or GraphQL APIs, it is beneficial to use a single instance of the API client that has been pre-configured and can be reused throughout the application. For example, you can create a single API client instance using the native fetch API on Next.js.

### Define and Export Request Declarations

Rather than declaring API requests on the fly, it is recommended to define and export them separately.

Declaring API requests in a structured manner can help maintain a clean and organized codebase as everything is colocated.
Every API request declaration should consist of:

- Types and validation schemas for the request and response data
- A fetcher function that calls an endpoint, using the API client instance
- A hook that consumes the fetcher function. For further information on this regard consult [Next.js Data Fetching and Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) to manage the data fetching and caching logic.

This approach simplifies the tracking of defined endpoints available in the application. Additionally, typing the responses and inferring them further down the application enhances application type safety.
