import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Prodotto from "./Pages/Prodotto/Prodotto";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Carrello from "./Pages/Carrello/Carrello";


const queryClient = new QueryClient()

//questa funzione ti definisce quali componenti troverai a un certo path del server
// prende un array di oggetti, ognuno di questi oggetti contiene il path di riferimento
// e il componente che esso richiama
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        // non esiste la pagina prodotto: è sempre accompagnata dall'id del prodotto
        // es: non puoi fare localhost/prodotto, devi fare localhost/prodotto/numeroProdotto
        path: "/prodotto/:prodottoId",
        element: <Prodotto />
    },
    {
        path: "/carrello",
        element: <Carrello />
    },
    {
        path: "/app",
        element: <App />
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store} >
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
