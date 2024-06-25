<script>
    import { success, failure } from '$lib/my-toast';

    export let form;
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
        <h2>Sign up</h2>
        <form action="?/signup" method="POST">
            <input type="number" id="age" name="age" placeholder="age" required />
            <input type="text" id="name" name="name" placeholder="name" required />
            <input type="email" id="email" name="email" placeholder="email" required />
            <input type="password" id="password" name="password" placeholder="Password" required />
            <button type="submit">Sign up</button>
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
