export const useProducts = () => {

    // per richiamare l'hooks custom creato, si fa così:
    // crei una struttura che accolga gli elementi ritornati,
    // li devi scrivere tutti e con il nome usato nell'hooks

    const prods = [
        {
            id: 1,
            name: "Product 1",
            price: 19.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://example.com/product1.jpg",
        },
        {
            id: 2,
            name: "Product 2",
            price: 29.99,
            description:
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            image: "https://example.com/p roduct2.jpg",
        },]


    function chiamataHooks() {
        console.log("sono nell'hooks")
    }

    // graffe = ritorno un oggetto
    return {
        prods, chiamataHooks
    }
}