<script>
        let val = true;
    function down() {
        val = !val;
    }
    import Modal from '$lib/components/Modal.svelte';
    let showModal = false;

    function openModal() {
        showModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        showModal = false;
    }

    import { writable, derived } from 'svelte/store';



    let doctors = writable([
        {
            id: 1,
            name: 'Dr. John Doe',
            email: 'john.doe@example.com',
            phone: '555-1234',
            specialty: 'Cardiology',
            services: [1, 3, 5]
        },
        {
            id: 2,
            name: 'Dr. Jane Smith',
            email: 'jane.smith@example.com',
            phone: '555-5678',
            specialty: 'Dermatology',
            services: [2, 4, 6]
        },
        {
            id: 3,
            name: 'Dr. Michael Johnson',
            email: 'michael.johnson@example.com',
            phone: '555-9012',
            specialty: 'Pediatrics',
            services: [1, 2, 3]
        }
    ]);
    let services = writable([
        {
            id: 1,
            name: 'Consultation',
            description: 'Initial consultation with the doctor',
            price: 50
        },
        {
            id: 2,
            name: 'Examination',
            description: 'Comprehensive physical examination',
            price: 75
        },
        { id: 3, name: 'Procedure', description: 'Minor medical procedure', price: 100 },
        { id: 4, name: 'Treatment', description: 'Ongoing treatment plan', price: 150 },
        { id: 5, name: 'Therapy', description: 'Physical or occupational therapy', price: 80 },
        { id: 6, name: 'Imaging', description: 'X-ray, MRI, or other imaging services', price: 200 }
        
    ]);
    let searchTerm = writable('');
    let selectedDoctor = writable(null);
    let selectedService = writable(null);
    const filteredDoctors = derived([doctors, searchTerm], ([$doctors, $searchTerm]) =>
        $doctors.filter((doctor) => doctor.name.toLowerCase().includes($searchTerm.toLowerCase()))
    );
    const filteredServices = derived([services, searchTerm], ([$services, $searchTerm]) =>
        $services.filter((service) =>
            service.name.toLowerCase().includes($searchTerm.toLowerCase())
        )
    );
    const handleDoctorDelete = (id) => {
        if (confirm('Are you sure you want to delete this doctor?')) {
            doctors.update((d) => d.filter((doctor) => doctor.id !== id));
            alert('Doctor deleted successfully');
        }
    };
    const handleServiceDelete = (id) => {
        if (confirm('Are you sure you want to delete this service?')) {
            services.update((s) => s.filter((service) => service.id !== id));
            alert('Service deleted successfully');
        }
    };

    const handleServiceUnassign = (doctorId, serviceId) => {
        doctors.update((d) =>
            d.map((doctor) =>
                doctor.id === doctorId
                    ? { ...doctor, services: doctor.services.filter((id) => id !== serviceId) }
                    : doctor
            )
        );
        alert('Service unassigned successfully');
    };
</script>

