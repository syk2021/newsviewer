// import React, { useState } from 'react';
// axios is promised-based HTTP client
// import axios from 'axios';

// if below statement is not included, "'React' must be in scope when using JSX"
import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect = {onSelect}/>
      <NewsList category = {category}/>
    </>
  );
};


// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async() => {
//     try {
//       const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=40f8dc0653314d11a31991ad02f4cb95",);
//       setData(response.data);
//     }
//     catch (e) {
//       console.log(e);
//     }
//   };
    

//   return (
//     <div>
//       <div>
//       <button onClick={onClick}>Load</button>
//       </div>
//     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };

export default App;