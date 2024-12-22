import { useState } from "react";

// Create a Movie Object and only update the first name of the movie
const App = () => {
  const [movies,setRating] = useState([
    {
      id:1,
      name:"Spider Man",
      rating: 8.0
    },
    {
      id:2,
      name:"The Memories of Murder",
      rating: 10.0
    },
    {
      id:3,
      name:"The Hereditary",
      rating: 8.5
    }
  ]);

  const changeRating = () => {
    setRating(movies.map((m)=> (m.id ===1 ? {...m,name:"Supadaddy"}:m))
  );
  }


 return(
<section>
  <h1>Hello</h1>
  <ul>
    {movies.map((m)=>(
      <li key={m.id}>{m.name} and the rating is {m.rating}</li>
    ))}
  </ul>
 
    <button onClick={changeRating}>Change rating</button>

    {/* <section>
      <h1>Hello</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.name} rating is {m.rating}</li>
        ))}
        <button onClick={changeRating}>Change ratings</button>
      </ul>
    </section> */}
  
 
</section> 
)

}


export default App;