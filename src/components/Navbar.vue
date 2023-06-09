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
                <img class="avatar" src="@/assets/image-avatar.jpg" alt="Avatar Placeholder">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
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
        methods: {
            emitThemeEvent(): void {
                const event = new Event('themeEvent');
                document.dispatchEvent(event);
            }
        }
    })
</script>