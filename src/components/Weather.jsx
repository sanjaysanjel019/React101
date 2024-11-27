const Weather = ({temperature}) => {
  
    if(temperature<15){
      <h1>It is freezing outside</h1>
    }
    else if(temperature>=15 && temperature<25){
        <h1>It is nice outside</h1>
    }
    else{
      <h1>It is warm outside</h1>
    }
  
}

export default Weather