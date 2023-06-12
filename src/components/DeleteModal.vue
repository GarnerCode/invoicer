<template>
    <div class="modal-container">
        <div @click="globalStore.setDeleteModalToggled(false)" v-if="id" class="modal-backdrop"></div>
        <div class="delete-modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete invoice<br/> #{{ id }}? This action cannot be undone.</p>
            <div class="modal-actions">
                <button @click="globalStore.setDeleteModalToggled(false)" class="button button-theme-primary">Cancel</button>
                <button @click="globalStore.deleteInvoiceById(id)" class="button button-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .modal-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .modal-backdrop {
            background-color: rgba(0,0,0,0.5);
            width: 100%;
            height: 100%;
        }
        .delete-modal {
            background-color: var(--color-field-background);
            border-radius: 8px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            width: 327px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }
        .modal-actions {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 1rem;
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/globalStore';

    export default defineComponent({
        name: 'DeleteModal',
        data: () => {
            return {
                globalStore: useGlobalStore(),
                id: null,
            }
        },
        mounted() {
            this.id = this.$route.params.id;
        }
    })
</script>