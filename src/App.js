//Per cominciare a scrivere codice dobbiamo importare react
import React, { useState } from 'react';

//creiamo la nostra funzione
//quando il nome della funzione è opaco, vuol dire che non è utilizzata
//per utlizzarla dobbiamo esportarla
//possiamo scrivere in javascript all'interno delle parentesi graffe
//questo sotto è codice HTML che viene convertito in javascript
import Post from './FacebookPost';

function App() {
  const [posts, setPosts] = useState([
    { author: "Andrea", description: "fsfsfss" },
    { author: "Shrek", description: "xue hua piao piao" }
  ]);

  return (
    <div className="Container">
      {
        posts.map(post => (
          <Post author={post.author} description={post.description} />
        ))
      }
    </div>
  );
}

export default App;