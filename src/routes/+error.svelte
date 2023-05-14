<script>
    import { page } from '$app/stores';
</script>

{(console.log($page.error))}
<!--Show error message with 5xl font centered in page-->
<div class="flex flex-col items-center justify-start h-screen">
    <h1 class="text-5xl p-16">Error</h1>
    <p class="text-2xl">{@html $page.error.message}</p>
</div>