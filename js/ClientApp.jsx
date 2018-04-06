import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>
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
