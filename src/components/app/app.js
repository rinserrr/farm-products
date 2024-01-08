import PageWrapper from '../layout/page-wrapper/page-wrapper';

import "./app.css";

import productList from '../../mocks/productList';


export default function App() {
  return <PageWrapper products={productList} />;
}
