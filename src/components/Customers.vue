<template lang="pug">
main
  div
    h1.customer-title Our Customers
    // Customer 1
    .testimonial#customer-1
      .testimonial__image-container
        img.testimonial__image(src="../assets/customer-1.jpg" alt="Mike Statham - Customer")
      .testimonial__info
        h1.testimonial__name Mike Statham
        h2.testimonial__subtitle
          | Founder of 
          a(href="tech-analysis.com") tech-analysis.com
        p.testimonial__text uHost helped me realize my project with a highly constrained budget in like no time.
    
    // Customer 2
    .testimonial#customer-2
      .testimonial__info
        h1.testimonial__name John Mellow
        h2.testimonial__subtitle Hosts his private videos on uHost.
        p.testimonial__text 
          | I worked as a blogger and always looked for an integrated hosting and file storage solution. 
          | I found it in uHost!
      .testimonial__image-container
        img.testimonial__image(src="../assets/customer-2.jpg" alt="John Mellow - Customer")

</template>
  
  <script>
  export default {
    name: "PackagesPage",
  };
  </script>
  
  <style scoped>
  * {
      box-sizing: border-box;
  }

  main {
    width: 100%;
    height: 100vh;
  }

  .customer-title {
    margin-top: 100px;
    color: #ff1b68;
    /* text-align: center; */
    /* position: relative; */
    display: flex;
    justify-content: center;
    font-size: 80px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
  }

  .testimonial {
    font-size: 1.2em;
    margin: 3rem 0;
    padding: 0px 10px;
  }
  
  .testimonial__list {
    width: 80%;
    margin: auto;
  }
  
  .testimonial:first-of-type {
    margin-top: 6rem;
  }

  .testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 8px 5px rgba(0,0,0,0.3);
    border-radius: 35px;
    overflow: hidden;
  }

  .testimonial__image {
    width: 100%;
    vertical-align: top;
  }
  
  .testimonial__info {
    text-align: right;
    padding: 0.9rem;
    display: inline-block;
    vertical-align: middle;
    width: 30%;
  }
  
  #customer-2.testimonial {
    text-align: right;
  }
  
  #customer-2 .testimonial__info {
    text-align: left;
  }
  
  .testimonial__name {
    margin: 0.2rem;
    color: #ff5454;
    font-size: 2em;
  }
  
  .testimonial__subtitle {
    margin: 0;
    font-size: 1.1rem;
    color: #ccc;
  }
  
  .testimonial__subtitle a {
    color: inherit;
    text-decoration: none;
  }
  
  .testimonial__subtitle a:hover,
  .testimonial__subtitle a:active {
    color: #7a7a7a;
  }
  
  .testimonial__text {
    margin: 0.2rem;
  }
  
  

  </style>
  