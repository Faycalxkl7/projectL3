<script></script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

:root {
  --primary-color: #003b4a;
  --light-blue: #127bd1;
  --dark-gary: #2c2d3f;
  --light-gary: #757575;
  --light-green: #20c997;
  --bg: #ffffff;
  --bg-newletter: #edf2ff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}


ul {
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3 {
  color: var(--dark-gary);
}

p {
  color: var(--light-gary);
  font-size: 14px;
}
/* utility classes  */
.text-primary {
  color: var(--light-blue);
}
.btn {
  display: inline-block;
  cursor: pointer;
  padding: 10px 25px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 500;
  transition: 0.3s all ease;
}

.btn-primary {
  background-color: var(--light-blue);
  color: #fff;
}

.btn-primary:hover {
  background-color: #135fa1;
}

.btn-secondary {
  background-color: var(--dark-gary);
  color: #fff;
}

.btn-secondary:hover {
  background-color: #4c4f6a;
}

.btn-third {
  background-color: #4c4f6e;
  color: #fff;
  border: 1px solid #fff;
}

.btn-third:hover {
  background-color: var(--light-blue);
  color: #fff;
}

.btn-forth {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.btn-forth:hover {
  background-color: #fff;
  color: var(--dark-gary);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
}

.title {
  text-align: center;
}

.title h2 {
  font-size: 32px;
  max-width: 600px;
  margin: auto;
}

.title img {
  margin: 20px 0;
}

.title p {
  font-size: 16px;
  max-width: 500px;
  margin: auto;
}
/* Home start */
#home .navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

#home .navbar nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  min-height: 100px;
  padding: 0 2rem;
  margin: auto;
}

#home .navbar nav ul {
  display: flex;
}

#home .navbar nav ul a {
  margin: 0 15px;
  color: var(--dark-gary);
  font-weight: 500;
  transition: all 0.3s ease;
}

#home .navbar nav ul a:hover {
  color: var(--light-blue);
}

#home .navbar .logo {
  width: 80px;
  height: 80px;
}

#home .home-content {
  background: url("./images/img/bg-home.jpg") no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

#home .home-content .col {
  width: 1200px;
  margin: auto;
  padding: 0 2rem;
}
#home .home-content .col small {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
}

#home .home-content .col small img {
  vertical-align: middle;
}

#home .home-content .col h1 {
  font-size: 40px;
  max-width: 600px;
  line-height: 1.4;
}

#home .home-content .col p {
  margin: 10px 0 30px;
  max-width: 500px;
  line-height: 1.6;
}

#home .home-content .col a {
  margin-right: 15px;
}

/* Home end  */

/* About start */
#about,
#help,
#services {
  padding: 6rem 0;
}

#about .row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 4rem;
  margin-top: 3rem;
}

#about .row .col h3 {
  font-size: 25px;
}

#about .row .col hr {
  width: 60px;
  height: 3px;
  background-color: var(--light-blue);
  border: none;
  margin: 10px 0;
}

#about .row .col p {
  font-size: 16px;
  margin-bottom: 25px;
}

#about .row .col .list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#about .row .col .list li {
  margin-bottom: 5px;
  color: var(--light-gary);
}

#about .row .col .list li i {
  color: var(--light-blue);
  margin-right: 5px;
}
#about .row img {
  width: 100%;
}
/* About end */

/* info start */
#info,
#brand {
  background: url("./images/info-bg.jpg") no-repeat center center/cover;
  padding: 6rem 0;
  position: relative;
  z-index: 1;
  color: #fff;
}

#info::before,
#call::before,
#brand::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--light-blue);
  opacity: 0.8;
  z-index: -1;
}

#info .row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

#info .row .col {
  display: flex;
  align-items: center;
  justify-content: center;
}

#info .row .col:hover i,
footer .footer-top .row .social i:hover {
  background-color: #fff;
  color: var(--light-blue);
}

#info .row .col i {
  font-size: 40px;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-right: 20px;
  transition: 0.3s all ease;
}

#info .row .col span {
  font-size: 30px;
  font-weight: 600;
}

#info .row .col p {
  color: #fff;
}

/* info end */

/* Help start */
#help .row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  margin-top: 3rem;
  text-align: center;
}

#help .row .col {
  height: 300px;
  border: #a7a2a2 1px solid;
  border-radius: 15px;
  margin: 10px;
}

#help .row .col i {
  font-size: 40px;
  color: var(--light-blue);
  padding: 50px 0 20px;
  border-radius: 50%;
}

