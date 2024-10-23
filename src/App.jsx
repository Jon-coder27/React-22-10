import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: "GAME PS5 1TB JAP CFI-2000B01 SLIM 4K E 8K BRANCO",
    price: "R$ 3.126,60",
    image: "https://www.lgimportados.com/img/g/IMG_663229_2.JPG?v=1729644785"
  },
  {
    id: 2,
    title: "TECLADO LOGITECH G815 GAMING",
    price: "R$ 781,65",
    image: "https://www.lgimportados.com/img/g/IMG_674355_1.JPG?v=1729642954"
  },
  {
    id: 3,
    title: "ANTENA STARLINK STANDARD KIT 2.5MBPS 5G + ROUTER UTR-211",
    price: "R$ 1.737,00",
    image: "https://www.lgimportados.com/img/g/IMG_709576_3.JPG?v=1729645026"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;