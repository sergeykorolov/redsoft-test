<template>
    <div class="card" :class="{disabled: !available}">
        <img class="card__image" :src=image>
        <span class="card__title">{{title}}</span>
        <div v-if="available" class="card__footer">
            <div class="card__footer__price-block">
                <span class="card__footer__price-block__discount" v-if="discount">{{discount}}</span>
                <span class="card__footer__price-block__price" v-if="price">{{price}}</span>
            </div>
            <button v-if="!loading&&!inBasket" class="card__footer__button" @click="buyPicture(id)">Купить</button>
            <button v-else-if="loading" class="card__footer__button__load">
                <img class="card__footer__button__load__gif" :src=loadGif>
            </button>
            <button v-else-if="inBasket" class="card__footer__button__basket">
                <img class="card__footer__button__basket__check" :src=checkIcon>В корзине
            </button>
        </div>
        <span v-else class="card__disabled">Продана на аукционе</span>
    </div>
</template>

<script>

    import checkIcon from '../assets/images/check-icon.png'
    import loadGif from '../assets/images/loading.gif'

    export default {
        name: "PictureCard",
        props: {
            id: Number,
            image: String,
            title: String,
            discount: String,
            price: String,
            available: Boolean,
            inBasket: Boolean
        },
        data() {
            return {
                loading: false,
                checkIcon,
                loadGif
            }
        },
        methods: {
            addToBasket() {
                this.$emit('addToBasket')
            },
            async buyPicture(cardId) {
                this.loading = true
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    const data = await res.json()
                    if (res.status === 200 || res.status === 201) {
                        /*********************/
                        let cartIds = JSON.parse(localStorage.getItem('cartIds'))
                        if (cartIds) {
                            cartIds.push(cardId);
                        } else {
                            cartIds = [cardId];
                        }
                        localStorage.setItem('cartIds', JSON.stringify(cartIds))
                        /****************/
                        this.addToBasket()
                        this.loading = false
                    }else {
                        this.errors = data
                        console.error(data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card {
        display: block;
        width: 280px;
        height: 328px;
        border: 1px solid #E1E1E1;
        box-sizing: border-box;
        margin-right: 32px;
        &:last-child {
            margin-right: 0;
        }

        .card__image {
            width: 278px;
        }

        .card__title {
            display: block;
            margin: 17px 36px 0 24px;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #343030;
        }

        .card__footer {
            display: flex;
            justify-content: space-between;
            height: 70px;

            .card__footer__price-block {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 23px;
                margin-left: 24px;
                width: 95px;

                .card__footer__price-block__discount {
                    display: block;
                    width: 82px;
                    height: 21px;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    text-decoration-line: line-through;
                    color: #A0A0A0;
                }

                .card__footer__price-block__price {
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 24px;
                    color: #343030;
                }
            }

            .card__footer__button {
                @extend %button;
                align-self: flex-end;
                width: 118px;
                margin-right: 23px;
                background: #382E2B;
            }
            .card__footer__button__load {
                @extend %button;
                align-self: flex-end;
                width: 117px;
                margin-right: 24px;
                background: #C1B4B1;

                .card__footer__button__load__gif {
                    width: 50px;
                    height: auto;
                }
            }
            .card__footer__button__basket {
                @extend %button;
                align-self: flex-end;
                width: 117px;
                margin-right: 24px;
                background-color: #5B3A32;

                .card__footer__button__basket__check {
                    margin-right: 10px;
                    position: relative;
                    left: 4px;
                }
            }
        }

        .card__disabled {
            display: block;
            margin-top: 36px;
            margin-left: 24px;
            font-weight: bold;
            font-size: 16px;
            color: #343030;
        }
    }

    .disabled {
        opacity: 0.5;
    }
</style>