<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FAIFatma   :icon="['fas' ,'location-dot']" class="icon alt" />
              <div class="cta-text">
                <h4>Trouve nous</h4>
                <span>139 Hay Mohammadi, Ouarzazate 45 000, Maroc</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FAIFatma   :icon="['fas' ,'phone']" class="icon alt" />
              <div class="cta-text">
                <h4>Appelez-nous</h4>
                <span>(00) 212673396077</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FAIFatma   :icon="['fas' ,'envelope']" class="icon alt" />
              <div class="cta-text">
                <h4>Email</h4>
                <span>contact@elmouatasimaicenter.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <router-link to="/"><img src="~@/assets/images/assoc_logo.svg" class="img-fluid" alt="logo"></router-link>
              </div>
              <div class="footer-text">
                <p>Une platforme qui gérent  les association de région <br>Drâa-Tafilalet.</p>
              </div>
              <div class="footer-social-icon">
                <span> Suivez-nous</span>
                <router-link to="/"><FAIFatma   :icon="['fab' ,'facebook']" class="icon alt" /></router-link>
                <router-link to="/"><FAIFatma   :icon="['fab' ,'twitter']" class="icon alt" /></router-link>
                <router-link to="/"><FAIFatma   :icon="['fab' ,'linkedin']" class="icon alt" /></router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Liens utiles</h3>
              </div>
              <ul>
                <router-link to="/"> <li>Acceuil</li></router-link>
                <router-link to="/"> <li>Activités</li></router-link>
                <router-link to="/"><li>Contact</li></router-link>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div class="footer-text mb-25">
                <p>Ne manquez pas de vous abonner à nos nouveaux flux, veuillez remplir le formulaire ci-dessous.</p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Adresse Email">
                  <button><FAIFatma   :icon="['fas' ,'envelope']" class="icon alt" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text text-center">
              <p>Copyright &copy; 2022, All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: `Footer`
}
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #FF0000;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li :hover{
  color: #FF0000;
}
.footer-widget ul li  {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  padding: 13px 20px;
  top: 0;
}
.copyright-area{
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover {
  color: #FF0000;
}
.footer-menu li  {
  font-size: 14px;
  color: #878787;
}
.footer-section {
  background: #24252a;
  position: relative;
}
svg{
  color: #FF0000;
}
</style>