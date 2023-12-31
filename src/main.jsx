import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './routes/ErrorPage.jsx'
import MoreInfo from './routes/MoreInfo.jsx'

import { WeatherApiContextProvider } from './context/WeatherApiContext.jsx'
import { WeatherApiForecastContextProvider } from './context/WeatherApiForecastContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'info',
    element: <MoreInfo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApiContextProvider>
      <WeatherApiForecastContextProvider>
        <RouterProvider router={router} />
      </WeatherApiForecastContextProvider>
    </WeatherApiContextProvider>
  </React.StrictMode>,
)
