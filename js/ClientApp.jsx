import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

// const MyTitle = function(props) {
//   // return ce(
//   //   "div",
//   //   null,
//   //   ce("h1", { style: { color: props.color } }, props.title)
//   // );
//   // const style = { color: props.color };
//   return (
//     <div>
//       <h1 style={{ color: props.color }}>{props.title}</h1>
//     </div>
//   );
// };

// const MyFirstComponent = function() {
//   // return ce(
//   //   "div",
//   //   { id: "my-first-component" },
//   //   ce(MyTitle, { title: "Game of Thrones", color: "YellowGreen" }),
//   //   ce(MyTitle, { title: "Stranger Things", color: "GreenYellow" }),
//   //   ce(MyTitle, { title: "Rick and Morty", color: "LimeGreen" }),
//   //   ce(MyTitle, { title: "House of Cards", color: "peru" })
//   // );
//   return (
//     <div id="my-first-component">
//       <MyTitle title="Game of Thrones" color="YellowGreen" />
//       <MyTitle title="Stranger Things" color="GreenYellow" />
//       <MyTitle title="House of Cards" color="Peru" />
//       <MyTitle title="The Americans" color="burlywood" />
//     </div>
//   );
// };

// render(<MyFirstComponent />, document.getElementById("app"));
