<script>
    // Svelte does not have prefetch attribute, so it is not included
    import { onMount } from 'svelte';

  
    // Example services data
    const services = [
      { title: "Cardiac Checkups", description: "Comprehensive cardiac evaluations to assess heart health." },
      { title: "Heart Disease Treatment", description: "Personalized treatment plans for various heart conditions." },
      { title: "Echocardiography", description: "Advanced imaging techniques to diagnose heart problems." },
      { title: "Stress Testing", description: "Evaluations to assess heart function during physical activity." }
    ];
  
    // Example contact data
    const contacts = [
      { title: "Phone", value: "(123) 456-7890" },
      { title: "Email", value: "jane.doe@example.com" },
      { title: "Office Address", value: "123 Main Street, Anytown USA 12345" }
    ];
  

    
</script>
  
<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #127bd1;
    padding: 1rem;
    color: white;
    font-family:'Arial Narrow', Arial, sans-serif;
}
.header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.heart-icon {
    display: flex;
    align-items: center;
}
h1 {
font-size: 1.5rem;
}
.header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.user-info{
    display: flex;
}
.dropdown {
    position: relative;
}
.dropdown-trigger-user{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    cursor: pointer;
}
.dropdown-content-user{
    position: absolute;
    width: 150px;
    top: 100%;
    left: -50%;
    background: white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: none;
}
a{
  text-decoration: none;
  font-size: 18px;
      color: black;
}
.dropdown-content-user .h-n{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
i{
    margin-right: 10px;
}
.dropdown-trigger-user .avatar {
    margin: 20px;
    border-radius: 50%;
}
.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 13px;
    border-radius: 5px;
    margin: 0 5px;
}
.icon-button:hover{
    background-color: #e1e1e1;
}
.dropdown-trigger-user:hover + .dropdown-content-user ,
.dropdown-content-user:hover{
    display: block;
}
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    font-family:'Arial Narrow', Arial, sans-serif;
}
/*main style*/
main{
    max-width: 60vw;
    margin: 10px ;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.profile{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 0px 100px;
}
.profile .avatar i{
    font-size: 5rem;
}
ul{
    list-style: none;
}
.services ul, .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .services li, .contacts div {
    background-color: #fbfbfb;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .services h1, .contacts h1 {
    font-size: 1.8rem;
    font-weight: 650;
    margin-bottom: 0.5rem;
  }
  .services li h2, .contacts div h2 {
    font-size: 1.5rem;
    font-weight: 550;
    margin-bottom: 0.5rem;
  }

</style>

<header>
    <div class="header-left">
        <a href="/doctorspage" class="heart-icon">
          <i class="fa-regular fa-heart fa-xl" style="color: #FFFFFF;"></i>
        </a>
        <h1>Home</h1>
    </div>
    <div class="header-right">
        <div class="user-info">
        <div class="dropdown">
            <div class="dropdown-trigger-user">
                <i class="fa-regular fa-user fa-xl avatar"  style="color: #FFFFFF;"></i>
                <span>John Doe</span>
            </div>
            <div class="dropdown-content-user">
                <div class="h-n">
                    <a href="/doctorspage"><i class="fa-solid fa-house" style="color: #000000;"></i>Home</a>
                    <a href="/doctorspage/history"><i class="fa-solid fa-calendar-days" style="color: #000000;"></i>History</a>
                    <a href="/doctorspage/notification"><i class="fa-solid fa-bell"style="color: #000000;"></i>Notification</a>
                </div>
    
            </div>
        </div>
        <button class="icon-button" aria-label="Log Out">
        <i class="fa-solid fa-arrow-right-from-bracket fa-xl" style="color: #FFFFFF;"></i>
        </button>
    </div>
</header>

<div class="container">
    <main>
      <div class="profile">
        <div class="avatar">
            <i class="fa-regular fa-user fa-xl"  style="color: #000000;"></i>
        </div>

        <div class="info">
          <h1>Dr. Jane Doe</h1>
          <p>Cardiologist</p>
          <div class="about">
            <h1>About Me</h1>
            <p>
              Dr. Jane Doe is a highly experienced cardiologist with over 15 years of practice. She is dedicated to
              providing personalized and comprehensive care to her patients, helping them achieve optimal heart
              health.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div class="services">
        <h1>Services</h1>
        <ul>
          {#each services as service}
            <li>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          {/each}
        </ul>
      </div>

      <hr />

      <div class="contacts">
        <h1>Contact</h1>
        <div>
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>jane.doe@example.com</p>
        </div>
        <div>
          <h2>Office Address</h2>
          <p>123 Main Street, Anytown USA 12345</p>
        </div>
      </div>

    </main>
</div>
  