#help .row .col h3 {
  margin: 20px 0;
}
/* Help end */

/* call start */
#call {
  background: url(./images/call-bg.jpg) no-repeat center center/cover;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  z-index: 1;
}

#call .call-content {
  max-width: 600px;
  margin: auto;
}

#call .call-content h2 {
  font-size: 35px;
  color: #fff;
}

#call .call-content p {
  color: #fff;
  margin: 25px 0;
}

#call .call-content a {
  margin-right: 20px;
}

/* call end */

/* Services start */
#services .row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;
  margin-top: 5rem;
}

#services .row .item {
  display: flex;
}

#services .row .item i {
  font-size: 40px;
  color: var(--light-blue);
  margin-right: 20px;
}

#services .row .item h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
/* Services end */

/* brand start */
#brand .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

#brand .row img {
  max-width: 200px;
  margin-bottom: 20px;
}
/* brand start */

/* doctors start */
#doctors,
#contact {
  padding: 6rem 0;
  background-color: var(--bg);
}

#doctors .row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  column-gap: 3rem;
  text-align: center;
}

#doctors .row img {
  width: 90%;
  height: 350px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgb(14, 128, 241);
}

#doctors .row .item .item-details {
  padding: 2rem 0;
}

#doctors .row .item .item-details h3 {
  font-size: 22px;
}

#doctors .row .item .item-details p {
  margin: 10px 0 20px;
  color: var(--light-blue);
  font-weight: 500;
}

#doctors .row .item .item-details a {
  border-radius: 10px;
}
/* doctors end */

/* contact start */
#contact .row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 3rem;
  margin-top: 6rem;
}

#contact .row img {
  justify-self: end;
  max-width: 100%;
}

#contact .row .form-control input,
#contact .row .form-control select,
#contact .row textarea {
  padding: 15px;
  width: 100%;
  color: var(--light-gary);
  outline-color: var(--light-blue);
  border: 1px solid #ddd;
}

#contact .row .form-control {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
  margin-bottom: 20px;
}

#contact .row .btn {
  padding: 15px 30px;
  border: none;
  margin-top: 25px;
}

/* contact end */

#newsletter {
  padding: 5rem 0;
  background-color: var(--bg-newletter);
}

#newsletter .row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
}

#newsletter .row .col h2 {
  margin-bottom: 10px;
}

#newsletter .row form {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  column-gap: 2em;
}

#newsletter .row form input,
#newsletter .row form button {
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 10px;
}

/* Newslatter end */

/* Footer start */
/* Footer top start */
footer .footer-top {
  background-color: var(--light-blue);
  padding: 6rem 0;
}

footer .footer-top .row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr 1fr;
  column-gap: 3rem;
}

footer .footer-top .row p,
footer .footer-top .row h2,
footer .footer-top .row a,
footer .footer-top .row li,
footer .footer-top .row .col04 input::placeholder,
footer .copyright p {
  color: #fff;
}

footer .footer-top .row h2 {
  font-size: 22px;
}

footer .footer-top hr {
  width: 50px;
  height: 2px;
  border: none;
  background-color: #fff;
  margin: 10px 0 2rem;
}

footer .footer-top .row .col01 .social {
  margin-top: 30px;
}

.social i{
  font-size: 16px;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 2.3;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 10px;
  transition: 0.3s all ease;
}

footer .footer-top .row .col02 li {
  margin: 10px 0;
  transition: 0.3s all ease;
}

footer .footer-top .row .col02 i {
  margin-right: 5px;
}
footer .footer-top .row .col02 li:hover {
  transform: translateX(10px);
}

footer .footer-top .row .col03 p {
  margin-bottom: 20px;
}

footer .footer-top .row .col03 ul li {
  margin: 10px 0;
}

footer .footer-top .row .col04 {
  position: relative;
}

footer .footer-top .row .col04 input {
  padding: 15px;
  width: 100%;
  background-color: transparent;
  color: #fff;
  border: #fff solid 1px;
  border-radius: 5px;
  outline: none;
}

