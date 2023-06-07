<template>
    <div class="dropdown-field">
        <div class="field">
            <div class="label-container">
                <label for="dropdown">{{ label }}</label>
            </div>
            <div class="dropdown-trigger field-input" :class="{'active': dropdownToggled}" @click="dropdownToggled = !dropdownToggled">
                {{ selection }}
                <svg :class="{'active': dropdownToggled}" width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <Transition name="slide" mode="out-in">
                <div v-if="dropdownToggled" class="dropdown-options">
                    <div class="option" :class="{'border': index}" v-for="(option, index) of options" :key="index" @click="handleSelection(option)">
                        {{ option }}
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss">
    .slide-enter-from, .slide-leave-to {
        opacity: 0;
        transform: translateY(-12px);
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.25s ease;
    }
    .dropdown-field {
        position: relative;
        .dropdown-trigger {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            transition: border 0.25s ease;
            svg {
                transition: transform 0.25s ease;
                &.active {
                    transform: rotate(180deg);
                }
            }
            &.active {
                border: 1px solid var(--color-field-border-active);
            }
        }
        .dropdown-options {
            background-color: var(--color-dropdown-popup);
            border-radius: 8px;
            box-shadow: var(--dropdown-popup-box-shadow);
            position: absolute;
            top: 89px;
            width: 100%;
            .option {
                padding: 16.5px;
                cursor: pointer;
                transition: color 0.25s ease;
                &:hover {
                    color: var(--color-primary-alt);
                }
                &.border {
                    border-top: var(--dropdown-popup-options-border);
                }
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Dropdown',
        data: () => {
            return {
                selection: '',
                dropdownToggled: false,
            }
        },
        props: {
            label: {
                type: String,
            },
            options: {
                type: Object,
            }
        },
        mounted() {
            this.selection = this.options[0];
        },
        methods: {
            handleSelection(option: string): void {
                this.selection = option;
                this.dropdownToggled = false;
            }
        }
    })
</script>