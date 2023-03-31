<script>
	import Analytics from "$lib/analytics.svelte";
    import NavBar from "$lib/nav-bar.svelte";
    import "../app.css";
</script>
<NavBar></NavBar>
<slot />
<Analytics/>