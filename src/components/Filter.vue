<template>
    <div class="filter-container">
        <div class="filter-trigger">
            <h4>Filter <span>{{ filterBy }}</span></h4>
            <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .filter-container {
            .filter-trigger {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                height: 15px;
                cursor: pointer;
                span {
                    display: none;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .filter-container {
            .filter-trigger {
                span {
                    display: inline-flex;
                }
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Filter',
        data: () => {
            return {

            }
        },
        props: {
            filterBy: {
                type: String,
            }
        }
    })
</script>