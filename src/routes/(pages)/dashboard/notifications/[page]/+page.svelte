<script>
    import { supabaseClient } from '$lib/supabase';
    import { invalidateAll } from '$app/navigation';
    import { page } from '$app/stores';

    export let data;
    let selected = 'price';
    let selectedPriceRanges = [
        { label: '0-50', applied: true, min: 0, max: 50 },
        { label: '50-100', applied: true, min: 50, max: 100 },
        { label: '100-200', applied: true, min: 100, max: 200 },
        { label: '200+', applied: true, min: 200, max: Infinity }
    ];

    /*  let { appointments } = data; */
    let { count, totalItems } = data;
    $: appointments = data.appointments;
    let filteredAppointments = [];

    const sortFunctions = {
        date: (a, b) => new Date(b.created_at) - new Date(a.created_at),
        type: (a, b) => a.services.name.localeCompare(b.services.name),
        price: (a, b) => a.services.price - b.services.price
    };

    function sortAndFilterAppointments() {
        // if no appointments, return
        if (!appointments) return;
        filteredAppointments = appointments
            .filter((appointment) => {
                const price = appointment.services.price;
                return selectedPriceRanges.some(
                    (range) => range.applied && price >= range.min && price < range.max
                );
            })
            .sort(sortFunctions[selected] || (() => 0));
    }

    // Initial sort and filter
    sortAndFilterAppointments();

    // Reactive statements
    $: {
        if (appointments && (selected || selectedPriceRanges)) {
            sortAndFilterAppointments();
        }
    }

    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        filteredAppointments = appointments.filter((appointment) => {
            return appointment.services.name.toLowerCase().includes(query);
        });
    }

    const handleAction = async (doctor_id, rowId, action) => {
        if (action === 'accept') {
            console.log(`Accepted row with id: ${rowId}`);
            const { data, error } = await supabaseClient
                .from('appointment')
                .update({ done: 'accepted' })
                .eq('id', rowId)
                .select();
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        } else if (action === 'refuse') {
            console.log(`Refused row with id: ${rowId}`);
            const { error } = await supabaseClient
                .from('appointment')
                .update({ done: 'denied' })
                .eq('id', rowId);
            if (error) {
                console.log(error);
            }
        }
        invalidateAll();
    };
</script>

<!-- <header>
    <div class="header-left">
        <a href="/doctorspage" class="heart-icon">
            <i class="fa-regular fa-heart fa-xl" style="color: #FFFFFF;"></i>
        </a>
        <h1>Notifications</h1>
    </div>
    <div class="header-right">
        <div class="user-info">
            <div class="dropdown">
                <div class="dropdown-trigger-user">
                    <i class="fa-regular fa-user fa-xl avatar" style="color: #FFFFFF;"></i>
                    <span>John Doe</span>
                </div>
                <div class="dropdown-content-user">
                    <div class="h-n">
                        <a href="/doctorspage"
                            ><i class="fa-solid fa-house" style="color: #000000;"></i>Home</a
                        >
                        <a href="/doctorspage/history"
                            ><i class="fa-solid fa-calendar-days" style="color: #000000;"
                            ></i>History</a
                        >
                        <a href="/doctorspage/notification"
                            ><i class="fa-solid fa-bell" style="color: #000000;"></i>Notification</a
                        >
                    </div>
                </div>
            </div>
            <button class="icon-button" aria-label="Log Out">
                <i class="fa-solid fa-arrow-right-from-bracket fa-xl" style="color: #FFFFFF;"></i>
            </button>
        </div>
    </div>
</header> -->

