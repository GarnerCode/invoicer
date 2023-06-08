<template>
    <div class="date-selector-field">
        <div class="field">
            <div class="label-container">
                <label for="dropdown">{{ label }}</label>
            </div>
            <!-- <div class="selector-trigger field-input" :class="{'active': selectorToggled}" @click="selectorToggled = !selectorToggled">
                {{ selectedDate }}
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z" fill="#7E88C3" fill-rule="nonzero" opacity=".5"/></svg>
            </div> -->
            <input type="date" class="field-input">
        </div>
    </div>
</template>

<style lang="scss">
    input[type="date"]::-webkit-calendar-picker-indicator {
        color: rgba(0, 0, 0, 0);
        opacity: 1;
        display: block;
        background: url(@/assets/icon-calendar.svg) no-repeat;
        width: 20px;
        height: 20px;
        border-width: thin;
    }
    .date-selector-field {
        .selector-trigger {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        .field-input {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'DateSelector',
        data: () => {
            return {
                selectedDate: new Date(),
                selectorToggled: false,
            }
        },
        props: {
            label: {
                type: String,
            }
        }
    })
</script>