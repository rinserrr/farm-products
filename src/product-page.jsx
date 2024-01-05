import React from "react";


// function ProductPage({product}) {
//   const productKeys = Object.keys(product);

//   return (
//     <div>
//       {productKeys.map((key) => (
//         <div key={key}>
//           <span>{key}: </span>
//           {product[key]}
//         </div>
//       ))}
//     </div>
//   );
// }


// 1
// const data = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Bob' },
// ];

// function ProductPage() {
//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }


// 2
function ProductPage({myObject}) {
// 1. Объявляется константа myArray.
// 2. Вызывается метод Object.entries(), который преобразует объект myObject в массив, содержащий
//     пары ключ-значение.
// 3. Далее применяется метод map() к полученному массиву. Он создает новый массив, проходя по
//     каждому элементу и применяя переданную ему функцию.
// 4. В переданной функции используется деструктуризация массива, чтобы извлечь ключ и значение
//     каждого элемента.
// 5. Функция возвращает объект с ключом и значением, который добавляется в новый массив.
// 6. После выполнения всех итераций метод map() возвращает новый массив, который содержит объекты
//   с ключами и значениями из исходного объекта myObject.
// Таким образом, данный код преобразует объект в массив объектов, где каждый объект содержит пару
//   ключ-значение из исходного объекта.
  const myArray = Object.entries(myObject).map(([key, value]) => ({key, value}));

  return (
    <React.Fragment>
      <div>
        {myArray.map(item => (
          <div key={item.key}>
            <span>{item.key}: </span>
            <span>{item.value}</span>
          </div>
        ))}
        <br></br>
        <br></br>
      </div>
    </React.Fragment>
  );
}


export default ProductPage;
