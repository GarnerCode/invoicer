<template>
  <div id="app-container">
    <Loading v-if="globalStore.getLoading && !globalStore.getInvoiceList.length"></Loading>
    <DeleteModal v-if="globalStore.getDeleteModalToggled"></DeleteModal>
    <InvoiceFormModal v-if="globalStore.getFormModalToggled"></InvoiceFormModal>
    <Navbar :userTheme="userTheme"></Navbar>
    <div v-if="!globalStore.getLoading && globalStore.getInvoiceList.length" id="view-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');
  :root {
    --color-background: #F8F8FB;
    --color-primary: #7C5DFA;
    --color-primary-alt: #9277FF;
    --color-text: #0C0E16;

    --color-navbar: #373B53;

    --color-button-theme-primary: #F9FAFE;
    --color-button-theme-primary-text: #7E88C3;
    --color-button-theme-primary-hover: #DFE3FA;
    --color-button-theme-primary-text-hover: #7E88C3;

    --color-button-theme-secondary: #373B53;
    --color-button-theme-secondary-text: #888EB0;
    --color-button-theme-secondary-hover: #373B53;
    --color-button-theme-secondary-text-hover: #DFE3FA;

    --color-button-tertiary: #F9FAFE;
    --color-button-tertiary-text: #7E88C3;
    --color-button-tertiary-hover: #DFE3FA;

    --color-button-danger: #EC5757;
    --color-button-danger-hover: #FF9797;

    --color-field-background: #FFFFFF;
    --color-field-label: #7E88C3;
    --color-field-text: #0C0E16;
    --color-field-border: #DFE3FA;
    --color-field-border-active: #7C5DFA;
    --color-checkbox: #DFE3FA;

    --color-scrollbar: #DFE3FA;

    --color-dropdown-popup: #FFFFFF;
    --dropdown-popup-box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
    --dropdown-popup-options-border: 1px solid #DFE3FA;

    --font-family-primary: 'League Spartan', sans-serif;

    --color-background-paid: #FFFFFF;
    --color-text-paid: #33D69F;
    --color-background-pending: #FFFFFF;
    --color-text-pending: #FF8F00;
    --color-background-draft: #FFFFFF;
    --color-text-draft: #373B53;

    --color-invoice-items-container: #F9FAFE;
    --color-item-quantity: #888EB0;

    --color-alpha: #0C0E16;
    --color-beta: #888EB0;
    --color-gamma: #7E88C3;

    --transition: all 0.25s ease;
  }
  :root.dark-theme {
    --color-background: #141625;
    --color-text: #FFFFFF;
    --color-navbar: #1E2139;

    --color-button-theme-primary: #252945;
    --color-button-theme-primary-hover: #FFFFFF;
    --color-button-theme-primary-text-hover: #DFE3FA;

    --color-button-theme-secondary: #0C0E16;
    --color-button-theme-secondary-hover: #1E2139;

    --color-field-background: #1E2139;
    --color-field-label: #888EB0;
    --color-field-text: #FFFFFF;
    --color-field-border: #252945;
    --color-field-border-active: #252945;
    --color-checkbox: #1E2139;

    --color-scrollbar: #252945;

    --color-dropdown-popup: #252945;
    --dropdown-popup-box-shadow: 0 0 0 rgba(0,0,0,0);
    --dropdown-popup-options-border: 1px solid #1E2139;

    --color-background-paid: rgba(51, 214, 159, 0.05);
    --color-background-pending: rgba(255, 143, 0, 0.05);
    --color-background-draft: rgba(223, 227, 250, 0.05);
    --color-text-draft: #DFE3FA;

    --color-invoice-items-container: #252945;

    --color-alpha: #FFFFFF;
    --color-beta: #DFE3FA;
  }
  #app-container {
    background-color: var(--color-background);
  }
  html {
    overflow: hidden;
  }
  body {
    margin: 0;
    font-family: var(--font-family-primary);
    font-weight: 500;
    color: var(--color-text);
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
  h1, h2, h3, h4 {
    font-weight: 700;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar);
    border-radius: 4px;
  }
  @media screen and (min-width: 0px) {
    h1 {
      font-size: 24px;
      letter-spacing: -0.75px;
    }
    h2 {
      font-size: 24px;
      line-height: 22px;
      letter-spacing: -0.75px;
    }
    h3 {
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.25px;
    }
    h4 {
      font-size: 15px;
      line-height: 15px;
      letter-spacing: -0.25px;
    }
    p {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.1px;
      color: var(--color-beta);
      &.var {
        line-height: 15px;
        letter-spacing: -0.25px;
      }
    }
    #view-container {
      padding: 3rem 2rem;
      height: calc(100vh - 6rem - 72px);
      overflow-y: auto;
      .view-header {
        display: flex;
        flex-direction: row;
        // align-items: center;
        justify-content: space-between;
      }
    }
    .button {
      border: none;
      border-radius: 24px;
      font-family: var(--font-family-primary);
      font-size: 15px;
      font-weight: bold;
      padding: 16.5px 18.5px;
      transition: var(--transition);
      text-decoration: none;
      cursor: pointer;
      // Button 1 & Button 2
      &.button-primary {
        background-color: var(--color-primary);
        color: #FFFFFF;
        &:hover {
          background-color: var(--color-primary-alt);
        }
      }
      &.icon-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        height: 44px;
        padding: 0;
        padding-left: 5px;
        padding-right: 16.5px;
        .button-icon {
          background-color: #FFFFFF;
          width: 32px;
          height: 32px;
          border-radius: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      // Button 3
      &.button-theme-primary {
        background-color: var(--color-button-theme-primary);
        color: var(--color-button-theme-primary-text);
        &:hover {
          background-color: var(--color-button-theme-primary-hover);
          color: var(--color-button-theme-primary-text-hover);
        }
      }
      // Button 4
      &.button-theme-secondary {
        background-color: var(--color-button-theme-secondary);
        color: var(--color-button-theme-secondary-text);
        &:hover {
          color: var(--color-button-theme-secondary-text-hover);
        }
      }
      // Button 5
      &.button-danger {
        background-color: var(--color-button-danger);
        color: #FFFFFF;
        &:hover {
          background-color: var(--color-button-danger-hover);
        }
      }
      // Button 6
      &.button-tertiary {
        background-color: var(--color-button-tertiary);
        color: var(--color-button-tertiary-text);
        &:hover {
          background-color: var(--color-button-tertiary-hover);
        }
      }
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .label-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .field-label {
        font-size: 13px;
        font-weight: 500;
      }
      .field-input {
        display: flex;
        flex-direction: row;
        padding: 0 16.5px;
        height: 48px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 4px;
        transition: var(--transition);
        border: 1px solid var(--color-field-border);
        background-color: var(--color-field-background);
        color: var(--color-field-text);
        caret-color: var(--color-primary);
        &:focus {
          outline: none;
          border: 1px solid var(--color-field-border-active);
        }
      }
      .error-msg {
        display: none;
      }
      &.error {
        label {
          color: var(--color-button-danger);
        }
        .error-msg {
          display: block;
          color: var(--color-button-danger);
        }
        .field-input {
          border: 1px solid var(--color-button-danger);
        }
      }
    }
    .errors {
      display: none;
      &.active {
        display: block;
        color: var(--color-button-danger);
      }
    }
    .inline-hide-mobile {
      display: none;
    }
    .block-hide-mobile {
      display: none;
    }
    .block-hide-tablet {
      display: block;
    }
    .flex-hide-mobile {
      display: none !important;
    }
    .grid-hide-mobile {
      display: none;
    }
    .view-content {
      margin-top: 2rem;
    }
    .highlight {
      color: var(--color-gamma);
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 36px;
      line-height: 33px;
    }
    #view-container {
      height: calc(100vh - 6rem - 80px);
    }
    .inline-hide-mobile {
      display: inline;
    }
    .block-hide-mobile {
      display: block;
    }
    .block-hide-tablet {
      display: none;
    }
    .flex-hide-mobile {
      display: flex !important;
    }
    .grid-hide-mobile {
      display: grid !important;
    }
    .text-right {
      text-align: right;
    }
    .flex-hide-tablet {
      display: none !important;
    }
    .modal-slide-enter-from, .modal-slide-leave-to {
      opacity: 0;
    }
    .modal-slide-enter-active, .modal-slide-leave-active {
      transition: var(--transition);
    }
  }
  @media screen and (min-width: 1440px) {
    .block-hide-tablet {
      display: block;
    }
    #app-container {
      display: flex;
      flex-direction: row;
    }
    #view-container {
      height: calc(100vh - 6rem);
      width: 100vw;
      padding: 4rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .view {
        width: 730px;
      }
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGlobalStore } from './store/globalStore';
  import Loading from './components/Loading.vue';
  import DeleteModal from './components/DeleteModal.vue';
  import InvoiceFormModal from './components/InvoiceFormModal.vue';
  import Navbar from './components/Navbar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Loading,
      DeleteModal,
      InvoiceFormModal,
      Navbar,
    },
    data: () => {
      return {
        userTheme: "light-theme",
        globalStore: useGlobalStore(),
      }
    },
    created() {
      this.globalStore.fetchInvoices();
    },
    mounted() {
      document.addEventListener('themeEvent', () => {
        this.userTheme === "light-theme" ? this.setTheme("dark-theme") : this.setTheme("light-theme");
      });
      const initUserTheme = this.getMediaPreference();
      this.setTheme(initUserTheme);
    },
    methods: {
      getMediaPreference(): string {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
          ).matches;
        if (hasDarkPreference) {
          return "dark-theme";
        } else {
          return "light-theme";
        }
      },
      setTheme(theme: string): void {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
  })
</script>
