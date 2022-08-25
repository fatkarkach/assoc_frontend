<template>
  <Navbaruse></Navbaruse>
  <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-lg-5 mx-auto mt-xl-5 ">
    <div class="card card0 border-0">
      <div class="row d-flex">
        <div class="col-lg-6" id="back">
          <div class="card1 pb-5">
            <div class="row">

            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card2 card border-0 px-4 py-5">
            <img src="~@/assets/images/logoassoc.svg" class="logo">
            <div class="row px-3">
              <label class="mb-1"><h6 class="mb-0 text-sm">Adresse Email</h6></label>
              <input class="mb-4" type="text" name="email" placeholder="Entrer Adresse Email">
            </div>
            <div class="row px-3">
              <label class="mb-1"><h6 class="mb-0 text-sm">Mode passe</h6></label>
              <input type="password" name="password" placeholder="Entrer mode passe">
            </div>
            <div class="row mb-3 px-3">
              <button type="submit" class="btn btn-blue text-center bg-danger">Login</button>
            </div>
            <div class="row mb-4 px-3">
              <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer-section">
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbaruse from "@/components/Navbaruse";
import Footer from "@/components/Footer";
export default {
  name: `Login`,
  components:{
    Navbaruse,
    Footer,
  }


}

</script>
<style scoped>

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}
.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #BDBDBD;
  opacity: 1;
  font-weight: 300
}

:-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}

::-ms-input-placeholder {
  color: #BDBDBD;
  font-weight: 300
}

input, textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2C3E50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus, textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304FFE;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1A237E;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }
  .card2 {
    border-top: 1px solid #EEEEEE !important;
    margin: 0px 15px;
  }
  div#back{
    display: none;
  }
}

div#back {
  background-image: url("~@/assets/images/solid.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.footer-section {
  background: #24252a;
  position: relative;
}

</style>