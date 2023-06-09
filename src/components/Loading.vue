<template>
    <div id="loading">
        <h1>Loading...</h1>
    </div>
</template>

<style lang="scss">
    #loading {
        background-color: var(--color-background);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 500;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Loading',
    })
</script>