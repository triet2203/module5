import React from "react";
import CityList from "./lessons/ss1_ReactJs/CityList.jsx";
import Element from "./lessons/ss1_ReactJs/Element.jsx";

function App() {
    return (
        <div>
            <h1>Hello ReactJS</h1>
            <p>Đây là ví dụ về JSX</p>
        </div>
    );
}

export default App;

// function App() {
//   const name = "Triet";
//   const age = 26;
//
//   return (
//       <div>
//         <h1>Hello {name}</h1>
//         <p>Tuổi: {age}</p>
//       </div>
//   );
// }
//
// export default App;

//         <p>
//           {age >= 18 ? "Đã đủ tuổi" : "Chưa đủ tuổi"}
//         </p>

// const element = React.createElement(
//     "h1",
//     null,
//     "Hello ReactJS"
// )
//
// const element = <h1>Hello ReactJS</h1>;