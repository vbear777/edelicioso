const dummyData = {
    categories: [
        { name: "Pizzas", description: "Oven-baked pizzas with original Italian taste" },
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

        // Sides & Drinks
        { name: "Garlic Bread", price: 25, type: "side" },
        { name: "Fries", price: 30, type: "side" },
        { name: "Salad", price: 28, type: "side" },
        { name: "Mozzarella Sticks", price: 35, type: "side" },
        { name: "Coke", price: 15, type: "drink" },
        { name: "Iced Tea", price: 15, type: "drink" },
    ],

    menu: [
        {
            name: "Classic Margherita Pizza",
            description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/058/700/845/large_2x/free-isolated-on-transparent-background-delicious-pizza-topped-with-fresh-tomatoes-basil-and-melted-cheese-perfect-for-food-free-png.png",
            price: 26.99,
            rating: 4.3,
            calories: 580,
            protein: 20,
            category_name: "Pizzas",
            customizations: ["Extra Cheese", "Olives", "Mushrooms", "Garlic Bread"],
        },
        {
            name: "Spaghetti Alle Vongole",
            description: "Classic Italian spaghetti with fresh clams, garlic, olive oil, and parsley",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/056/292/284/large_2x/spaghetti-alle-vongole-with-clams-garlic-and-parsley-isolated-on-transparent-background-free-png.png",
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
                "https://static.vecteezy.com/system/resources/previews/055/133/581/large_2x/deliciously-grilled-burritos-filled-with-beans-corn-and-fresh-vegetables-served-with-lime-wedge-and-cilantro-isolated-on-transparent-background-free-png.png",
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
                "https://static.vecteezy.com/system/resources/previews/060/236/245/large_2x/a-large-hamburger-with-cheese-onions-and-lettuce-free-png.png",
            price: 27.5,
            rating: 4.6,
            calories: 640,
            protein: 24,
            category_name: "Pasta",
            customizations: ["Extra Cheese", "Bacon", "Mushrooms"],
        },
        {
            name: "Gelato",
            description: "Smooth and creamy Italian vanilla gelato",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/048/930/603/large_2x/caesar-wrap-grilled-chicken-isolated-on-transparent-background-free-png.png",
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
                "https://static.vecteezy.com/system/resources/previews/047/832/012/large_2x/grilled-sesame-seed-bread-veggie-sandwich-with-tomato-and-onion-free-png.png",
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
                "https://static.vecteezy.com/system/resources/previews/060/359/627/large_2x/double-cheeseburger-with-lettuce-tomatoes-cheese-and-sesame-bun-free-png.png",
            price: 32.99,
            rating: 4.8,
            calories: 710,
            protein: 34,
            category_name: "Panini",
            customizations: ["Extra Cheese", "Bacon", "Fries", "Coke"],
        },
        {
            name: "Risotto",
            description: "Creamy risotto cooked with shrimp and parmesan cheese",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/057/913/530/large_2x/delicious-wraps-a-tantalizing-array-of-wraps-filled-with-vibrant-vegetables-succulent-fillings-and-fresh-ingredients-artfully-arranged-for-a-mouthwatering-culinary-experience-free-png.png",
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



/*
const dummyData = {
    categories: [
        // Main menu
        { name: "Pizzas", description: "Oven-baked pizzas with original taste" },
        { name: "Pasta", description: "Creamy and savory Italian pasta dishes" },
        { name: "Spaghetti", description: "Classic spaghetti with signature sauces" },
        { name: "Gelato", description: "Smooth and refreshing Italian ice cream" },
        { name: "Panini", description: "Grilled Italian sandwiches with fillings" },
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

        // Sides
        { name: "Ravioli", price: 30, type: "side" },
        { name: "Onion Rings", price: 35, type: "side" },
        { name: "Mozarella Sticks", price: 40, type: "side" },
        { name: "Coleslaw", price: 50, type: "side" },
        { name: "Salad", price: 33, type: "side" },
    ],

    menu: [
        {
            name: "Classic Margherita Pizza",
            description: "Tomato, mozzarella, fresh basil",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/058/700/845/large_2x/free-isolated-on-transparent-background-delicious-pizza-topped-with-fresh-tomatoes-basil-and-melted-cheese-perfect-for-food-free-png.png",
            price: 26.99,
            rating: 4.1,
            calories: 590,
            protein: 21,
            category_name: "Pizzas",
            customizations: ["Extra Cheese", "Olives", "Coke", "Garlic Bread"],
        },
        {
            name: "Spaghetti Alle Vongole",
            description: "Loaded with cheese and pepperoni slices",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/023/742/417/large_2x/pepperoni-pizza-isolated-illustration-ai-generative-free-png.png",
            price: 30.99,
            rating: 4.7,
            calories: 700,
            protein: 30,
            category_name: "Pizzas",
            customizations: [
                "Extra Cheese",
                "Jalapeños",
                "Garlic Bread",
                "Coke",
                "Olives",
            ],
        },
        {
            name: "Spaghetti Bolognese",
            description: "Stuffed with beans, rice, salsa",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/055/133/581/large_2x/deliciously-grilled-burritos-filled-with-beans-corn-and-fresh-vegetables-served-with-lime-wedge-and-cilantro-isolated-on-transparent-background-free-png.png",
            price: 20.99,
            rating: 4.2,
            calories: 480,
            protein: 18,
            category_name: "Burritos",
            customizations: ["Jalapeños", "Iced Tea", "Fries", "Salad"],
        },
        {
            name: "Pasta Artichoke",
            description: "Smoky BBQ sauce, crispy bacon, cheddar",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/060/236/245/large_2x/a-large-hamburger-with-cheese-onions-and-lettuce-free-png.png",
            price: 27.5,
            rating: 4.8,
            calories: 650,
            protein: 29,
            category_name: "Burgers",
            customizations: ["Onions", "Fries", "Coke", "Bacon", "Avocado"],
        },
        {
            name: "Gelato",
            description: "Grilled chicken, lettuce, Caesar dressing",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/048/930/603/large_2x/caesar-wrap-grilled-chicken-isolated-on-transparent-background-free-png.png",
            price: 21.5,
            rating: 4.4,
            calories: 490,
            protein: 28,
            category_name: "Wraps",
            customizations: ["Extra Cheese", "Coke", "Potato Wedges", "Tomatoes"],
        },
        {
            name: "Espresso Affogato",
            description: "Roasted veggies, pesto, cheese",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/047/832/012/large_2x/grilled-sesame-seed-bread-veggie-sandwich-with-tomato-and-onion-free-png.png",
            price: 19.99,
            rating: 4.1,
            calories: 420,
            protein: 19,
            category_name: "Sandwiches",
            customizations: ["Mushrooms", "Olives", "Mozzarella Sticks", "Iced Tea"],
        },
        {
            name: "Panini",
            description: "Two juicy beef patties and cheese",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/060/359/627/large_2x/double-cheeseburger-with-lettuce-tomatoes-cheese-and-sesame-bun-free-png.png",
            price: 32.99,
            rating: 4.9,
            calories: 720,
            protein: 35,
            category_name: "Burgers",
            customizations: [
                "Extra Cheese",
                "Onions",
                "Fries",
                "Coke",
                "Chicken Nuggets",
            ],
        },
        {
            name: "Risotto",
            description: "Spicy paneer, mint chutney, veggies",
            image_url:
                "https://static.vecteezy.com/system/resources/previews/057/913/530/large_2x/delicious-wraps-a-tantalizing-array-of-wraps-filled-with-vibrant-vegetables-succulent-fillings-and-fresh-ingredients-artfully-arranged-for-a-mouthwatering-culinary-experience-free-png.png",
            price: 23.99,
            rating: 4.6,
            calories: 470,
            protein: 20,
            category_name: "Wraps",
            customizations: ["Jalapeños", "Tomatoes", "Salad", "Fries", "Iced Tea"],
        },
    ],
};

export default dummyData;
*/