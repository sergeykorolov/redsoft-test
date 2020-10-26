<template>
    <div class="gallery-page">
        <Header/>
        <div class="gallery-page__content">
            <h1 class="gallery-page__content__title">Картины эпохи Возрождения</h1>
            <div class="gallery-page__content__cards-list">
                <PictureCard
                     v-for="(pictureCard, index) in pictureCards"
                     :key="index"
                     :id="pictureCard.id"
                     :image="pictureCard.image"
                     :title="pictureCard.title"
                     :discount="pictureCard.discount"
                     :price="pictureCard.price"
                     :available="pictureCard.available"
                     :in-basket="pictureCard.inBasket"
                     @addToBasket="addToBasket(index)"
                />
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>

    import Header from "./Header";
    import PictureCard from "./PictureCard";
    import Footer from "./Footer";
    import boticelliPicture from '../assets/images/botticelli.png'
    import daVinciPicture from '../assets/images/da-vinci.png'
    import mikelangeloPicture from '../assets/images/michelangelo.png'
    import rembrandtPicture from '../assets/images/rembrandt.png'

    export default {
        name: "MainLayout",
        components: {PictureCard, Header, Footer},
        data() {
            return {
                pictureCards: [
                    {
                        id: 1,
                        image: boticelliPicture,
                        title: "«Рождение Венеры» Сандро Боттичелли",
                        discount: "2 000 000 $",
                        price: "1 000 000 $",
                        available: true,
                        inBasket: this.getInBasket(1)
                    },
                    {
                        id: 2,
                        image: daVinciPicture,
                        title: "«Тайная вечеря» Леонардо да Винчи",
                        discount: "",
                        price: "3 000 000 $",
                        available: true,
                        inBasket: this.getInBasket(2)
                    },
                    {
                        id: 3,
                        image: mikelangeloPicture,
                        title: "«Сотворение Адама» Микеланджело",
                        discount: "6 000 000 $",
                        price: "5 000 000 $",
                        available: true,
                        inBasket: this.getInBasket(3)
                    },
                    {
                        id: 4,
                        image: rembrandtPicture,
                        title: "«Урок анатомии» Рембрандт",
                        discount: "",
                        price: "",
                        available: false,
                        inBasket: this.getInBasket(4)
                    }
                ]
            }
        },
        methods: {
            addToBasket(index) {
                this.pictureCards[index].inBasket = true
            },
            getInBasket(cardId) {
                const cardIds = localStorage.getItem('basketIds');
                if (cardIds) {
                    return !!(cardIds.indexOf(cardId) + 1);
                }
                return false;
            }
        },
    }
</script>

<style lang="scss">

    .gallery-page {

        .gallery-page__content {
            @extend %main-width;

            .gallery-page__content__title {
                margin-top: 48px;
                margin-left: auto;
                font-weight: bold;
                font-size: 24px;
            }

            .gallery-page__content__cards-list {
                display: flex;
                height: 330px;
                margin: 40px auto 0 auto;
                justify-content: center;
            }
        }
    }

</style>