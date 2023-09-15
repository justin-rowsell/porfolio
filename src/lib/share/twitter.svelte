<script lang="ts">
    import twitterx from '$lib/assets/icons/twitterx.png';
    export let text: string;
    export let url: string;
</script>

<a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    data-text={text}
    data-url={url}
    data-show-count="false"
    target="_blank" rel="noreferrer">
    <button class="btn btn-square btn-outline py-2 pr-2">
        <img src={twitterx} alt="Twitter" class="w-8 h-8" />
    </button>
</a>