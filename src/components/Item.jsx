import React, { useEffect, useState } from "react";

export const Item = ({ obj, arr }) => {
  const [state, setState] = useState(null);

  const onClick = () => {
    if (state !== "white") {
      if (state === null) {
        setState("green");
      } else if (state === "green") {
        setState("red");
      } else {
        setState(null);
      }
    }

    console.log(arr.findIndex(item => item.isTree === true), obj);

    if (arr.findIndex(item => item.isTree === true) === obj.id) {
      alert("win");
    }
  };

  useEffect(() => {
    if (obj.isTree) {
      setState("white");
    }
  }, [obj]);

  return (
    <div
      className="item"
      style={{ backgroundColor: state }}
      onClick={onClick}
    ></div>
  );
};
