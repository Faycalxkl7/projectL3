<main class="main">
    <section id="contact">
        <div class="container">
            <div class="title">
                <h2>We Are Always Reasy To Help You. Book An Appointment</h2>
                <img src="/images/img/section-img.png" alt="section-img" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, iusto?</p>
            </div>
            <div class="row">
                <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="email" required />
                    </div>
                    <div class="form-control">
                        <input type="number" name="phone" placeholder="Phone" required />
                        <select name="departement">
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
                    <textarea name="message" cols="30" rows="10">Write Yous Messages Here</textarea>
                    <button type="submit" class="btn btn-primary"> Book An Appontment </button>
                </form>
            </div>
        </div>
    </section>
</main>

<style>
    .container {
        max-width: 1200px;
        margin: auto;
        padding: 0 2rem;
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

    #contact .row {
        /* display: grid;
        grid-template-columns: repeat(2, 1fr); */
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
</style>
