<script lang="ts">
    import linkedin from '$lib/assets/icons/linkedin.png';
    export let url: string;
</script>

<a href="https://www.linkedin.com/sharing/share-offsite/?url={url}"
    target="_blank" rel="noreferrer">
    <button class="btn btn-square btn-outline p-2">
        <img src={linkedin} alt="LinkedIn" class="w-8 h-8" />
    </button>
</a>
