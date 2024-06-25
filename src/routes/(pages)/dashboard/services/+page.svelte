<script>
    import { writable, derived } from 'svelte/store';

    import Modal from '$lib/components/Modal.svelte';
    let showModal = false;

    let val = true;
    function down() {
        val = !val;
    }

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
    let selectedService = writable(null);

    const filteredServices = derived([services, searchTerm], ([$services, $searchTerm]) =>
        $services.filter((service) =>
            service.name.toLowerCase().includes($searchTerm.toLowerCase())
        )
    );
    const handleServiceDelete = (id) => {
        if (confirm('Are you sure you want to delete this service?')) {
            services.update((s) => s.filter((service) => service.id !== id));
            alert('Service deleted successfully');
        }
    };

    function openModal() {
        showModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        showModal = false;
    }
</script>

<div class="container">
    <main class="main">
        <div class="section">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Services</h2>
                <button class="button" on:click={openModal}>Add Service</button>
                <Modal isOpen={showModal} on:dialogClose={closeModal}>
                    <div class="all">
                        <div class="title">
                            <h2>Create Service</h2>
                            <p>Fill out the form to create a new service.</p>
                        </div>
                        <form action="">
                            <div class="info">
                                <label for="name">Name Service:</label>
                                <input type="text" id="name" name="name" placeholder="Name Service" required>
                            </div>
                            <div class="info">
                                <label for="price">Price Service:</label>
                                <input type="number" id="price" name="price" placeholder="Price Service" required>
                            </div>
                            <div class="info">
                                <label for="discription">Discription Service:</label>
                                <input type="text" id="discription" name="discription" required>
                            </div>
                            <div class="btn">
                                <button type="submit" class="submit">Create Service</button>
                            </div>
                        </form>
                    </div>
                </Modal> 
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

        /*form style*/
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
        justify-content: center;
        padding: 20px;
        gap: 2rem;
    }
    input{
        min-width: 250px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;

    }
    .info{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 18px;
    }
    .btn{
        width: 100%;
        display: flex;
        justify-content: end;
    }
    button{
        border: none;
        cursor: pointer;
    }
    .submit{
        background-color: #000000;
        color:#FFFFFF;
        padding: 15px 15px;
        border-radius: 5px;
        margin: 20px;
        font-size: 16px;
    }
    #discription{
        height: 100px;
        
    }
</style>