footer .footer-top .rows .col04 button {
  position: absolute;
  padding: 15px;
  right: 0;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

footer .footer-top .row .col04 i {
  color: var(--light-blue);
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease;
}

footer .footer-top .row .col04 i:hover {
  color: var(--dark-gary);
}
/* Footer top end */

/* copyright start  */
footer .copyright {
  padding: 2rem 0;
  text-align: center;
  background-color: #2a3946;
}
/* copyright end */
/* Footer end */

/* login start */

/* login end */
/* responsive start */
@media (max-width: 800px) {
  #home .navbar .logo {
    width: 80px;
  }

  #home .navbar nav ul a {
    margin: 0 5px;
  }
  #about .row,
  #help .row,
  #contact .row,
  #newsletter .row {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }

  #info .row,
  #services .row,
  #doctors .row,
  .footer-top .row {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }

  #contact img {
    width: 100%;
    order: 1;
  }

  #contact .row form {
    order: 2;
  }
}

@media (max-width: 650px) {
  .title h2,
  #call h2 {
    font-size: 22px;
  }

  #home .navbar nav {
    flex-direction: column;
    padding: 10px 0;
  }
  #home .home-content .col h1 {
    font-size: 32px;
  }
  #home .home-content .col a {
    margin: 10px;
  }

  #info .row {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
  #info .row .col {
    flex-direction: column;
    text-align: center;
  }

  #info .row .col i {
    margin: 0;
  }

  #services .row,
  #doctors .row,
  footer .footer-top .row {
    grid-template-columns: 1fr;
  }

  #brand .row {
    justify-content: center;
  }

  #home .home-content {
    background: url("./images/img/white.jpg") no-repeat center center/cover;
  }
}
/* responsive end */

/* keyfraes */

