
<script>

    let services = [
      { title: "Routine Checkup", price: "75DA", description: "Regular checkup to monitor your overall health and well-being.", date: "June 15, 2023" },
      { title: "Flu Shot", price: "25DA", description: "Get your annual flu shot to stay healthy during the winter.", date: "November 10, 2022" },
      { title: "Skin Cancer Screening", price: "150DA", description: "Comprehensive skin examination to detect any signs of skin cancer.", date: "August 20, 2022" },
      { title: "Allergy Testing", price: "100DA", description: "Comprehensive allergy testing to identify any potential triggers.", date: "April 5, 2022" },
      { title: "Annual Physical", price: "200DA", description: "Comprehensive physical examination to assess your overall health.", date: "January 15, 2022" },
      { title: "Diabetes Screening", price: "80DA", description: "Comprehensive screening to check for signs of diabetes.", date: "October 1, 2021" },
    ];
</script>

<header>
  <div class="header-left">
    <a href="/doctorspage/history" class="heart-icon">
      <i class="fa-regular fa-heart fa-xl" style="color: #FFFFFF;"></i>
    </a>
    <h1>History</h1>
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
                <a href="/doctorspage/notification"><i class="fa-solid fa-bell" style="color: #000000;"></i>Notification</a>
              </div>

          </div>
    </div>
    <button class="icon-button" aria-label="Log Out">
      <i class="fa-solid fa-arrow-right-from-bracket fa-xl" style="color: #FFFFFF;"></i>
    </button>
  </div>
</header>


<main>
  <div class="container">
    <div class="search-and-filters">
      <div class="search">
          <i class="fa-solid fa-magnifying-glass search-icon" style="color: #000000;"></i>
        <input type="text" placeholder="Search services..." />
      </div>
      <div class="filters">
        <div class="dropdown">
          <button class="dropdown-trigger">
              <i class="fa-solid fa-filter" style="color: #000000;"></i>
              Filter
          </button>
          <div class="dropdown-content">
            <label for="sort">Sort by</label>
            <hr>
            <div>
              <input type="radio" id="date" name="sort" value="date" checked />
              <label for="date">Date</label>
            </div>
            <div>
              <input type="radio" id="type" name="sort" value="type" />
              <label for="type">Type</label>
            </div>
            <div>
              <input type="radio" id="price" name="sort" value="price" />
              <label for="price">Price</label>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropdown-trigger">
              <i class="fa-solid fa-tag" style="color: #000000;"></i>
              Price Range
          </button>
          <div class="dropdown-content">
            <label for="">Price Range</label>
            <hr>
            <div>
              <input type="checkbox" id="0-50" value="0-50" />
              <label for="0-50">0DA - 50DA</label>
            </div>
            <div>
              <input type="checkbox" id="50-100" value="50-100" />
              <label for="50-100">50DA - 100DA</label>
            </div>
            <div>
              <input type="checkbox" id="100-200" value="100-200" />
              <label for="100-200">100DA - 200DA</label>
            </div>
            <div>
              <input type="checkbox" id="200+" value="200+" />
              <label for="200+">+200DA</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="services-grid">
      {#each services as service}
        <div class="card">
          <div class="card-content">
            <div class="card-header">
              <h3>{service.title}</h3>
              <div class="price">{service.price}</div>
            </div>
            <p>{service.description}</p>
            <div class="card-footer">
              <div class="date">{service.date}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="pagination">
      <a href="/doctors" class="page-link">Previous</a>
      <a href="/doctors" class="page-link">1</a>
      <a href="/doctors" class="page-link active">2</a>
      <a href="/doctors" class="page-link">3</a>
      <span class="ellipsis">...</span>
      <a href="/doctors" class="page-link">Next</a>
    </div>
  </div>
</main>


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
  .dropdown-trigger-user{
      display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    cursor: pointer;
  }
  .dropdown-content-user{
      position: absolute;
      z-index: 10;
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
  .avatar {
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
  main {
    margin: 2rem;
  }
  .container {
    max-width: 1200px;
    margin: 0;
    font-family:'Arial Narrow', Arial, sans-serif;
  }
  .search-and-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 5rem;
    margin-bottom: 1rem;
  }
  .search {
    width: 65vw;
    position: relative;
  }
  .search input {
    width: 100%;
    height: 40px;
    padding: 0.7rem 1rem 0.7rem 2.5rem;
    border-radius: 7px;
    border: 1px solid #ccc;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }
  .filters {
    display: flex;
    gap: 1rem;
    font-family:'Arial Narrow', Arial, sans-serif;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1rem;
    border: 1px solid #ccc;
    border-radius: 7px;
    background: none;
    cursor: pointer;
  }
  .dropdown-content {
    position: absolute;
    width: 150px;
    top: 110%;
    left: -50%;
    background: white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: none;
  }
  .dropdown-trigger:hover + .dropdown-content,
  .dropdown-content:hover{
    display: block;
  }
  .dropdown-trigger-user:hover + .dropdown-content-user,
  .dropdown-content-user:hover{
    display: block;
  }
  .services-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .card-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .price {
    color: #127bd1;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }
  .page-link {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
  }
  .page-link.active {
    background-color: #127bd1;
    color: white;
  }
  .ellipsis {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
</style>
  