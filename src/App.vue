<template lang="pug">
  #app
    .background-fill
    .background-img
    .backdrop
    .modal
      h1.modal__title This feature is coming soon!
      .modal__actions
        .modal__action CLICK ANYWHERE TO RETURN
    //- Main Navigation
    nav.main-nav
      img(src="./assets/burger.png").burger
      ul.main-nav__items
        li.main-nav__item
          router-link(to="/") Packages
        li.main-nav__item
          router-link(to="/customers") Customers
        li.main-nav__item
          router-link(to="/giphy") Giphy
        li.main-nav__item.main-nav__item--cta
          router-link(to="/start-hosting") Start Hosting
    nav.mobile-nav
      ul.mobile-main-nav__items
        li.mobile-nav__item
          router-link(to="/") Packages
        li.mobile-nav__item
          router-link(to="/customers") Customers
        li.mobile-nav__item
          router-link(to="/giphy") Giphy
        li.mobile-nav__item.mobile-nav__item--cta
            router-link(to="/start-hosting") Start Hosting      
  
    //- Router View
    main
      router-view

    footer.main-footer
      nav
        ul.main-footer__links
          li.main-footer__link
            router-link(to="/support") Support
          li.main-footer__link
            router-link(to="/terms") Terms of Use
</template>

<script>

export default {
  mounted() {
  console.log("App.vue mounted");
  this.$nextTick(() => {
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.backdrop');
    const startHosting = document.querySelectorAll('.main-nav .main-nav__item.main-nav__item--cta');
    const startHostingMobile = document.querySelectorAll('.mobile-nav .mobile-nav__item.mobile-nav__item--cta');
    const closeModal = document.querySelector('.modal__action');
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavItem = document.querySelectorAll('.mobile-nav__item');

    mobileNavItem.forEach(item => {
      item.addEventListener('click', function() {
        mobileNav.style.display = 'none';
      });
    });  
    burger.addEventListener('click', function() {
      if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
      } else {
        mobileNav.style.display = 'block';
      }
     });
    
    startHosting[0].addEventListener('click', () => {
      backdrop.style.display = 'block';
      modal.style.display = 'block';
    });

    startHostingMobile.forEach(link => {
      link.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
      });
    });

    
    backdrop.addEventListener('click', () => {
      backdrop.style.display = 'none';
      modal.style.display = 'none';
      mobileNav.style.display = 'none';
      if (this.$router) {
        this.$router.push('/');
      }
    });

    // Close modal and backdrop when clicking
    modal.addEventListener('click', () => {
      backdrop.style.display = 'none';
      modal.style.display = 'none';
      if (this.$router) {
        this.$router.push('/'); // Route to PlanPackages
      }
    });

    // Ensure close button also closes modal and backdrop
    closeModal.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent reopening the modal
      backdrop.style.display = 'none';
      modal.style.display = 'none';
      if (this.$router) {
        this.$router.push('/'); // Route to PlanPackages
      }
    });
  });
}


}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  

}
body, #app {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

}
/* Add global styles here */

#app
.backdrop {
  position: fixed;
  display: none;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.7);
}

.background-fill {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(90deg, red, blue);
  opacity: 45%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -11;
}

.background-img {
  background-image: url(./assets/plans-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 70%;
  width: 100vw;
  height: 100vh;
  /* border: 5px dashed red;; */
  z-index: -12;
}

.modal {
  position: fixed;
  display: none;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  /* background: white; */
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.modal__title {
  text-align: center;
  margin: 0 0 1rem 0;
  color: white;

}

.modal__actions {
  text-align: center;
}

.modal__action {
  text-decoration: none;
  color: white;
  font: inherit;
}

.modal__action:hover,
.modal__action:active {
  background: #ff1b68;
  border-color: #ff1b68;
}

main {
  width: 100%;
  max-width: 100vw;

}

.main-nav {
  /* display: inline-block; */
  text-align: right;
  left: 0;
  right: 0;
  width: 100vw;
  height: 3.1rem;
  vertical-align: middle;
  position: fixed;
  /* background: fixed; */
  /* background-image: linear-gradient(90deg,black, blue, red, black); */
  background-color: #282828;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px black;
  z-index: 10;
}

.burger {
  position: absolute;
  left: 10px;
  right: 100px;
  height: 50px;
  z-index: 102;
  filter:invert(100%);
  
}
.main-nav__items {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 50px;
  
}

.main-nav__item {
  display: inline-block;
  margin: 15px 16px;
  
}

.main-nav__item a,
.main-nav__item router-link, 
.mobile-nav__item a,
.mobile_nav__item router-link {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  padding: 3px 0;
}

.main-nav__item a:hover,
.main-nav__item a:active,
.main-nav__item router-link:hover,
.main-nav__item router-link:active,
.mobile-nav__item a:hover,
.mobile-nav__item a:active,
.mobile-nav__item router-link:hover,
.mobile-nav__item router-link:active {
  color: #ff1b68;
  border-bottom: 5px solid white;
}

.main-nav__item--cta a,
.main-nav__item--cta router-link
.mobile-nav__item--cta a,
.mobile-nav__item--cta router-link {
  color: white;
  background: #ff1b68;
  padding: 8px 16px;
  border-radius: 8px;
}

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active,
.main-nav__item--cta router-link:hover,
.main-nav__item--cta router-link:active {
  color: #ff1b68;
  background: white;
  border: none;
}

.mobile-nav {
  display: none;
  position: fixed;
  z-index: 9;
  margin-top: 3rem;
  left: 0;
  background: #282828;
  width: 30%;
  height: 100vh;
}

.mobile-nav__items {
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  top: 20rem;
}

.mobile-nav__item {
  margin: 1rem 0;
}

.mobile-nav__item a {
  font-size: 1.5rem;
}



.main-footer {
  position: fixed;
  bottom: 0;
  background: rgb(28, 28, 28);
  padding: 12px;
  margin-top: 48px;
  color: white;
  text-decoration: none;
  width: 100%;
  max-width: 100vw;
}

.main-footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.main-footer__link {
  display: inline-block;
  margin: 0 16px;
  color: white;
  text-decoration: none;
}

.main-footer__link a,
.main-footer__link router-link {
  color: white;
  text-decoration: none;
}

.main-footer__link a:hover,
.main-footer__link a:active,
.main-footer__link router-link:hover,
.main-footer__link router-link:active {
  color: #ccc;
}
</style>
