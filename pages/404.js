import React, { useEffect } from "react";

export default function FourOFour() {
  useEffect(() => {
    const s = location.search;
    const url = "/" + s;
    console.log(location.href);
    // location.replace(url);
  }, []);
  // console.log(location);
  return <div>Loading . . . </div>;
}
