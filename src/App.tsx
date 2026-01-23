import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import { Ejercicio1 } from "./Pages/Ejercicio1";
import { Ejercicio2 } from "./Pages/Ejercicio2";
import { Ejercicio3 } from "./Pages/Ejercicio3";
import { Ejercicio4 } from "./Pages/Ejercicio4";
import { Ejercicio5 } from "./Pages/Ejercicio5";
import { Ejercicio6 } from "./Pages/Ejercicio6";
import { Ejercicio7 } from "./Pages/Ejercicio7";
import { Ejercicio8 } from "./Pages/Ejercicio8";
import { Ejercicio9 } from "./Pages/Ejercicio9";


function App() {
  

// Importa tus ejercicios aquí
// import Ejercicio1 from './exercises/Ejercicio1';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>Bienvenido</div>, // Página de bienvenida
      },
      {
        path: "exercise/1",
        element: <Ejercicio1/>, 
      },
      {
        path: "exercise/2",
        element: <Ejercicio2/>,
      },
      {
        path: "exercise/3",
        element: <Ejercicio3/>,
      },
      {
        path: "exercise/4",
        element: <Ejercicio4/>,
      },
      {
        path: "exercise/5",
        element: <Ejercicio5/>,
      },
      {
        path: "exercise/6",
        element: <Ejercicio6/>,
      },
      {
        path: "exercise/7",
        element: <Ejercicio7/>,
      },
      {
        path: "exercise/8",
        element: <Ejercicio8/>,
      },
      {
        path: "exercise/9",
        element: <Ejercicio9/>,
      },
    ],
  },
]);




  return <>
   <RouterProvider router={router}/>
  </>;
}

export default App;
