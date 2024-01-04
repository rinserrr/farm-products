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
