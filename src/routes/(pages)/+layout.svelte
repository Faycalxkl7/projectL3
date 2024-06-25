<script>
    import { page } from '$app/stores';
</script>

<div class="main-container">
    <!------------------------------------- Left Sidebar ------------------------------------------------>
    <div class="sidebar">
        <div class="logo-container">
            <img src="/images/logos/logo.svg" alt="logo-text" />
            <span>WellnessWing</span>
        </div>
        <div class="sidebar-buttons">
            <a href="/dashboard" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/home.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Dashboard </span>
                </span>
            </a>
            <a href="/dashboard/messages" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/messages'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/messages.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Messages </span>
                </span>
            </a>
            <a href="/dashboard/doctors" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/doctors'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/profile-2.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Doctors </span>
                </span>
            </a>
            <a href="/dashboard/services" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/services'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/service.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Services </span>
                </span>
            </a>
            <a href="/dashboard/patients" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/patients'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/profile.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Patients </span>
                </span>
            </a>
            <a href="/dashboard/settings" class="button-in-sidebar">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/settings'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/settings.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Settings </span>
                </span>
            </a>
            <a href="/dashboard/notifications" class="button-in-sidebar notification">
                <span
                    class="icon-and-text-wrap"
                    class:selected={$page.url.pathname === '/dashboard/notifications'}
                >
                    <div class="icon-in-button">
                        <img src="/images/logos/notifications.svg" alt="home-icon" />
                    </div>
                    <span class="text-in-button"> Notifications </span>
                    <div class="badge">3</div>
                </span>
            </a>
        </div>
    </div>
    <header>
        <div class="logo-container">
            <img src="/images/logos/logo.svg" alt="logo-text" />
            <span>WellnessWing</span>
        </div>
        <div>
            <button class="button-outline"><a href="/dashboard">My Account</a></button>
            <button class="button-outline"><a href="/dashboard/settings">Settings</a></button>
            <form action="/logout" method="POST" style="display: inline;">
                <button class="button-outline">Logout</button>
            </form>
        </div>
    </header>

    <slot />
</div>

<style>
    .sidebar {
        box-sizing: border-box;
        height: 100vh;
        width: 256px;
        overflow-y: auto;
        scrollbar-width: none;
        top: 0;
        user-select: none;
        left: 0;
        position: fixed !important;
        z-index: 1;

        border-width: 0;
        border-color: #e4e4e7;
        border-style: solid;
        border-bottom-width: 1px;
        border-right-width: 1px;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        background-color: rgba(250, 251, 251, 255);
    }

    .main-container {
        padding-left: 256px;
    }

    .logo-container {
        height: 60px;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: #000;
        letter-spacing: 0.025em;
        line-height: 2rem;

        border-width: 0;
        border-color: #e4e4e7;
        border-style: solid;
        border-bottom-width: 1px;
    }

    .sidebar-buttons {
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;
        height: 80%;

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .button-in-sidebar {
        text-decoration: none;
        color: rgb(107 114 128 / 1);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.8px;
        border-radius: 12px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        width: -webkit-fill-available;
    }
    .icon-and-text-wrap {
        height: 40px;
        align-items: center;
        display: flex;
        flex-direction: row;
        border-radius: 12px;
        padding: 4px 8px;
        border: 2px solid transparent;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .button-in-sidebar:hover {
        color: rgb(17 24 39 / 1);
    }
    .button-in-sidebar:hover .icon-in-button img {
        filter: invert(0);
    }
    .selected {
        background-color: rgb(243 244 246 / 1);
        color: rgb(17 24 39 / 1);
        border-radius: 0.5rem;
        border-style: solid;
    }
    .selected .icon-in-button img {
        filter: invert(0);
    }
    .icon-in-button {
        display: flex;
        position: relative;
        margin-right: 0.75rem;
    }

    .icon-in-button img {
        width: 1rem;
        height: 1rem;
        transition-duration: 150ms;
        filter: invert(0.5);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 20px;
        background-color: rgba(250, 251, 251, 255);
        border-bottom: 1px solid #ddd;
        position: fixed;
        width: calc(100% - 256px);
    }

    .logo-container {
        height: 60px;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: #000;
        letter-spacing: 0.025em;
        line-height: 2rem;

        border-width: 0;
        border-color: #e4e4e7;
        border-style: solid;
        border-bottom-width: 1px;
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

    .notification {
        border-width: 0;
        border-top-width: 1px;
        border-color: #e4e4e7;
        border-style: solid;
    }

    .notification:hover .badge {
        background-color: #18181b;
    }

    .badge {
        white-space: nowrap;
        border-width: 1px;
        border-style: solid;
        padding: 0.5px 2.5px;
        font-size: 0.75rem;
        font-weight: 600;
        transition: background-color 0.3s;
        outline: none;
        border-color: transparent;
        margin-left: auto;
        display: flex;
        height: 1.5rem;
        width: 1.5rem;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        /* background-color: #18181b; */
        background-color: #181b1bcc;
        color: #fafafa;
    }
    a{
        text-decoration: none;
        color: #000;
    }
</style>
