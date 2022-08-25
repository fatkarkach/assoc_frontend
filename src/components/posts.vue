<template>
  <section class="section-services">

      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">Les <span>Activités</span></h2>
            <p class="description">les associations marocaines reconnues d'utilité publique présente des associations de ce type classées par domaine d'activité et ne prétend pas être exhaustive.</p>
          </div>
        </div>
      </div>

  <div class="row me-0 ">
    <div class="col-sm-6 col-md-4 col-md-4 mt-4">
      <div class="card h-100 w-cards mx-auto">
        <img src="~@/assets/images/backmain.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class="btn btn-sm btn-dark rounded-5" type="button">Plus Détails <FAIFatma   :icon="['fas' ,'circle-arrow-right']" class="icon alt read" /></button>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-md-4 mt-4">
      <div class="card h-100 w-cards mx-auto ">
        <img src="~@/assets/images/backmain.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class="btn btn-sm btn-dark rounded-5" type="button">Plus Détails <FAIFatma   :icon="['fas' ,'circle-arrow-right']" class="icon alt read" /></button>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-md-4 mt-4">
      <div class="card h-100 w-cards mx-auto">
        <img src="~@/assets/images/backmain.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class="btn btn-sm btn-dark rounded-5" type="button">Plus Détails <FAIFatma   :icon="['fas' ,'circle-arrow-right']" class="icon alt read" /></button>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
  </div>
  </div>
  <div class="col text-center">
    <router-link to="/Activites"> <button class="btn btn-dark rounded-5" id="postbtn" type="button">Plus des activités</button></router-link>
  </div>
  </section>
</template>
<script>

export default {
  name: `posts`,

}
</script>

<style scoped>
@import '../style/sectionstyle.css';
/* Style the counter cards */
section{
background-color: #f5f5f5;
}
.card {
  border-radius: 8px;
  border: 1px solid #cccccc;
  display: flex;
  box-sizing: border-box;
  transition: all linear 200ms;
  font-family: 'Poppins', sans-serif;
;
}
.card:hover{
  transform: scale(1.1);
  transition: all linear 200ms;
  z-index: 1;
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
  cursor: pointer;
}
#postbtn{
  margin-top: 80px;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  padding: 10px 20px;
}
.read{
  color: white;
}
.w-cards{
  width: 80%;
}
</style>