<template>
  <Navbaruse></Navbaruse>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div class="p-5 bg-image " style="
        height: 300px;
        "></div>
    <!-- Background image -->

    <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
      <div class="card-body" style="margin-bottom: 80px">
        <div class="row d-flex justify-content-center mb-4">
          <div class="col-lg-8">
            <section class="section-services">
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-md-10 col-lg-8">
                    <div class="header-section">
                      <h2 class="title">Vos <span>Informations</span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"  class="form-control" placeholder="Nom" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"   class="form-control"  placeholder="Prénom"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder="Adresse Email" />
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="password" class="form-control"  placeholder="Mode passe"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="date"  class="form-control"  placeholder="Date de naissance"/>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text"  class="form-control"  placeholder="Adresse"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Choisir une Ville</option>
                      <option value="Tanger">Tanger</option>
                      <option value="Zagora">Zagora</option>
                      <option value="Safi">Safi</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="tel"  class="form-control"  placeholder="Téléphone"/>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <div class="form-outline">
                    <input type="text"  class="form-control"  placeholder="CIN"/>
                  </div>
                </div>

                <section class="section-services">
                  <div class="container">
                    <div class="row justify-content-center text-center">
                      <div class="col-md-10 col-lg-8">
                        <div class="header-section">
                          <h2 class="title">Types <span>d'adhésions</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!--type d'abbonemment-->
              <div class="d-flex justify-content-center" id="type">
                <div class="form-outline">
                  <button type="button" class="btn btn-dark" @click="addmodalassoc(true)">Association</button>
                  <button type="button" class="btn btn-danger" @click="addmodalmembre(true)">Membre</button>
                  <button type="button" class="btn btn-dark" @click="addmodalorga(true)">Autre organisation</button>
                </div>
              </div>
              <!--type association-->
              <div v-if="showAddassoc">
              <div class="row" style="margin-top: 80px">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text"  class="form-control" placeholder="Nom d'association" />
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="email"  class="form-control" placeholder="Adresse Email d'association" />
                </div>
              </div>
              </div>
                <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text"  class="form-control"  placeholder="Adresse d'association"/>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="tel"  class="form-control"  placeholder="Téléphone d'association"/>
                </div>
              </div>
                </div>
                  <div class=" mb-4">
                    <div class="form-outline">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Choisir un domaine</option>
                        <option value="Sport">Sport</option>
                        <option value="culture,spectalcles et activités artistiques">culture,spectalcles et activités artistiques</option>
                        <option value="Action social,humanitaire et caritative,hébergement social,médico-social,santé">Action social,humanitaire et caritative hébergement social,médico-social,santé</option>
                        <option value="défense de causes de droits d'intérêts">défense de causes de droits d'intérêts</option>
                        <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                        <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                        <option value="Gestion des services économiques et dévloppement local">Gestion des services économiques et dévloppement local</option>
                      </select>
                    </div>
                  </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <textarea class="form-control" rows="3" placeholder="Objective d'association"></textarea>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <textarea class="form-control" rows="3" placeholder="Information d'association"></textarea>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="file"  class="form-control"  placeholder="Entrez votre logo"/>
                  </div>
                </div>
              </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <a class="text-danger ">Connecter</a></small>
                </div>
              </div>
              <!-- type membres -->
              <div v-if="showuaddmembre">
              <div class="mb-4">
                <div class="form-outline" style="margin-top: 80px">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Choisir une association</option>
                    <option value="Fahd">Fahd</option>
                    <option value="housin">housin</option>
                    <option value="fatma">fatma</option>
                  </select>
                </div>
              </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <a class="text-danger ">Connecter</a></small>
                </div>
              </div>

              <!-- type organization -->
              <div v-if="showuaddorga">
                <div class="row" style="margin-top: 80px">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control" placeholder="Nom d'organisation" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="email"  class="form-control" placeholder="Adresse Email d'organisation" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  class="form-control"  placeholder="Adresse d'organization"/>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="tel"  class="form-control"  placeholder="Téléphone d'organisation"/>
                    </div>
                  </div>
                </div>
                <div class=" mb-4">
                  <div class="form-outline">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Choisir un domaine</option>
                      <option value="Sport">Sport</option>
                      <option value="culture,spectalcles et activités artistiques">culture,spectalcles et activités artistiques</option>
                      <option value="Action social,humanitaire et caritative,hébergement social,médico-social,santé">Action social,humanitaire et caritative hébergement social,médico-social,santé</option>
                      <option value="défense de causes de droits d'intérêts">défense de causes de droits d'intérêts</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Enseignement,formation et recherche nom médicale">Enseignement,formation et recherche nom médicale</option>
                      <option value="Gestion des services économiques et dévloppement local">Gestion des services économiques et dévloppement local</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Objective d'organisation"></textarea>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <textarea class="form-control" rows="3" placeholder="Information d'organisation"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row mb-3 px-3">
                  <button type="submit" class="btn btn-blue text-center bg-danger text-white">Inscrire</button>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">Vous avez déja un compte? <a class="text-danger ">Connecter</a></small>
                </div>
              </div>
              <!-- Submit button -->


              <!-- Register buttons -->

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
  <footer class="footer-section">
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbaruse from "@/components/Navbaruse";
import Footer from "@/components/Footer";
export default {
  name: `Signup`,
  components: {
    Navbaruse,
    Footer,
  },
  data(){
    return {
      showAddassoc:false,
      showuaddmembre:false,
      showuaddorga:false,
    }
    },
  methods: {
    addmodalassoc(val) {
      this.showAddassoc = val;
      this.showuaddmembre = false;
      this.showuaddorga=false
    },
    addmodalmembre(val) {
      this.showuaddmembre = val;
      this.showAddassoc = false;
      this.showuaddorga=false
    },
    addmodalorga(val) {
      this.showuaddorga = val;
      this.showAddassoc = false;
      this.showuaddmembre = false;
    },
  }
}
</script>

<style scoped>
.p-5.bg-image{
  background-image: url("~@/assets/images/signup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

}
.section-services {
  padding-top: 110px;
  padding-bottom: 120px;
  color: black;

}

.section-services .header-section {
  margin-bottom: 35px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: #FF0000;
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: #FF0000;
}

.section-services .header-section .title span {
  color: #FF0000;
}
.section-services {
  padding: 40px 40px 25px;
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services{
  padding: 30px 40px 40px;
}
.section-services .single-service .part-2 a {
  color: black;
  font-size: 14px;
  text-decoration: none;
}
h2.title {
  color: black;
}
.section-services .header-section {
  color: black;
}
h2.title {
  margin-top: 40px;
}
.footer-section {
  background: #24252a;
  position: relative;
}
.p-5.bg-image {
  margin-top: 54px;
}
#type{
  margin: auto;
}
.card {
  margin-bottom: 80px;
}
button{
  margin-left: 10px;
}
@media screen and (max-width: 600px) {
button{
  margin-top: 5px;
}
  h2{
    font-size: 17px;
  }
}
</style>