<template>
    <div id="navbar">
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Logo">
            <div class="mask"></div>
        </div>
        <div class="right">
            <div class="theme-toggle-container">
                <div class="theme-toggle" @click="emitThemeEvent()">
                    <div v-if="userTheme === 'light-theme'" class="toggle-icon">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.817 16.18a.96.96 0 01.953.848l.007.112v1.535a.96.96 0 01-1.913.112l-.006-.112V17.14c0-.53.43-.96.96-.96zm-4.5-1.863c.347.346.373.89.08 1.266l-.08.09-1.085 1.087a.96.96 0 01-1.437-1.267l.08-.09 1.086-1.086a.959.959 0 011.357 0zm10.356 0l1.086 1.086a.959.959 0 11-1.357 1.357l-1.085-1.086a.959.959 0 111.356-1.357zM9.817 4.9a4.924 4.924 0 014.918 4.918 4.924 4.924 0 01-4.918 4.918A4.924 4.924 0 014.9 9.818 4.924 4.924 0 019.817 4.9zm8.858 3.958a.96.96 0 110 1.919H17.14a.96.96 0 110-1.92h1.535zm-16.18 0a.96.96 0 01.112 1.912l-.112.007H.96a.96.96 0 01-.112-1.913l.112-.006h1.534zm14.264-5.983a.96.96 0 010 1.357l-1.086 1.086a.96.96 0 11-1.356-1.357l1.085-1.086a.96.96 0 011.357 0zm-12.617-.08l.09.08 1.086 1.086A.96.96 0 014.05 5.398l-.09-.08-1.086-1.086a.959.959 0 011.267-1.436zM9.817 0c.53 0 .96.43.96.96v1.535a.96.96 0 01-1.92 0V.96c0-.53.43-.96.96-.96z" fill="#858BB2" fill-rule="nonzero"/></svg>
                    </div>
                    <div v-if="userTheme === 'dark-theme'" class="toggle-icon">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z" fill="#7E88C3" fill-rule="nonzero"/></svg>
                    </div>
                </div>
            </div>
            <div class="user-container">
                <img @click="userToggled = !userToggled" class="avatar" src="@/assets/image-avatar.jpg" alt="Avatar Placeholder">
            </div>
        </div>
        <Transition name="pop">
            <div v-if="userToggled" class="user-actions">
                <div class="action">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                    <p class="block-hide-mobile">Settings</p>
                </div>
                <div class="action">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                    <p class="block-hide-mobile">Logout</p>
                </div>
            </div>
        </Transition>
        <Transition name="fade">
            <div @click="userToggled = false" v-if="userToggled" class="overlay"></div>
        </Transition>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .pop-enter-from, .pop-leave-to {
            opacity: 0;
            transform: translateY(-72px);
        }
        .pop-enter-active, .pop-leave-active {
            transition: var(--transition);
        }
        .fade-enter-from, .fade-leave-to {
            opacity: 0;
        }
        .fade-enter-active, .fade-leave-active {
            transition: var(--transition);
        }
        #navbar {
            background-color: var(--color-navbar);
            height: 72px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .logo {
                background-color: var(--color-primary);
                width: 72px;
                height: 72px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                img {
                    position: relative;
                    z-index: 5;
                    width: 28px;
                    height: 28px;
                }
                .mask {
                    background-color: var(--color-primary-alt);
                    height: 36px;
                    width: 72px;
                    position: absolute;
                    top: 36px;
                    left: 0px;
                    border-top-left-radius: 20px;
                    border-bottom-right-radius: 20px;
                    z-index: 4;
                }
            }
            .right {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .theme-toggle-container, .user-container {
                width: 80px;
            }
            .user-container {
                border-left: 1px solid #494E6E;
                height: 72px;
            }
            .theme-toggle-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .theme-toggle {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: fit-content;
            }
            .user-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .avatar {
                width: 32px;
                border-radius: 100%;
                cursor: pointer;
                position: relative;
                z-index: 101;
            }
            .user-actions {
                position: fixed;
                top: 72px;
                right: 0;
                z-index: 100;
                width: 80px;
                background-color: var(--color-navbar);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 16px 0;
                border-bottom-left-radius: 8px;
                border-left: 1px solid #494E6E;
                border-bottom: 1px solid #494E6E;
                gap: 2rem;
                .action {
                    cursor: pointer;
                    svg {
                        fill: #858BB2;
                        transition: var(--transition);
                        width: 20px;
                        height: 20px;
                    }
                    p {
                        transition: var(--transition);
                    }
                    &:hover {
                        svg {
                            fill: var(--color-primary);
                        }
                        p {
                            color: var(--color-primary);
                        }
                    }
                }
            }
            .overlay {
                position: absolute;
                top: 72px;
                z-index: 99;
                width: 100vw;
                height: calc(100vh - 72px);
                background-color: rgba(0,0,0,0.5);
            }
        }
    }
    @media screen and (min-width: 768px) {
        #navbar {
            height: 80px;
            .logo {
                height: 80px;
                width: 80px;
                img {
                    width: 31px;
                    height: 31px;
                }
                .mask {
                    height: 40px;
                    width: 80px;
                    top: 40px;
                }
            }
            .user-container {
                height: 80px;
            }
        }
    }
    @media screen and (min-width: 1440px) {
        .pop-enter-from, .pop-leave-to {
            opacity: 0;
            transform: translateX(-72px);
        }
        .pop-enter-active, .pop-leave-active {
            transition: var(--transition);
        }
        #navbar {
            flex-direction: column;
            height: 100vh;
            width: 103px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            .logo {
                width: 103px;
                height: 103px;
                img {
                    width: 40px;
                    height: 40px;
                }
                .mask {
                    height: 51.5px;
                    width: 103px;
                    top: 51.5px;
                }
            }
            .right {
                flex-direction: column;
            }
            .theme-toggle-container {
                height: 72px;
                .theme-toggle {
                    path {
                        transition: var(--transition);
                    }
                    &:hover {
                        path {
                            fill: #fcb900;
                        }
                    }
                }
            }
            .user-container {
                border: none;
                border-top: 1px solid #494E6E;
                width: 103px;
                img {
                    transition: border-width 0.1s ease;
                    border: 0px solid var(--color-primary);
                    &:hover {
                        border: 5px solid var(--color-primary);
                    }
                }
            }
            .user-actions {
                top: auto;
                bottom: 0;
                left: 80px;
                border: none;
                border-radius: 0;
                border-top-right-radius: 8px;
                border-top: 1px solid #494E6E;
                border-right: 1px solid #494E6E;
                flex-direction: row;
                height: 80px;
                width: fit-content;
                padding: 0 16px;
                .action {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 8px;
                }
            }
            .overlay {
                top: 0;
                height: 100vh;
                left: 103px;
            }
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Navbar',
        props: {
            userTheme: {
                type: String,
            }
        },
        data: () => {
            return {
                userToggled: false,
            }
        },
        methods: {
            emitThemeEvent(): void {
                const event = new Event('themeEvent');
                document.dispatchEvent(event);
            }
        }
    })
</script>