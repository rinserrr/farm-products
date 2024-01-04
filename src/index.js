import React from "react";
import {createRoot} from 'react-dom/client';


// Проблема в том, что вы пытаетесь отобразить объект "comments" в качестве дочернего элемента, а React не может отобразить объекты напрямую.
// Вам нужно отобразить каждый элемент массива "comments" отдельно. Для этого вы можете использовать метод map() для создания нового массива
// элементов React.
// import {product} from "./mock";
import ProductPage from './product-page';
import {myObject} from "./dataObj";


const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
if (rootElement === null) throw new Error('Root container missing in index.html')

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ProductPage myObject={myObject} />
  </React.StrictMode>
);


//
// How to render a object in react?
// https://stacktuts.com/how-to-render-a-object-in-react