<main>
    <div class="container">
        <div class="search-and-filters">
            <div class="filters">
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass search-icon" style="color: #000000;"></i>
                    <input
                        type="text"
                        placeholder="Search notifications..."
                        on:input={(e) => handleSearch(e)}
                    />
                </div>
                <div class="dropdown">
                    <button class="dropdown-trigger">
                        <i class="fa-solid fa-filter" style="color: #000000;"></i>
                        Filter
                    </button>
                    <div class="dropdown-content">
                        <label for="sort">Sort by</label>
                        <hr />
                        <div>
                            <input
                                type="radio"
                                id="date"
                                name="sort"
                                value="date"
                                bind:group={selected}
                                checked
                            />
                            <label for="date">Date</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="type"
                                name="sort"
                                value="type"
                                bind:group={selected}
                            />
                            <label for="type">Type</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="price"
                                name="sort"
                                value="price"
                                bind:group={selected}
                            />
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
                        <hr />
                        {#each selectedPriceRanges as priceRange, index}
                            <div>
                                <input
                                    type="checkbox"
                                    id={priceRange.label}
                                    value={priceRange.label}
                                    bind:checked={selectedPriceRanges[index].applied}
                                />
                                <label for={priceRange.label}>{priceRange.label}</label>
                            </div>
                        {/each}
                        <!-- <div>
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
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="services-grid">
            {#if filteredAppointments.length === 0}
                <div class="nothing">
                    <h1>Nothing found</h1>
                </div>
            {:else}
                {#each filteredAppointments as appointment}
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <h3>{appointment.services.name}</h3>
                                <div class="price">{appointment.services.price}DA</div>
                            </div>
                            <p>name of user : {appointment.profiles.full_name}</p>
                            <p>{appointment.services.description}</p>
                            <p>addres : {appointment.address}</p>
                            <p>phone number of user: {appointment.phone_number}</p>
                            <div class="card-footer">
                                <div class="date">{appointment.created_at}</div>
                            </div>
                            <div class="btn">
                                <button
                                    class="accept"
                                    on:click={(id) =>
                                        handleAction(
                                            appointment.profiles.id,
                                            appointment.id,
                                            'accept'
                                        )}>accept</button
                                >
                                <button
                                    class="accept"
                                    on:click={(id) =>
                                        handleAction(appointment.profiles.id, id, 'refuse')}
                                    >refuse</button
                                >
                            </div>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>

        {#if !(filteredAppointments.length === 0)}
            <div class="pagination">
                {#if currentPage === '1'}
                    <span class="page-link">Previous</span>
                {:else}
                    <a
                        data-sveltekit-reload
                        href="/dashboard/history/{parseInt($page.params.page) - 1}"
                        class="page-link">Previous</a
                    >
                {/if}
                {#each Array.from({ length: Math.ceil(count / parseInt(totalItems)) }, (_, i) => i + 1) as page}
                    {#if currentPage === page.toString()}
                        <span class="page-link active">{page}</span>
                    {:else}
                        <a data-sveltekit-reload href="/dashboard/history/{page}" class="page-link"
                            >{page}</a
                        >
                    {/if}
                {/each}
                <!-- <a href="/doctors" class="page-link">1</a>
                <a href="/doctors" class="page-link active">2</a>
                <a href="/doctors" class="page-link">3</a>
                <span class="ellipsis">...</span> -->
                {#if currentPage === count.toString()}
                    <span class="page-link">Next</span>
                {:else}
                    <a
                        data-sveltekit-reload
                        href="/dashboard/history/{parseInt(currentPage) + 1}"
                        class="page-link">Next</a
                    >
                {/if}
            </div>
        {/if}
    </div>
</main>

<style>
    main {
        padding: 20px;
        padding-top: 100px;
    }
    /* header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #127bd1;
        padding: 0.5rem 20px;
        color: white;
        font-family: 'Arial Narrow', Arial, sans-serif;
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
    .user-info {
        display: flex;
    } */
    .dropdown {
        position: relative;
    }
    .dropdown-trigger-user {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        cursor: pointer;
    }
    .dropdown-content-user {
        /* z-index: 10; */
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
    a {
        text-decoration: none;
        color: black;
    }
    .dropdown-content-user .h-n {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    i {
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
    .icon-button:hover {
        background-color: #e1e1e1;
    }
    .dropdown-trigger-user:hover + .dropdown-content-user,
    .dropdown-content-user:hover {
        display: block;
    }

    .container {
        /* max-width: 1200px; */
        margin: 0;
        font-family: 'Arial Narrow', Arial, sans-serif;
    }
    .search-and-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 5rem;
        margin-bottom: 1rem;
    }
    .search {
        position: relative;
        flex: 1;
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
        width: 100%;
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
        text-wrap: nowrap;
    }
    .dropdown-trigger:hover + .dropdown-content,
    .dropdown-content:hover {
        display: block;
    }
    .services-grid {
        display: grid;
        gap: 1.5rem;
        /* grid-template-columns: repeat(3, minmax(300px, 1fr)); */
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
    .read-more {
        color: #127bd1;
        text-decoration: none;
    }
    .read-more:hover {
        text-decoration: underline;
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

    .accept {
        background-color: #127bd1;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: #ffffff;
    }

    .nothing {
        height: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
