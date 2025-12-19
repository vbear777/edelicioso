const dummyData = {
    categories: [
        { name: "Pizza", description: "Oven-baked pizza with original Italian taste" },
        { name: "Pasta", description: "Creamy and savory Italian pasta dishes" },
        { name: "Spaghetti", description: "Classic spaghetti with signature sauces" },
        { name: "Gelato", description: "Smooth and refreshing Italian ice cream" },
        { name: "Panini", description: "Grilled Italian sandwiches with premium fillings" },
        { name: "Risotto", description: "Creamy Italian rice cooked to perfection" },
    ],

    customizations: [
        // Toppings
        { name: "Extra Cheese", price: 25, type: "topping" },
        { name: "Jalapeños", price: 20, type: "topping" },
        { name: "Onions", price: 10, type: "topping" },
        { name: "Olives", price: 15, type: "topping" },
        { name: "Mushrooms", price: 18, type: "topping" },
        { name: "Tomatoes", price: 10, type: "topping" },
        { name: "Bacon", price: 30, type: "topping" },
        { name: "Avocado", price: 35, type: "topping" },
        { name: "Chocolate Sauce", price: 15, type: "topping" },
        { name: "Caramel Sauce", price: 15, type: "topping" },
        { name: "Extra Espresso Shot", price: 20, type: "topping" },

        // Sides & Drinks
        { name: "Garlic Bread", price: 25, type: "side" },
        { name: "Fries", price: 30, type: "side" },
        { name: "Salad", price: 28, type: "side" },
        { name: "Mozzarella Sticks", price: 35, type: "side" },
        { name: "Coke", price: 15, type: "side" },
        { name: "Iced Tea", price: 15, type: "side" },
    ],

    menu: [
        {
            name: "Classic Margherita Pizza",
            description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/pizza.png",
            price: 26.99,
            rating: 4.3,
            calories: 580,
            protein: 20,
            category_name: "Pizza",
            customizations: ["Extra Cheese", "Olives", "Mushrooms", "Garlic Bread"],
        },
        {
            name: "Spaghetti Alle Vongole",
            description: "Classic Italian spaghetti with fresh clams, garlic, olive oil, and parsley",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/allevongole.png",
            price: 28.99,
            rating: 4.6,
            calories: 520,
            protein: 24,
            category_name: "Spaghetti",
            customizations: [
                "Extra Cheese",
                "Garlic Bread",
                "Olives",
                "Iced Tea",
            ],
        },
        {
            name: "Spaghetti Bolognese",
            description: "Spaghetti pasta served with rich beef bolognese sauce",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/bolognese.png",
            price: 22.99,
            rating: 4.4,
            calories: 520,
            protein: 22,
            category_name: "Spaghetti",
            customizations: ["Extra Cheese", "Mushrooms", "Garlic Bread"],
        },
        {
            name: "Pasta Artichoke",
            description: "Creamy pasta with artichoke, parmesan cheese, and herbs",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/artichoke.png",
            price: 27.5,
            rating: 4.6,
            calories: 640,
            protein: 24,
            category_name: "Pasta",
            customizations: ["Extra Cheese", "Bacon", "Mushrooms"],
        },
        {
            name: "Gelato",
            description: "Smooth and creamy Italian gelato",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/gelatos.png",
            price: 14.99,
            rating: 4.5,
            calories: 260,
            protein: 6,
            category_name: "Gelato",
            customizations: ["Chocolate Sauce", "Caramel Sauce"],
        },
        {
            name: "Espresso Affogato",
            description: "Vanilla gelato topped with hot espresso shot",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/affogato.png",
            price: 19.99,
            rating: 4.6,
            calories: 310,
            protein: 7,
            category_name: "Gelato",
            customizations: ["Extra Espresso Shot"],
        },
        {
            name: "Panini",
            description: "Grilled panini sandwich and fresh vegetables",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/panini.png",
            price: 32.99,
            rating: 4.8,
            calories: 710,
            protein: 34,
            category_name: "Panini",
            customizations: ["Extra Cheese", "Bacon", "Fries", "Coke"],
        },
        {
            name: "Risotto",
            description: "Creamy risotto cooked with mushroom and parmesan cheese",
            image_url:
                "https://ik.imagekit.io/2ryft96z2y/risottomush.png",
            price: 23.99,
            rating: 4.6,
            calories: 480,
            protein: 18,
            category_name: "Risotto",
            customizations: ["Extra Cheese", "Mushrooms", "Salad"],
        },
    ],
};

export default dummyData;

