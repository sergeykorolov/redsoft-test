<template>
    <div class="footer">
        <div class="footer__content">
            <div class="footer__content__menu">
                <img class="footer__content__menu__logo" :src=logoFooter>
                <Menu/>
            </div>
            <div class="footer__content__info">
                <div class="footer__content__info__phone">
                    <img class="footer__content__info__phone__phone-icon" :src="phoneIcon">
                    <span class="footer__content__info__phone__phone-number">+7 (495) 555-55-55</span>
                </div>
                <div class="footer__content__info__location">
                    <img class="footer__content__info__location__location-icon" :src="locationIcon">
                    <span class="footer__content__info__location__address">г. Москва, ул. Расплетина, 24</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Menu from "./Menu"
    import logo from "../assets/images/logo-museum 2 (1).png"
    import phoneIcon from "../assets/images/phone-icon.png"
    import locationIcon from "../assets/images/location-icon.png"

    export default {
        name: "Footer",
        components: {Menu},
        data() {
            return {
                logoFooter: logo,
                phoneIcon: phoneIcon,
                locationIcon: locationIcon
            }
        }
    }
</script>

<style lang="scss" scoped>

    .footer {
        height: 96px;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #ECEAEA;

        .footer__content {
            display: flex;
            justify-content: space-between;
            @extend %main-width;

            .footer__content__menu {
                display: flex;
                .footer__content__menu__logo {
                    @extend %gallery-logo;
                }
            }

            .footer__content__info {
                display: flex;
                .footer__content__info__phone {
                    margin-right: 51px;
                    margin-top: 37px;
                    .footer__content__info__phone__phone-icon {
                        vertical-align: middle;
                        margin-right: 9px;
                    }
                    .footer__content__info__phone__phone-number {
                        font-size: 14px;
                    }
                }

                .footer__content__info__location {
                    margin-top: 38px;
                    .footer__content__info__location__location-icon {
                        vertical-align: middle;
                        margin-right: 10px;
                    }
                    .footer__content__info__location__address {
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>