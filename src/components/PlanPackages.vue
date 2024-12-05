<template lang="pug">
  main.main
    .backdrop
    section#plans
      h1.section-title Choose Your Plan
      .plan__list
        article.plan
          h1.plan__title FREE
          h2.plan__price $0/month
          h3 For hobby projects or small teams.
          ul.plan__features
            li.plan__feature 1 Workspace
            li.plan__feature Unlimited Traffic
            li.plan__feature 10GB Storage
            li.plan__feature Basic Support
          div
            button.button CHOOSE PLAN
        article.plan.plan--highlighted
          h1.plan__annotation RECOMMENDED
          h1.plan__title PLUS
          h2.plan__price $29/month
          h3 For ambitious projects.
          ul.plan__features
            li.plan__feature 5 Workspaces
            li.plan__feature Unlimited Traffic
            li.plan__feature 100GB Storage
            li.plan__feature Plus Support
          div
            button.button CHOOSE PLAN
        article.plan
          h1.plan__title PREMIUM
          h2.plan__price $99/month
          h3 Your enterprise solution.
          ul.plan__features
            li.plan__feature 10 Workspaces
            li.plan__feature Unlimited Traffic
            li.plan__feature Unlimited Storage
            li.plan__feature Priority Support
          div
            button.button CHOOSE PLAN
    section#key-features
      h1.section-2-title Many Good Reasons to Stick Around
      ul.key-feature__list
        li.key-feature
          .key-feature__image-1
          p.key-feature__description 3,857,000 Trusting Customers
        li.key-feature
          .key-feature__image-2
          p.key-feature__description 99.999% Uptime Guarantee
        li.key-feature
          .key-feature__image-3
          p.key-feature__description Lightning Fast CDN
  </template>
  
  <script>

 export default {
  mounted() {
    console.log("PlanPackages mounted");
  }
};

  </script>
  
  <style scoped>
  
  main {
    width: 100%;
    height: 100vh;
  }

  .backdrop {
  position: fixed;
  display: none;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.7);
  }

  #plans {
    width: 100%;
    height: 33rem;
    padding: 0.6rem;
    position: relative;
    
    top: 50px;
    z-index: -1;
    /* margin-top: 50px; */
  }
  
  .section-title {
    color: #ff1b68;
    /* text-align: center; */
    /* position: relative; */
    display: flex;
    justify-content: center;
    font-size: 5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
  }
  
  .plan__list {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  
  .plan {
    background: #d5e4ff;
    text-align: center;
    padding: 1rem;
    margin: 0.5rem;
    display: inline-block;
    width: 25%;
    vertical-align: middle;
    position: relative;
    border-radius: 25px;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.5);
  }
  
  .plan--highlighted {
    background-image: linear-gradient(90deg, red, blue);
    color: white;
  }
  
  .plan__annotation {
    font-size: 1rem;
    background: rgb(255, 255, 255);
    color: blue;
    padding: 0.5rem;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  
  .plan__title {
    color: #0e4f1f;
  }
  
  .plan__price {
    color: #858585;
  }
  
  .plan--highlighted .plan__title {
    color: white;
  }
  
  .plan--highlighted .plan__price {
    color: #ffffff;
  }
  
  .plan__features {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .plan__feature {
    margin: 0.5rem 0;
  }

  .button {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(90deg, blue, red);
    padding: 0.3rem;
    border: 3px solid #282828;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #424242;
  }
  
  #key-features {
    background: #ff1b68;
    margin-top: 12.5rem;
    padding: 1rem;
    width: 100vw;
    height: 50vh;
  }
  
  #key-features .section-2-title {
    color: #ffffff;
    text-align: center;
    /* position: relative; */
    font-size: 2.5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
  }
  
  
  .key-feature__list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  
  .key-feature {
    display: inline-block;
    width: 30%;
    vertical-align: top;
  }
  
  .key-feature__image-1 {
    background-image: url(../assets/KeyFeature1.jpg);
    background-size: cover;
    width: 128px;
    height: 128px;
    border: 2px solid #424242;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }

  .key-feature__image-2 {
    background-color: rgb(100, 0, 249);
    background-image: url(../assets/KeyFeature2.jpg);
    background-size: cover;
    width: 128px;
    height: 128px;
    border: 2px solid #424242;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }

  .key-feature__image-3 {
    background-image: url(../assets/KeyFeature3.jpg);
    background-size: cover;
    width: 128px;
    height: 128px;
    border: 2px solid #424242;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }
  
  .key-feature__description {
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }
  </style>
  