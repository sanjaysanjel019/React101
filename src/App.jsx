import { useState } from "react";
const App = () => {
  const [movie,setRating] = useState({
    name : "Bold Target",
    rating : 4.5
  });

  const handleChange = () => {
    setRating({...movie,rating:8})
  }


 return(
<section>
  <h1>Hello</h1>
  <ul>
    <h1> Title : {movie.name}</h1>
    <h1> Rating : {movie.rating}</h1>
 

    <button onClick={handleChange}>Change Raing</button>
  </ul>
 
</section> 
)

}


export default App;