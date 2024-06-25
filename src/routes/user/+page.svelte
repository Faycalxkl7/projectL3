<script>

</script>
  
  <div class="container">
    <header>
      <h1>Appointment Dashboard</h1>
      
      <div class="header-right">
        <div class="user-info">
        <div class="dropdown">
            <div class="dropdown-trigger-user">
                <i class="fa-regular fa-user fa-xl avatar"  style="color: #FFFFFF;"></i>
                <span>John Doe</span>
            </div>
            </div>
        </div>
        <button class="icon-button" aria-label="Log Out">
        <i class="fa-solid fa-arrow-right-from-bracket fa-xl" style="color: #FFFFFF;"></i>
        </button>
    </header>
    <main class="main">
        <div class="section">
            <section class="table">
                <div class="card">
                  <div class="card-header">
                    <h2>Appointment History</h2>
                  </div>
                  <div class="card-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Service</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>June 1, 2023</td>
                          <td>Haircut</td>
                        </tr>
                        <tr>
                          <td>June 15, 2023</td>
                          <td>Massage</td>
                        </tr>
                        <tr>
                          <td>May 20, 2023</td>
                          <td>Facial</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
        
              <section class="services">
                <div class="card">
                  <div class="card-header">
                    <h2>Services</h2>
                  </div>
                  <div class="card-content">
                        <div class="group">
                            <div class="service">
                                <h3>Haircut</h3>
                                <p>Get a stylish haircut from our experienced stylists.</p>
                                <div class="info">
                                  <span>price :</span>
                                  <span>25 DA</span>
                                </div>
                              </div>
                              <div class="service">
                                <h3>Massage</h3>
                                <p>Relax and unwind with a soothing massage.</p>
                                <div class="info">
                                  <span>price :</span>
                                  <span>60 DA</span>
                                </div>
                              </div>
                        </div>
                        <div class="group">
                            <div class="service">
                                <h3>Facial</h3>
                                <p>Rejuvenate your skin with a luxurious facial treatment.</p>
                                <div class="info">
                                  <span>price :</span>
                                  <span>45 DA</span>
                                </div>
                              </div>
                              <div class="service">
                                <h3>Manicure</h3>
                                <p>Get your nails groomed and polished to perfection.</p>
                                <div class="info">
                                  <span>price :</span>
                                  <span>20 DA</span>
                                </div>
                              </div>
 
                    </div>
                  </div>
                </div>
              </section>
        </div>

      
      <section class="section small">
        <div class="card">
          <div class="card-header">
            <h2>Schedule Appointment</h2>
          </div>
          <div class="card-content">
            <form>
              <select class="select">
                <option value="" disabled selected>Select Service</option>
                <option value="haircut">Haircut</option>
                <option value="massage">Massage</option>
                <option value="facial">Facial</option>
                <option value="manicure">Manicure</option>
              </select>

              <div class="date">
                <label for="date">Date :</label>
                <input type="date" name="date" placeholder="Enter date" required>
            </div>

            <div class="time">
                <label for="time">Time :</label>
                <input type="time" name="time" placeholder="Enter time" required>
            </div>

            <div class="address">
                <label for="address">address :</label>
                <input type="address" name="address" placeholder="Enter address" required>
            </div>

            <textarea name="discription" cols="30" rows="10" placeholder="Write Yous discription Here"></textarea>

              <button type="submit" class="btn">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
  
  <style>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
header {
    background-color: #007bff;
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header h1 {
    font-size: 1rem;
}
.header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.user-info{
    display: flex;
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
.avatar{
    margin: 0 5px;
}


.main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
}
.section{
    display: flex;
    justify-content: space-between;
}
.table{
    width: 60vw;
}
table{
    border-collapse: collapse;
}
td, th {
  text-align: left;
  padding: 10px;
}
.card {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.card-header {
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}
.card-header h2 {
    margin: 0;
    font-size: 1.25rem;
}
.card-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
}
.group{
    display: flex;
    gap: 1.5rem;
}
.service{
    display: flex;
    flex-direction: column;
    width: 180px;
}
.service h3 {
    font-size: 1.25rem;
    font-weight: bold;
}
.service p {
    color: #6c757d;
}
.info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
}
form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.select {
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
}
input{
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
}

button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
}
button.btn {
    background-color: #007bff;
    color: white;
    border: 1px solid transparent;
}
textarea{
    padding: 15px;
    width: 100%;
    border: 1px solid #ddd;
}
  </style>
  