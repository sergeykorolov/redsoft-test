<template>
    <div class="header">
        <div class="header__content">
            <div class="header__content__menu">
                <img class="header__content__menu__logo" :src=logo>
                <Menu/>
            </div>
            <div class="header__content__search-form">
                <input
                        class="header__content__search-form__input"
                        type="text"
                        placeholder="Поиск по названию картины">
                <button class="header__content__search-form__button">Найти</button>
            </div>
        </div>
    </div>
</template>

<script>

    import Menu from "./Menu";
    import logo from "../assets/images/logo-museum 2.png"

    export default {
        name: "Header",
        components: {Menu},
        data() {
            return {
                logo: logo
            }
        }
    }
</script>

<style lang="scss" scoped>

    .header {
        height: 95px;
        border-bottom: 1px solid #E1E1E1;

        .header__content {
            display: flex;
            justify-content: space-between;
            @extend %main-width;

            .header__content__menu {
                display: flex;
                .header__content__menu__logo {
                    @extend %gallery-logo;
                }
            }

            .header__content__search-form {
                .header__content__search-form__input {
                    width: 276px;
                    padding: 13px 0 15px 17px;
                    margin-top: 24px;
                    font-family: 'Merriweather', serif;
                    font-size: 14px;
                    outline: none;
                    border: 1px solid #E1E1E1;
                    background: #F6F3F3;
                }

                .header__content__search-form__button {
                    @extend %button;
                    width: 122px;
                    background: #382E2B;
                }
            }
        }
    }
</style>