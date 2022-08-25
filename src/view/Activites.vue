<template>
  <Navbar></Navbar>
<Header></Header>
  <section class="section-services">

    <div class="row justify-content-center text-center">
      <div class="col-md-10 col-lg-8">
        <div class="header-section">
          <h2 class="title">Plus <span>Activités</span></h2>
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
  </section>

  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  name: `Activites`,
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style scoped>
@import '../style/sectionstyle.css';
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif;
;
}

.read{
  color: white;
}
.w-cards{
  width: 80%;
}
</style>