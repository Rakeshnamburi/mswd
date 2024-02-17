import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1); // Corrected the state name

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setPosts({}); // Handle the error by setting an empty object
      });
  }, [buttonId]); // Changed to buttonId for consistency

  function handleClick() {
    setButtonId(id);
  }

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>DataFetch</button>
      {posts.title && (
        <div>
          
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetch;