.login-page {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.login-page .container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.login-page .container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.login-page .container span {
  font-size: 12px;
}

.login-page .container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.login-page .container button {
  background-color: var(--light-blue);
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.login-page .container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.login-page .container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.login-page .container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.login-page .form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.login-page .sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.login-page .container.active .sign-in {
  transform: translateX(100%);
}

.login-page .sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.login-page .container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.login-page .social-icons {
  margin: 20px 0;
}

.login-page .social-icons a {
  color: var(--light-blue);
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.login-page .toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.login-page .container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.login-page .toggle {
  background-color: var(--light-blue);
  height: 100%;
  background: var(--light-blue);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.login-page .toggle h1,
p {
  color: #fff;
}
.login-page .container.active .toggle {
  transform: translateX(50%);
}

.login-page .toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.login-page .toggle-left {
  transform: translateX(-200%);
}

.login-page .container.active .toggle-left {
  transform: translateX(0);
}

.login-page .toggle-right {
  right: 0;
  transform: translateX(0);
}

.login-page .container.active .toggle-right {
  transform: translateX(200%);
}
</style>

    <!-- home start -->
 <header id="home">
      <div class="navbar">
        <nav>
          <a href="./index.html">
            <img src="./images/logo.png" class="logo"/></a>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </nav>
      </div>
      <div class="home-content">
        <div class="col">
          <small
            ><img src="./images/img/section-img.png" alt="section-img" />WE GIVE YOU
            THE BEST</small
          >
          <h1>
            We Provide <span class="text-primary">Midical</span> Services Thar
            you can <span class="text-primary">Trust!</span>
          </h1>
          <p>
            Need Professional help? Our Support staff will answer your
            questions. Visit us Now or Make an Appointment!
          </p>
          <a href="#appointment" class="btn btn-primary">Get Appointment</a>
          <a href="#contact" class="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </header>
    <!-- home end -->

    <main>
      <!-- about start -->
      <section id="about">
        <div class="container">
          <div class="title">
            <h2>We Offer Different Services To Improve Your Health</h2>
            <img src="./images/img/section-img.png" alt="section-img" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, iusto?
            </p>
          </div>
          <div class="row">
            <div class="col">
              <h3>Who We Are</h3>
              <hr />
              <p>
                We take health care personally at Medstar hospital,because
                excellence in health care is about more than just medical
                ,technology,texts and treatments.
              </p>
              <p>
                It is about really caring for people with dignity and
                respect,that what we do.we are dedicated toproviding the best
                care to meet the needs of people for our community, for our
                patient -- for you.
              </p>
              <div class="list">
                <ul>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-play"></i>Lorem ipsum dolor
                    sit.
                  </li>
                </ul>
              </div>
            </div>
            <img src="./images/img/about-img.jpeg" alt="about-img" />
          </div>
        </div>
      </section>
      <!-- about end -->
      <!-- info start -->
      <section id="info">
        <div class="container">
          <div class="row">
            <div class="col">
              <i class="fa-solid fa-house"></i>
              <div>
                <span>2142</span>
                <p>Hospital Rooms</p>
              </div>
            </div>
            <div class="col">
              <i class="fa-solid fa-user-doctor"></i>
              <div>
                <span>120</span>
                <p>Specialist Doctors</p>
              </div>
            </div>
            <div class="col">
              <i class="fa-solid fa-face-smile-beam"></i>
              <div>
                <span>4120</span>
                <p>Happy patients</p>
              </div>
            </div>
            <div class="col">
              <i class="fa-solid fa-table-list"></i>
              <div>
                <span>2</span>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- info end -->
      <!-- Help start -->
      <section id="help">
        <div class="container">
          <div class="title">
            <h2>We Are Ready To Help You &amp; your Family</h2>
            <img src="./images/img/section-img.png" alt="section-img" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, iusto?
            </p>
          </div>
          <div class="row">
            <div class="col">
              <i class="fa-solid fa-truck-medical"></i>
              <h3>Emengercy Help</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sint.
              </p>
            </div>
            <div class="col">
              <i class="fa-solid fa-heart-pulse"></i>
              <h3>Enriched Pharmacy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sint.
              </p>
            </div>
            <div class="col">
              <i class="fa-solid fa-stethoscope"></i>
              <h3>Medical Treatment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Help end-->
      <!-- call start -->
      <section id="call">
        <div class="call-content">
          <h2>Do You Need Emergency Medical Care? call +213 663201711</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            corrupti eligendi amet pariatur odio ex.
          </p>
          <a href="#" class="btn btn-third">Contact Now</a>
          <a href="#" class="btn btn-forth"
            >Learn More <i class="fa-solid fa-arrow-right-long"></i
          ></a>
        </div>
      </section>
      <!-- call end -->
      <!-- Services start -->
      <section id="services">
        <div class="container">
          <div class="title">
            <h2>We Offer Diffrent Services To Improve Your Health</h2>
            <img src="./images/img/section-img.png" alt="section-img" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, iusto?
            </p>
          </div>
          <div class="row">
            <!-- item 1 -->
            <div class="item">
              <i class="fa-regular fa-rectangle-list"></i>
              <div>
                <h3>General Treatemnt</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
            <!-- item 2 -->
            <div class="item">
              <i class="fa-solid fa-tooth"></i>
              <div>
                <h3>Teeth whtening</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
            <!-- item 3 -->
            <div class="item">
              <i class="fa-solid fa-heart-pulse"></i>
              <div>
                <h3>Heart Surgery</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
            <!-- item 4 -->
            <div class="item">
              <i class="fa-solid fa-ear-listen"></i>
              <div>
                <h3>Ear Treatemnt</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
            <!-- item 5 -->
            <div class="item">
              <i class="fa-solid fa-eye"></i>
              <div>
                <h3>Vision Problems</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
            <!-- item 6 -->
            <div class="item">
              <i class="fa-solid fa-droplet"></i>
              <div>
                <h3>Blood Trasfusion</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore deserunt, assumenda et nostrum laudantium quaerat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Services end -->
      <!-- Brand start -->
      <section id="brand">
        <div class="container">
          <div class="row">
            <img src="./images/img/brand-1.png" alt="brand1" />
            <img src="./images/img/brand-2.png" alt="brand2" />
            <img src="./images/img/brand-3.png" alt="brand3" />
            <img src="./images/img/brand-4.png" alt="brand4" />
          </div>
        </div>
      </section>
      <!-- Brand end -->
      <!-- Doctors start -->
      <section id="doctors">
        <div class="container">
          <div class="title">
            <h2>Meet Our Experience Doctors</h2>
            <img src="/images/img/section-img.png" alt="section-img" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, iusto?
            </p>
          </div>
          <div class="row">
            <!-- item 1 -->
            <div class="item">
              <img src="./images/img/doctor-1.jpg" alt="doctor-1" />
              <div class="item-details">
                <h3>Doctor Name</h3>
                <p>Surgeon</p>
                <a href="#" class="btn btn-primary">details</a>
              </div>
            </div>
            <!-- item 2 -->
            <div class="item">
              <img src="./images/img/doctor-2.jpg" alt="doctor-2" />
              <div class="item-details">
                <h3>Doctor Name</h3>
                <p>Surgeon</p>
                <a href="#" class="btn btn-primary">details</a>
              </div>
            </div>
            <!-- item 3 -->
            <div class="item">
              <img src="./images/img/doctor-3.avif" alt="doctor-3" />
              <div class="item-details">
                <h3>Doctor Name</h3>
                <p>Surgeon</p>
                <a href="#" class="btn btn-primary">details </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact start  -->
      <section id="contact">
        <div class="container">
          <div class="title">
            <h2>We Are Always Reasy To Help You. Book An Appointment</h2>
            <img src="/images/img/section-img.png" alt="section-img" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, iusto?
            </p>
          </div>
          <div class="row">
            <form>
              <div class="form-control">
                <input type="text" name="Name" placeholder="Name" required />
                <input type="email" name="email" placeholder="email" required />
              </div>
              <div class="form-control">
                <input
                  type="number"
                  name="Phone"
                  placeholder="Phone"
                  required
                />
                <select name="Departement">
                  <option value="1" selected>Departement</option>
                  <option value="2">Dental</option>
                  <option value="3">Ophthalomogy</option>
                  <option value="4">Surgey</option>
                  <option value="5">Childbirth</option>
                  <option value="6">Intensive</option>
                  <option value="7">lab</option>
                </select>
              </div>
              <div class="form-control">
                <select name="doctor">
                  <option value="1" selected>Mohamed</option>
                  <option value="2">Ali</option>
                  <option value="3">Ali</option>
                  <option value="4">Ali</option>
                  <option value="5">Ali</option>
                  <option value="6">Ali</option>
                </select>
                <input type="date" name="date" required />
              </div>
              <textarea name="Message" cols="30" rows="10">Write Yous Messages Here</textarea>
              <button type="submit" class="btn btn-primary">
                Book An Appontment
              </button>
            </form>
            <img src="./images/img/contact.jpg" alt="contact-img" />
          </div>
        </div>
      </section>
      <!-- Contact end  -->
      <!-- newsletter start -->
      <section id="newsletter">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>Sign Up For Newletter</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                debitis! Eveniet mollitia maiores odit saepe?
              </p>
            </div>
            <form>
              <input
                type="email"
                name="Email"
                placeholder="Your Email Adress"
                required
              />
              <button type="submit" class="btn btn-primary">Subscibe</button>
            </form>
          </div>
        </div>
      </section>
      <!-- newsletter start -->
      <!-- Foote start-->
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <!-- col 1 -->
              <div class="col01">
                <h2>About Us</h2>
                <hr />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  quos ducimus totam numquam. Rem dolorum vero quibusdam nemo
                  nihil animi? Optio eveniet modi cupiditate veniam.
                </p>
                <div class="social">
                  <a href="#" aria-label="visit facebook"><i class="fa-brands fa-facebook-f"></i></a>

                  <a href="#" aria-label="visit discord"><i class="fa-brands fa-discord"></i></a>

                  <a href="#" aria-label="visit twiter"><i class="fa-brands fa-x-twitter"></i></a>
                  
                  <a href="#" aria-label="visit googl+"><i class="fa-brands fa-google-plus-g"></i></a>
                </div>
              </div>
              <div class="col02">
                <h2>Quick Links</h2>
                <hr />
                <ul>
                  <li>
                    <a href="#home"><i class="fa-solid fa-caret-right"></i>Home</a>
                  </li>
                  <li>
                    <a href="#about"><i class="fa-solid fa-caret-right"></i>About</a>
                  </li>
                  <li>
                    <a href="#services"><i class="fa-solid fa-caret-right"></i>Services</a>
                  </li>
                  <li>
                    <a href="#doctors"><i class="fa-solid fa-caret-right"></i>Doctors</a>
                  </li>
                  <li>
                    <a href="#contact"><i class="fa-solid fa-caret-right"></i>Contact</a>
                  </li>
                </ul>
              </div>
              <div class="col03">
                <h2>Open Hours</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt odit explicabo praesentium? Fugiat vero nam illo fuga
                  nemo nobis commodi?
                </p>
                <ul>
                  <li>Monday - Thursday 8:00 - 20:00</li>
                  <li>Saturday 9:00 - 18:00</li>
                  <li>Friday 9:00 - 15:00</li>
                </ul>
              </div>
              <!-- col 4 -->
              <div class="col04">
                <h2>New letter</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur aliquid obcaecati maiores neque quidem reiciendis
                  dolorum. Debitis dolor veniam adipisci.
                </p>
                <form>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                  />
                  <button type="submit" aria-label="send mail">
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; All Right reserved 2024 | Made By Mohamed Ali</p>
        </div>
      </footer>
      <!-- Foote end-->
    </main>


