import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"

import Main from "./views/Main"
import { body } from "./index.styled"
import WithLion from "./views/WithLion"

const router = createBrowserRouter(
  [
    { path: "/", element: <Main /> },
    { path: "/with-lion", element: <WithLion /> },
  ],
  { basename: process.env.PUBLIC_URL }
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${body}
`
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
