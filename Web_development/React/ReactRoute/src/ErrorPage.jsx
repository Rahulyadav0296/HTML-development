// Anything our app thows an error white rendering, loading data or performing dat mutations
// React Router will catch it and render an error screen. Let's make our own error page
import { useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
