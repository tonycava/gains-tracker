<script>
    import { page } from '$app/stores';
    import GoBack from '@components/layout/GoBack.svelte';
</script>

<GoBack href="/" className="p-4" />

{$page.params.workoutId}