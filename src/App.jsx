import { Item } from "./components/Item";
import "./App.css";
import { useEffect } from "react";

function App() {
  const arr = [
    { isTree: false, id: 0 }, { isTree: false, id: 1 }, { isTree: false, id: 2 }, { isTree: false, id: 3 }, { isTree: false, id: 4 },
    { isTree: false, id: 5 }, { isTree: true, id: 6 }, { isTree: false, id: 7 }, { isTree: false, id: 8 }, { isTree: false, id: 9 },
    { isTree: false, id: 10 }, { isTree: false, id: 11 }, { isTree: false, id: 12 }, { isTree: false, id: 13 }, { isTree: false, id: 14 },
    { isTree: true, id: 15 }, { isTree: true, id: 16 }, { isTree: false, id: 17 }, { isTree: false, id: 18 }, { isTree: false, id: 19 },
    { isTree: false, id: 20 }, { isTree: false, id: 21 }, { isTree: false, id: 22 }, { isTree: false, id: 23 }, { isTree: true, id: 24 },
  ];

  const treesIds = [];

  useEffect(() => {
    arr.forEach(item => {
      if (item.isTree) {
        treesIds.push(item.id);
      };
    });
  }, []);

  return (
    <div className="App">
      {/* <div className="inner">
        <div className="num">2</div>
        <div className="num">0</div>
        <div className="num">1</div>
        <div className="num">1</div>
        <div className="num">1</div>
      </div> */}
      <div className="inner">
        {arr.map((item) => {
          return <Item obj={item} arr={arr} />
        })}
      </div>
    </div>
  );
}

export default App;
