import { toast } from '@zerodevx/svelte-toast';

export const success = (message) => {
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(72,187,120,0.9)',
            '--toastBarBackground': '#2F855A'
        },
        pausable: true
    });
};
export const failure = (message) => {
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(245, 101, 101, 0.9)',
            '--toastBarBackground': 'rgba(197, 48, 48, 1)'
        },
        pausable: true
    });
};
