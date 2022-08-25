<template>
  <nav class="navbar navbar-expand-lg navbar-fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"> <img src="~@/assets/images/assoc_logo.svg"></router-link>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarCollapse1">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse1">
        <div class="navbar-nav d-flex ms-auto">
          <router-link to="/" class="nav-item nav-link text-white"> Acceuil</router-link>
          <router-link to="/" class="nav-item nav-link text-white">Activités</router-link>
          <router-link to="/" class="nav-item nav-link text-white">Contact</router-link>
        </div>

        <form class="d-flex ms-auto mt-3 all">
          <div class="search-container me-4">
            <form action="/search" method="get">
              <input class="search expandright rounded-5" id="searchright" type="search" name="q" placeholder="Search">
              <label class="button searchbutton bg-danger text-center rounded-5 btn" for="searchright"><span class="mglass">&#9906;</span></label>
            </form>
          </div>
          <router-link to="/Login"><button type="button" class="btn btn-light me-sm-2 w-login rounded-5" id="connec">Connecter </button></router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: `Navbaruse`,
}
</script>

<style scoped>
.change_color {
  background-color:black;
}
nav{
  color:white;
  font-family: 'Poppins', sans-serif;
  background: black;
}

img {
  margin-left: 40px;
  width: 200px;
  margin-top: -23px;
}
/*.nav-link:hover {*/
/*  color: #FF0000!important;*/
/*  margin: 0 5px!important;*/
/*  transition: all .3s ease;*/
/*}*/
@media screen and (max-width:500px) {
  .searchbutton{
    display: none;
  }
  .w-login{
    margin-top: -98px;
  }
}
@media screen and (max-width:991px) {
  nav{
    background-color: black;
  }
  .all {
    flex-direction: column;
    align-items: center;
  }
  .nav-link{
    text-align: center;
  }
}
nav{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.search-container {
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  vertical-align: bottom;
}

.mglass {
  display: inline-block;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

.searchbutton {
  position: absolute;
  font-size: 22px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  margin-left: 10px;
}

.search {
  position: absolute;
  left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
  outline: none;
  border: none;
  padding: 0;
  width: 0;
  height: 38px;
  z-index: 10;
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}

.search:focus {
  width: 200px; /* Bar width+1px */
  padding: 0 16px 0 0;
}

.expandright {
  left: auto;
  right: 49px; /* Button width-1px */
}

.expandright:focus {
  padding: 0 0 0 16px;
}
.nav-link {
  border: 2px solid transparent;
  border-bottom: 2px solid #FF0000;
  margin-right: 0px;
  padding-right: 30px;
  transition: border 0.3s ease;
}

.nav-link:hover{
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid transparent;
}
@media screen and (max-width:991px) {
  .nav-link{
    border: none !important;
  }
}

</style>