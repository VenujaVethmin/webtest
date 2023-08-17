import React from "react";


export default function Api() {
  const [Data, setData] = React.useState([]); // Initialize with an empty array

  const [testpush, setTestpush] = React.useState(1);

  React.useEffect(() => {
    fetch("https://animechan.xyz/api/random")
      .then((response) => response.json())
      .then((quote) => setData(prev=>[...prev,quote])); // Store the quote in an array
  }, [testpush]);

  function test() {
    setTestpush((prev) => prev + 1);
  }

  const display = Data.map(item => (
    <div key={item.anime}>
      <h1>{item.anime}</h1>
      <p>{item.character}</p>
      <p>{item.quote}</p>
    </div>
  ));

  return (
    <div>
      {display}
      
      
      <button onClick={test}>Next</button>
    </div>
  );
}
