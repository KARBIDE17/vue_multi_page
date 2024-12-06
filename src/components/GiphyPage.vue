<template lang="pug">
  //- Navbar
  nav.navbar
    .navbar-logo
      a(href="#") GIPHYPAGE
    .navbar-links
      ul
        li
          a(href="#") Home
        li
          a(href="#") About
        li
          a(href="#") Contact

  //- Giphy Page Content
  .giphy
    h1 GiphyPage
    //- div#first-box.box I'm a box!
    //- div.box.highlighted I'm a box!
    input(type="text" v-model="userInput" placeholder="Search for a GIF" @keyup.enter="fetchGifs")
    button(@click="fetchGifs") Fetch New Gifs
    .items
      //- Loop through items to display them dynamically
      .item(v-for="(gif, index) in definitions" :key="index")
        img(:src="gif.images.fixed_height.url" alt="Giphy Gif" class='gif-image')
        p {{ gif.title || 'No title available' }}
</template>


<script setup>
/* eslint-disable no-unused-vars */
import { onMounted, ref } from 'vue';
import axios from 'axios';

// Create a ref to store the user input
const userInput = ref('');
const definitions = ref([]); // Ensure it's an array
const apiKey = import.meta.env.VITE_API_KEY;

const fetchGifs = async () => {
  // Clear previous definitions before fetching new data
  definitions.value = []; 
  // Use user input as the search term
  const searchTerm = userInput.value || 'funny'; // Fallback to 'funny' if no input
  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`);
  
  if (response.data.data.length === 0) {
    console.log("No gifs returned from api");
  } else {
    definitions.value = response.data.data; 
  }

};

onMounted(() => {
  fetchGifs(); 
});
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-style: hidden;
  border-radius: 10px;
  box-shadow: 1px 1px 8px #00ddff;
  color: #7700ff;

  .navbar-logo a {
    color: #7700ff;
    text-shadow: 1px 1px 8px #00ddff;
    text-decoration: none;
    font-weight: bold;
  }

  .navbar-links ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #7700ff;
    text-shadow: 1px 1px 8px #00ddff;

    li {
      margin-left: 1rem;

      a {
        color: #7700ff;
        text-decoration: none;
        transition: color 0.7s;

        &:hover {
          color: #aaa;
        }
      }
    }
  }
}

.box {
    padding: 10px 10px 15px 20px;
    border: 3px solid red;
    margin: 0.6rem;
    height: 18.7rem;
    width: 40%;
    display: inline-block;
  }



.highlighted {
  border: 2px solid #fa923f;
}

.giphy {
  text-align: center;
  padding: 1.25rem;
  margin-top: 5rem;

  h1 {
    font-size: 3.125rem;
    font-family: sans-serif;
    text-transform: uppercase;
    font-style: italic;
    color: #7700ff;
    text-shadow: 3px 3px 6px #00ddff;
    border: 5px solid #7700ff;
    border-radius: 10px;
    box-shadow: 1px 1px 15px #00ddff;
    width: 100%;
    height: 100%;
  }



  input {
    margin-top: 1.875rem;
    margin-right: 0.625rem;
    padding: 0.3rem;
    font-size: 1rem;
    color: #00ddff;
    background-color: #7700ff;
    border: solid 3px;
    border-radius: 10px;
  }

  button {
    color: #00ddff;
    background-color: #7700ff;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: solid 3px #00ddff;
    border-radius: 10px;
    // height: 2.1rem;
    cursor: pointer;

    &:hover {
      color: #7700ff;
      background-color: #00ddff;
      border: solid 3px #7700ff;
      border-radius: 11px;
      height: 2.2rem;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.2rem;
    width: 100%;
    height: 6.25rem;
    

    .item {
      margin: 0.625rem;
      padding: 0.625rem;
      border-radius: 25px;
      width: 100%;
      height: 100%;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
      }

      img {
        width: 50vmin;
        // border: 5px dashed blue;
      }

      img.gif-image {
        border-radius: 20px;
      }
    }
  }
}
</style>

