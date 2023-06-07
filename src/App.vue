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
    
    --color-gamma: #FFFFFF;
    --color-delta: #252945;
    --color-epsilon: #DFE3FA;
    --color-zeta: #888EB0;
    --color-eta: #7E88C3;
    --color-theta: #0C0E16;
    --color-iota: #EC5757;
    --color-kappa: #FF9797;

    --color-background: #F8F8FB;
  }
  :root.dark-theme {
    --color-background: #141625;
    --color-text: #FFFFFF;
    --color-navbar: #1E2139;
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
    font-family: 'League Spartan', sans-serif;
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
