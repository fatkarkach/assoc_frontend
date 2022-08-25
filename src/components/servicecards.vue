<template>

    <section id="services" class="current">
      <div class="services-top">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
              <div class="services-list">
                <div class="row">
                  <div class="col-sm-6 col-md-4 col-md-4 mt-2">
                    <div class="service-block" style="visibility: visible;">
                      <FAIFatma   :icon="['fas' ,'calendar-days']" class="icon alt" />
                      <div class="text-block">
                        <div class="name">Gestion des activités</div>
                        <div class="text">Gérez des événements complexes avec différents types de tickets et des participants externes </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-md-4 mt-2">
                    <div class="service-block" style="visibility: visible;">
                      <FAIFatma   :icon="['fas' ,'users']" class="icon alt" />
                      <div class="text-block">
                        <div class="name">Gestion des adhésions</div>
                        <div class="text">Gérez des événements complexes avec différents types de tickets et des participants externes </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 col-md-4 mt-2">
                    <div class="service-block" style="visibility: visible;">
                      <FAIFatma   :icon="['fas' ,'box']" class="icon alt" />
                      <div class="text-block">
                        <div class="name">Gestion des dons</div>
                        <div class="text">l’obtention de dons susceptibles de pouvoir vous assurer un volant financier confortable pour vos projets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: `servicecards`
}
</script>

<style scoped>
section{
  background-color: #f5f5f5;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
}

#services {
  font-family: 'Poppins', sans-serif;

}
#services .services-top {
  padding: 70px 0 50px;
}
.services-list .service-block .text-block {
  margin-left: 58px;
}
.services-list .service-block .text-block .name {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}
.services-list .service-block .text-block .text {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: #051922;
  opacity: 0.75;
}
svg {
  font-size: 3em;
  font-size: 38px;
  float: left;
}

</style>