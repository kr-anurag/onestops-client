import { v4 as uuid } from "uuid";

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
        title: "Electrician Services",
        rating: 4.85,
        reviews: "500K",
        smallImg: [
            {
                img: "https://res.cloudinary.com/your-image-path/switch-services.jpg",
                title: "Switch Services",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/fan-services.jpg",
                title: "Fan Services",
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
                title: "Wiring Services",
            },
            {
                img: "https://res.cloudinary.com/your-image-path/inverter.jpg",
                title: "Inverter Services",
            },
        ],
        services: [
            {
                id: uuid(),
                category: "Switch Related Services",
                list: [
                    { name: "Switch Replacement", price: 100 },
                    { name: "Socket Replacement", price: 120 },
                    { name: "Switchboard Installation", price: 250 },
                    { name: "A/C Switchbox Installation", price: 300 },
                    { name: "Switchboard Repair", price: 200 },
                ],
            },
            {
                id: uuid(),
                category: "Fan Related Works",
                list: [
                    { name: "Fan Regulator Replacement", price: 150 },
                    { name: "Ceiling Fan Repair", price: 250 },
                    { name: "Exhaust Fan Repair", price: 220 },
                    { name: "Ceiling Fan Installation", price: 300 },
                    { name: "Wall Fan Installation", price: 250 },
                    { name: "Decorative Ceiling Fan Installation", price: 400 },
                    { name: "Fan Uninstalling (Ceiling/Wall/Exhaust)", price: 180 },
                ],
            },
            {
                id: uuid(),
                category: "Wall/Ceiling Light Services",
                list: [
                    { name: "Wall Light Installation", price: 200 },
                    { name: "Ceiling Light Installation", price: 250 },
                    { name: "Bulb/Bulb Holder Installation", price: 100 },
                    { name: "Bathroom Light Installation", price: 150 },
                    { name: "False Ceiling Light Installation", price: 350 },
                    { name: "Decorative Light Installation", price: 500 },
                    { name: "Decorative Light Uninstallation (Per 5m)", price: 300 },
                    { name: "Chandelier Installation", price: 800 },
                    { name: "CFL to LED Replacement", price: 120 },
                ],
            },
            {
                id: uuid(),
                category: "Appliance Related Works",
                list: [
                    { name: "Room Heater Repair", price: 350 },
                    { name: "Kaban Airzone Installation", price: 600 },
                    { name: "Karba Airzone Lite Installation", price: 500 },
                    { name: "TV Installation/Uninstallation", price: 400 },
                    { name: "Mini Home Theatre Installation", price: 450 },
                ],
            },
            {
                id: uuid(),
                category: "Wiring Services",
                list: [
                    { name: "New Wiring with Casing (Per 5m)", price: 500 },
                    { name: "New Wiring without Casing (Per 5m)", price: 450 },
                    { name: "New Internal Wiring (Per 5m)", price: 550 },
                ],
            },
            {
                id: uuid(),
                category: "Doorbell Services",
                list: [
                    { name: "Doorbell Installation", price: 200 },
                    { name: "Doorbell Replacement", price: 150 },
                ],
            },
            {
                id: uuid(),
                category: "MCB & Submeter Services",
                list: [
                    { name: "MCB/Fuse Installation", price: 250 },
                    { name: "MCB/Fuse Replacement", price: 200 },
                    { name: "Submeter Installation", price: 450 },
                    { name: "3-Phase Changeover Switch Installation", price: 600 },
                ],
            },
            {
                id: uuid(),
                category: "Inverter & Stabilizer Services",
                list: [
                    { name: "Inverter Installation", price: 800 },
                    { name: "Stabilizer Installation", price: 600 },
                    { name: "Inverter Fuse Replacement", price: 200 },
                    { name: "Inverter Servicing (Dust Removal & Water Top-up)", price: 350 },
                ],
            },
            {
                id: uuid(),
                category: "Electrician Visit",
                list: [
                    { name: "Electrician Inspection & Quote", price: 100 },
                ],
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
