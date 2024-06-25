<script>
    import { enhance } from '$app/forms';
    import { success, failure } from '$lib/my-toast';

    export let form;

    // Your function that you want to run when the form changes
    function handleFormChange() {
        console.log('Form has changed:', form);
        if (form) {
            if (form?.success) {
                success(form.success);
            }
            if (form?.error) {
                failure(form.error);
            }
        }
    }

    // Reactive statement to watch for changes in the form
    $: form && handleFormChange();
</script>

<div class="container">
    <div class="card">
        <h2>Login</h2>
        <form action="?/login" method="POST" use:enhance>
            <input type="email" id="emil" name="email" placeholder="Email" />
            <input type="password" id="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .card {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card * {
        font-size: 1.5rem;
    }

    h2 {
        text-align: center;
        color: #333;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
    }

    input {
        padding: 10px;
        margin-bottom: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: border-color 0.3s ease-in-out;
        outline: none;
        color: #333;
    }

    input:focus {
        border-color: #555;
    }

    button {
        background-color: #3498db;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    button:hover {
        background-color: #2980b9;
    }
</style>
