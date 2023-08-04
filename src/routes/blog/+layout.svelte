<script lang="ts">
    import NavBar from "$lib/nav-bar.svelte";
    import "../../app.css";
</script>
<div class="bg-blogSecondary text-blogPrimary min-h-screen">
    <NavBar hoverColor={'text-blogAccent'}/>
    <slot/>
</div>