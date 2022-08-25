<template>
  <header class="bg-image">
    <div class="overlay"></div>
    <!-- The header content -->
    <div class="container h-100">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="w-100 text-white">
          <h1 class="display-3"><span>A</span>ssociations <span>M</span>arocaines</h1>
          <br>
          <p class="lead mb-0">Une platforme pour gérer les association de région Drâa-Tafilalet</p>
          <br>
          <router-link to="/Signup" class="btn bg-white btn-lg rejoine rounded-5">Rejoignez-nous <FAIFatma   :icon="['fas' ,'angles-right']" class="icon alt" /></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: `Header`
}
</script>

<style scoped>
header {
  position: relative;
  height: 100vh;
  min-height: 40rem;
  min-width: 50%;
  overflow: hidden;
  background: url("~@/assets/images/backmain.jpg")  center center no-repeat;
  background-size: cover;
}
h1{
  font-size: 48px;

  font-weight: 700;
  line-height: 1.3;
  font-family: 'Poppins', sans-serif;
}
p{
  font-family: 'Open Sans';
  font-style: italic;
}
header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #211f24;
  opacity: 0.5;
  z-index: 1;
}
.rejoine{
  padding: 10px;
}
.rejoine:hover{
  color: black;
}

span{
  color: #FF0000;
}
svg{
  color: #FF0000;
}
</style>