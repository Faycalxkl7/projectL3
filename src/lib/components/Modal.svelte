<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let isOpen = false;
    export let title = 'Dialog Title';

    function closeDialog() {
        // Dispatch event to notify parent components about dialog close
        dispatch('dialogClose');
        // Enable scrolling on the body
        document.body.style.overflow = 'auto';
    }
</script>

{#if isOpen}
    <div class="dialog-overlay" on:click={closeDialog}>
        <div class="dialog-content" on:click={(e) => e.stopPropagation()}>
            <div class="dialog-header">
                <h2>{title}</h2>
                <button class="close-button" on:click={closeDialog}>&times;</button>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    </div>
{/if}

<style>
    .dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsl(0 0% 100% / 0.8);
        backdrop-filter: blur(4px); /* Apply backdrop filter for blur effect */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    }

    .dialog-content {
        background-color: #fff;
        max-width: 90%;
        max-height: 90%;
        overflow-y: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 20px;
        position: relative;
        animation: dialog-open 0.3s ease-in-out;
    }

    .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #333;
    }

    .dialog-body {
        padding: 10px 0;
    }

    @keyframes dialog-open {
        from {
            opacity: 0;
            transform: translateY(0) translateX(0) rotate(0deg) skewX(0deg) skewY(0deg) scaleX(1)
                scaleY(1);
        }
        to {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0) skew(0, 0) scaleX(1) scaleY(1);
        }
    }
</style>
