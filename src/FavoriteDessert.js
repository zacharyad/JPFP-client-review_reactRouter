import React from "react";

function FavoriteDessert(props) {
  const myFavoriteDessert = {
    1: "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJoZWlnaHQiOjcyMH0sIndlYnAiOnsicXVhbGl0eSI6NjB9fSwia2V5IjoicHJvZHVjdC1pbWFnZXMvZVVVSzVpTjRGR3RRQUtBU3N4OFNYU1piN0U4VUYwWFFld0pTQ205VS5qcGcifQ==",
    2: "https://tipbuzz.com/wp-content/uploads/Slutty-Brownies-Featured-Image.jpg",
    3: "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/half-baked-detail.png",
    4: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.826.620.suffix/1582853049838.jpeg",
    5: "https://www.chewoutloud.com/wp-content/uploads/2012/12/apple-pie-3.jpg"
  };
  console.log(props);
  return (
    <div className="container">
      <button onClick={() => props.history.goBack()}>Go back!</button>
      <img src={myFavoriteDessert[props.match.params.dessertId]} alt="random desserts" className="favorite-dessert"></img>
    </div>
  );
}

export default FavoriteDessert;
