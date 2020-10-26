export default function (instance) {
    return {
        addToBasket() {
            return instance.get('posts/1')
        }
    }
}