<div class="container">
    <main class="main">
        <div class="section">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Doctor Accounts</h2>
                <button class="button" on:click={openModal}>Add Doctor</button>
            </div>

            <div class="content">
                <div style="margin-top: 16px;">
                    <input
                        type="search"
                        placeholder="Search doctors..."
                        on:input={(e) => searchTerm.set(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $filteredDoctors as doctor}
                            <tr>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <button
                                        class="button-outline"
                                        on:click={() => selectedDoctor.set(doctor)}>Edit</button
                                    >
                                    <button
                                        class="button-outline"
                                        on:click={() => handleDoctorDelete(doctor.id)}
                                        >Delete</button
                                    >
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="section">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Services</h2>
                <button class="button">Add Service</button>
            </div>
            <div class="content">
                <div style="margin-top: 16px;">
                    <input
                        type="search"
                        placeholder="Search services..."
                        on:input={(e) => searchTerm.set(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $filteredServices as service}
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td>${service.price}</td>
                                <td>
                                    <button
                                        class="button-outline"
                                        on:click={() => selectedService.set(service)}>Edit</button
                                    >
                                    <button
                                        class="button-outline"
                                        on:click={() => handleServiceDelete(service.id)}
                                        >Delete</button
                                    >
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <section class="section">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Service Assignments</h2>
            </div>
            <div class="content">
                <table>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Services</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each $doctors as doctor}
                            <tr>
                                <td class="doctor-name assignment">{doctor.name}</td>
                                <td>
                                    {#each doctor.services as serviceId}
                                        <div class="service-item">
                                            Consultation
                                            <button
                                                class="button-outline"
                                                on:click={() =>
                                                    handleServiceUnassign(doctor.id, serviceId)}
                                            >
                                                Unassign
                                            </button>
                                        </div>
                                    {/each}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <button on:click={openModal}>Open Dialog</button>

            <Modal isOpen={showModal} on:dialogClose={closeModal}>
                <div class="all">
                    <div class="title">
                        <h2>Create Doctor Account</h2>
                        <p>Fill out the form to create a new doctor account.</p>
                    </div>
                    <form action="">
                        <div class="group">
                            <div class="info">
                                <label for="name">Doctor Name</label>
                                <input type="text" name="name"  placeholder="Enter your name">
                            </div>
                
                            <div class="info">
                                <label for="name">Specialty</label>
                                <input type="text" name="Specialty"  placeholder="Enter your Specialty">
                            </div>
                        </div>
                        <div class="group">
                            <div class="info">
                                <label for="email">Email</label>
                                <input type="email" name="email"  placeholder="Enter your Email">
                            </div>
                
                            <div class="info">
                                <label for="Username">Username</label>
                                <input type="text" name="Username"  placeholder="Enter your Username">
                            </div>
                        </div>
                        <div class="group">
                        
                            <div class="info">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password"  placeholder="Enter your password">
                            </div>
                
                            <div class="info">
                                <label for="phone_number">Phone Number</label>
                                <input type="number" name="phone_number"  placeholder="Enter your phone_number">
                            </div>
                        </div>
                        <div class="group">
                            <div class="sex">
                                <p>Sex:</p>
                                <input type="radio" id="male" name="sex" value="male" >
                                <label for="male">male</label>
                                <input type="radio" id="female" name="sex" value="female" >
                                <label for="female">female</label>
                            </div>
                
                            <div class="info">
                                <label for="address">Address</label>
                                <input type="text" name="address"  placeholder="Enter your address">
                            </div>
                        </div>
                
                        <div class="schedule">
                            <h1>Schedule:</h1>
                            {#each ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as day}
                              <div class="day">
                                <h2>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
                                <div class="time">
                                  <div>
                                    <label for={day + '_start'}>start of day :</label>
                                    <input type="time" id={day + '_start'} >
                                  </div>
                                  <div>
                                    <label for={day + '_end'}>end of day :</label>
                                    <input type="time" id={day + '_end'} >
                                  </div>
                                </div>
                              </div>
                            {/each}
                        </div>
                        <div class="services">
                            <button on:click={down} class="select-btn" id="select">
                                <span>Select services</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul class:hide={val} class:show={!val} class="list-items">
                                <li class="item">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                    <label for="vehicle1"> I have  bike</label>
                                </li>
                                <li class="item">
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike">
                                    <label for="vehicle2"> I have  bike</label>
                                </li>
                                <li class="item">
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike">
                                    <label for="vehicle3"> I have  bike</label>
                                </li>
                                <li class="item">
                                    <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike">
                                    <label for="vehicle4"> I have  bike</label>
                                </li>
                                <li class="item">
                                    <input type="checkbox" id="vehicle5" name="vehicle5" value="Bike">
                                    <label for="vehicle5"> I have  bike</label>
                                </li>
                                <li class="item">
                                    <input type="checkbox" id="vehicle6" name="vehicle6" value="Bike">
                                    <label for="vehicle6"> I have  bike</label>
                                </li>
                            </ul>
                        </div>
                        <div class="btn">
                            <button type="submit"
                             class="submit">Create Account</button>
                        </div>
                    </form>
                </div>
            </Modal> 
        </section>
    </main>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
        overflow: auto;
    }

    .section h2 {
        margin-bottom: 10px;
        font-size: 18px;
    }
    .section table {
        width: 100%;
        border-collapse: collapse;
    }
    .section table th,
    .section table td {
        padding: 1rem;
    }

    .section table tbody tr:not(:last-child) {
        border-bottom: 1px solid #e5e7eb;
    }

    .section table th {
        text-align: left;
        color: #71717a;
        font-weight: 500;
    }

    .section table tbody tr td:first-child {
        font-weight: 500;
    }

    .section table thead tr {
        border-bottom: 1px solid #e5e7eb;
    }

    .section table tr:hover {
        background-color: #f9f9f9;
    }

    .button {
        display: inline-block;
        outline: 0;
        cursor: pointer;
        text-align: center;
        border: 0;
        padding: 7px 0.75rem;
        min-height: 36px;
        height: 2.25rem;
        min-width: 36px;
        color: #fafafa;
        background: #008060;
        border-radius: calc(0.5rem - 2px);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        box-shadow:
            rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
            rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
    }
    .button:disabled {
        background-color: #ccc;
    }
    .button:hover {
        background: #006e52;
    }
    .button-outline {
        font-weight: 500;
        padding: 8px 12px;
        background-color: white;
        border: 1px solid #e4e4e7;
        border-radius: 4px;
        cursor: pointer;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .button-outline:disabled {
        color: #ccc;
        border-color: #ccc;
    }
    .button-outline:hover {
        background-color: #f4f4f5;
    }

    .content {
        margin-bottom: 20px;
        margin-top: 1rem;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow:
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    input[type='search'] {
        padding: 0.5rem 2rem;
        width: 100%;
        margin-bottom: 1rem;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #e4e4e7;
        appearance: none;
        border-radius: 4px;
        transition:
            border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
    }
    input[type='search']:focus {
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }

    h2 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
    }
    .service-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .doctor-name {
        display: flex;
        align-items: flex-start;
    }
    /*form stayl*/
    .all{
        width: 50vw;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border:1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        font-family:'Arial Narrow', Arial, sans-serif;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 2rem;
    }  
    .group{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .info{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 18px;
    }
    .info input{
        min-width: 250px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;

    }
    .select-btn{
        background-color: #ffffff;
        width: 300px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        border: 2px solide rgb(154, 10, 10);
        border-radius: 10px;
        position: relative;
        font-size: 18px;
    }
    button{
        border: none;
        cursor: pointer;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 10px;
    }
    .services{
        margin: auto;
        position: relative;
    }
    .list-items{
        position: absolute;
        width: 300px;
        top: 110%;
        background: white;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        margin: 0;
        padding: 0;
    }
    .hide{
        display: none;
    }
    .show{
        display: block;
    }
    .list-items li{
        padding: 10px;
    }
    .schedule{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
        margin-bottom: 50px;
    }
    .day{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 10px;
        border-bottom:1px solid black;
    }
    .day .time{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .day .time div{
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    .day .time div input{
        width: 120px;
        height: 30px;
    }
    .btn{
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .submit{
        background-color: #000000;
        color:#FFFFFF;
        padding: 15px 20px;
        border-radius: 5px;
        margin: 20px;
        font-size: 16px;
    }
</style>
