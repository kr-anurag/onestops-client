import { v4 as uuid } from "uuid";

export const  cleaningServices = [
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
        title: "Bathroom & Kitchen Cleaning",
        path: "bathroom-kitchen-cleaning",
    },
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
        title: "Sofa & Carpet Cleaning",
        path: "sofa-carpet-cleaning",
    },
];

export const homeRepairServices = [
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
        title: "Home Furniture",
        path: "home-furniture",
    },
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
        title: "Carpenters",
        path: "carpenters",
    },
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg",
        title: "Electricians",
        path: "electrician-services",
    },
    {
        img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
        title: "Plumbers",
        path: "plumbers",
    },
];


export const ServicesDatabase = [
    {
        id: "salon-services",
        title: "Salon For Men",
        rating: 4.75,
        reviews: "975k",
        smallImg: [
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg",
                title: "Packages",
            },
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg",
                title: "Haircut for Men & Kids",
            },
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189933595-01692d.png",
                title: "Hair Color",
            },
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189957304-ea2a7b.png",
                title: "Shave/Beard Grooming",
            },
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189857376-d49e47.png",
                title: "Face Care",
            },
            {
                img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189905841-237b37.png",
                title: "Massage Therapy",
            },
        ],
        packages : [
            {
                id: uuid(),
                name: "Haircut + Beard Grooming + Massage",
                rating: "4.81 (243.1K)",
                price: 499,
                qty : 1,
                time: "1 hr 5 mins",
                list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
            },
            {
                id : uuid(),
                name: "Haircut + Massage",
                rating: "4.82 (258.7K)",
                price: 399,
                qty : 1,
                time: "50 mins",
                list: ["Mens Haircut", "20 min Head Massage"],
            },
            {
                id: uuid(),
                name: "Father & Kids Haircut",
                rating: "4.82 (232.9K)",
                price: 499,
                qty : 1,
                time: "1 hr 10 mins",
                list: ["Mens Haircut", "Kids Haircut(Boys)", "10 min Head Massage"],
            },
            {
                id : uuid(),
                name: "Haircut + Hair Color",
                rating: "4.82 (243.1K)",
                price: 499,
                qty : 1,
                time: "60 mins",
                list: ["Mens Haircut", "Beard Shape & Style", "10 min Head Massage"],
            },
        ]
    },{
        id: "electrician-services",
        title: "Electrician Service",
        rating: 4.85,
        reviews: "500K",
        smallImg: [
            {
                img: "https://res.cloudinary.com/your-image-path/switch-services.jpg",
                title: "Switch Service",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/fan-services.jpg",
                title: "Fan Service",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/light-services.jpg",
                title: "Light Installation",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/appliance-repair.jpg",
                title: "Appliance Repair",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/wiring.jpg",
                title: "Wiring Service",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/inverter.jpg",
                title: "Inverter Service",
            },
        ],  packages: [
            {
                id: uuid(),
                name: "Switch & Socket Services",
                rating: "4.80 (120K)",
                price: 300,
                qty: 1,
                time: "30-45 mins",
                list: ["Switch Replacement", "Socket Replacement", "Switchboard Repair"],
            },
            {
                id: uuid(),
                name: "Fan Installation & Repair",
                rating: "4.85 (110K)",
                price: 400,
                qty: 1,
                time: "45-60 mins",
                list: ["Ceiling Fan Installation", "Fan Regulator Replacement", "Exhaust Fan Repair"],
            },
            {
                id: uuid(),
                name: "Light Installation & Repair",
                rating: "4.78 (95K)",
                price: 350,
                qty: 1,
                time: "40-50 mins",
                list: ["Wall Light Installation", "Ceiling Light Installation", "Chandelier Installation"],
            },
            {
                id: uuid(),
                name: "Wiring & Doorbell Services",
                rating: "4.82 (85K)",
                price: 500,
                qty: 1,
                time: "60-90 mins",
                list: ["New Wiring (5m)", "Doorbell Installation", "MCB/Fuse Installation"],
            },
            {
                id: uuid(),
                name: "Inverter & Stabilizer Services",
                rating: "4.79 (70K)",
                price: 800,
                qty: 1,
                time: "90-120 mins",
                list: ["Inverter Installation", "Stabilizer Installation", "Inverter Servicing"],
            },
        ],
        notes: [
            "Provide a ladder if required.",
            "Wiring of more than 2m will cost extra.",
            "Warranty doesn't cover spare parts sourced by customers.",
        ],
        contacts: [
            {
                name: "Ravi Sharma",
                rating: 4.9,
                phone: "+91 98765 43210",
            },
            {
                name: "Amit Kumar",
                rating: 4.8,
                phone: "+91 87654 32109",
            },
        ],
    },
]

export const sampleTestimonials = [
    {
        name: "John Doe",
        rating: 5,
        text: "Great service! Highly recommend.",
        avatar: "https://bit.ly/dan-abramov",
    },
    {
        name: "Jane Smith",
        rating: 4,
        text: "Very satisfied with the service.",
        avatar: "https://bit.ly/kent-c-dodds",
    },
    {
        name: "Alice Johnson",
        rating: 5,
        text: "Exceptional quality and customer service.",
        avatar: "https://bit.ly/prosper-baba",
    },
    {
        name: "Bob Brown",
        rating: 3,
        text: "Good, but there's room for improvement.",
        avatar: "https://bit.ly/ryan-florence",
    },
    {
        name: "Charlie Davis",
        rating: 4,
        text: "Very professional and timely.",
        avatar: "https://bit.ly/code-beast",
    },
];

