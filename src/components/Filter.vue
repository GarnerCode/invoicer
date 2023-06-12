<template>
    <div class="filter-container">
        <div @click="filtersToggled = !filtersToggled" class="filter-trigger">
            <h4>Filter <span>{{ filterBy }}</span></h4>
            <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div v-if="filtersToggled" class="filter-options-container">
            <div class="filter-option">
                <input type="checkbox">
                <h4>Draft</h4>
            </div>
            <div class="filter-option">
                <input type="checkbox">
                <h4>Pending</h4>
            </div>
            <div class="filter-option">
                <input type="checkbox">
                <h4>Paid</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .filter-container {
            position: relative;
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
            .filter-options-container {
                position: absolute;
                top: 2rem;
                left: -42px;
                background-color: var(--color-field-background);
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 176px;
                padding: 16px 0;
                padding-left: 16px;
            }
            .filter-option {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                input {
                    background-color: var(--color-checkbox);
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
    import { useGlobalStore } from '@/store/globalStore';

    export default defineComponent({
        name: 'Filter',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                filtersToggled: false,
            }
        },
        props: {
            filterBy: {
                type: String,
            }
        }
    })
</script>