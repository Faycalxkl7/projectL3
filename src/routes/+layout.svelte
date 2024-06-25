<script>
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import { supabaseClient } from '$lib/supabase';
    import { invalidateAll } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        const {
            data: { subscription }
        } = supabaseClient.auth.onAuthStateChange(() => {
            // do what ever you want to do when the auth state changes ):
            invalidateAll();
        });

        return () => {
            subscription?.unsubscribe();
        };
    });
</script>

<div class="wrap">
    <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</div>

<slot></slot>

<style>
    .wrap {
        font-size: 0.875rem;
    }
</style>
