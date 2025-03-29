import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from './App'
import ResumePDF from './components/Resume/ResumePDF'

export const router = createBrowserRouter([
    {path: "/", element: <App/>} as RouteObject, 
    {path: "/resume.pdf", element: <ResumePDF/>} as RouteObject, 
])