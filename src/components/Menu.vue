<template>
    <nav class="menu">
        <ul class="menu__list">
            <li class="menu__list__item"><span>Каталог</span></li>
            <li class="menu__list__item"><span>Доставка</span></li>
            <li class="menu__list__item"><span>Оплата</span></li>
            <li class="menu__list__item"><span>Контакты</span></li>
            <li class="menu__list__item"><span>О галерее</span></li>
        </ul>
    </nav>
</template>

<script>

    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    .menu {
        .menu__list {
            list-style: none;
            margin: 0;
            margin-top: 1px;

            .menu__list__item  {
                display: inline-block;
                padding-top: 37px;
                margin-right: 48.5px;
                font-size: 14px;
            }
        }
    }
</style>