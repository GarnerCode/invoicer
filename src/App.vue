<template>
  <div id="app-container">
    <Navbar :userTheme="userTheme"></Navbar>
    <div id="view-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');
  :root {
    --color-primary: #7C5DFA;
    --color-primary-alt: #9277FF;
    --color-text: #0C0E16;

    --color-navbar: #373B53;

    --color-button-theme-primary: #F9FAFE;
    --color-button-theme-primary-text: #7E88C3;
    --color-button-theme-primary-hover: #252945;
    --color-button-theme-primary-text-hover: #DFE3FA;

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
    --color-field-text: #0C0E16;
    --color-field-border: #DFE3FA;
    --color-field-border-active: #7C5DFA;

    --color-background: #F8F8FB;

    --font-family-primary: 'League Spartan', sans-serif;
  }
  :root.dark-theme {
    --color-background: #141625;
    --color-text: #FFFFFF;
    --color-navbar: #1E2139;

    --color-button-theme-primary: #DFE3FA;
    --color-button-theme-primary-hover: #FFFFFF;

    --color-button-theme-secondary: #0C0E16;
    --color-button-theme-secondary-hover: #1E2139;

    --color-field-background: #1E2139;
    --color-field-text: #FFFFFF;
    --color-field-border: #252945;
    --color-field-border-active: #252945;


    --color-gamma: #1E2139;
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
      &.var {
        line-height: 15px;
        letter-spacing: -0.25px;
      }
    }
    #view-container {
      padding: 3rem 2rem;
      height: calc(100vh - 6rem - 72px);
      overflow-y: auto;
    }
    .button {
      border: none;
      border-radius: 24px;
      font-size: 15px;
      font-weight: bold;
      padding: 16.5px 27.5px;
      transition: all 0.25s ease;
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
      .field-label {
        font-size: 13px;
        font-weight: 500;
      }
      .field-input {
        padding: 16.5px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 4px;
        transition: all 0.25s ease;
        border: 1px solid var(--color-field-border);
        background-color: var(--color-field-background);
        color: var(--color-field-text);
        &:focus {
          outline: none;
          border: 1px solid var(--color-field-border-active);
        }
      }
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
  }
  @media screen and (min-width: 1440px) {
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
  import Navbar from './components/Navbar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Navbar,
    },
    data: () => {
      return {
        userTheme: "light-theme",
      }
    },
    mounted() {
      document.addEventListener('themeEvent', () => {
        if (this.userTheme === "light-theme") {
          this.setTheme("dark-theme");
        } else {
          this.setTheme("light-theme");
        }
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
