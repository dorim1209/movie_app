import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    picture : 
    "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiM_u_AyMHkAhWLGaYKHUibAokQjRx6BAgBEAQ&url=https%3A%2F%2Fseonkyounglongest.com%2Fmak-kimchi%2F&psig=AOvVaw03yIFeqlHM7SaQCeVQbfzU&ust=1568043801551880",
    rating : 5.0
  },
  {
    id : 2,
    name : "Sam",
    picture : 
    "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwicxLLHyMHkAhUlzIsBHYu3CJcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.thekitchn.com%2Fhow-to-make-easy-kimchi-at-home-189390&psig=AOvVaw03yIFeqlHM7SaQCeVQbfzU&ust=1568043801551880",
    rating : 4.9
  },


]

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name} />
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired,

}

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food
      key = {dish.id}
      name  = {dish.name}
      picture = {dish.image}
      rating = {dish.rating}
      />
    ))}
  </div>
    );
}

export default App;
