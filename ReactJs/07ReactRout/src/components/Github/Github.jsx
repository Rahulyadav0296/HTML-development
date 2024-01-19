import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://github.com/Rahulyadav0296")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
    const responce = await fetch("https://github.com/Rahulyadav0296")
    return responce.json()
}
