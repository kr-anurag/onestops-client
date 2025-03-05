import { v4 as uuid } from "uuid";

export const topServices = [
    {
        img: "https://ik.imagekit.io/ulyn7697x/electrician%20(1).png?updatedAt=1740831155688",
        title: "Electricians",
        path: "electrician-services",
        tag: "Most Ordered",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/technician.png?updatedAt=1740853791687",
        title: "Appliance Repair",
        path: "appliance-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/woman.png?updatedAt=1740831155914",
        title: "Carpenters",
        path: "carpenter-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/plumber%20(1).png?updatedAt=1740853653226",
        title: "Plumbers",
        path: "plumber-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/painter%20(1).png?updatedAt=1740831438506",
        title: "Painters",
        path: "painting-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/customer-service.png?updatedAt=1740976487463",
        title: "Other Services",
        path: "",
    },
];



export const allServices = [
    {
        img: "https://ik.imagekit.io/ulyn7697x/86f8fe318aa84c3a8dc23a7457963375.jpg?updatedAt=1740982108305",
        title: "Home Furniture & Carpenters",
        path: "carpenter-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/c51405fecd029f91ae69e8bedfeeabeb.jpg?updatedAt=1740982112780",
        title: "Electricians",
        path: "electrician-services",
        tag: "Most Ordered",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/9e4f03a71df8bd5d310b18dbd3e71540.jpg?updatedAt=1740982108434",
        title: "Plumbers",
        path: "plumber-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/71d56df0b76fe646babd8d137382b495.jpg?updatedAt=1740982108586",
        title: "Appliance Repair",
        path: "appliance-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/80c5407b7a53cdcb2a6b905dd8716501.jpg?updatedAt=1740982109014",
        title: "Painting & Waterproofing",
        path: "painting-services",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/laundary_uPQf12XuVG?updatedAt=1741172526408",
        title: "Laundry",
        path: "laundry-services",
        tag: "Newly Added",
    },
    {
        img: "https://ik.imagekit.io/ulyn7697x/Untitled%20design%20(2).png?updatedAt=1741169254608",
        title: "Tiffin Services",
        path: "tiffin-services",
        tag: "Newly Added",
    },
];

export const ServicesDatabase = [
    {
        "id": "electrician-services",
        "title": "Electrician Services",
        "smallImg": [
            {
                "img": "https://ik.imagekit.io/ulyn7697x/switch.png?updatedAt=1740977784661",
                "title": "Switch Related Services"
            },
            {
                "img": "https://ik.imagekit.io/ulyn7697x/air-conditioner.png?updatedAt=1740977890072",
                "title": "Fan Related Works"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/light-services.jpg",
                "title": "Wall/Ceiling Light Related Works"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/appliance-services.jpg",
                "title": "Appliance Related Works"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/wiring-services.jpg",
                "title": "Wiring Related Works"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/doorbell-services.jpg",
                "title": "Doorbell Related Works"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/mcb-services.jpg",
                "title": "MCB & Submeter"
            },
            {
                "img": "https://res.cloudinary.com/your-image-path/inverter-services.jpg",
                "title": "Inverter & Stabiliser"
            }
        ],
        "packages": [
            {
                "id": "switch-services",
                "name": "Switch Related Services",
                "time": "30-45 mins",
                "list": [
                    "Switch replacement",
                    "Socket replacement",
                    "Switchboard installing",
                    "A/C Switchbox installing",
                    "Switchboard repair"
                ]
            },
            {
                "id": "fan-services",
                "name": "Fan Related Works",
                "time": "45-60 mins",
                "list": [
                    "Fan regulator replacement",
                    "Fan repair (ceiling/wall/exhaust)",
                    "Ceiling fan installing",
                    "Exhaust fan installing",
                    "Wall fan installing",
                    "Decorative ceiling fan installing",
                    "Fan uninstalling (ceiling/wall/exhaust)"
                ]
            },
            {
                "id": "light-services",
                "name": "Wall/Ceiling Light Related Works",
                "time": "30-40 mins",
                "list": [
                    "Wall light installation",
                    "Ceiling light installation",
                    "Bulb/Bulb holder installation",
                    "Bathroom light installation",
                    "False ceiling light installation",
                    "Decorative light installation",
                    "Decorative light uninstallation (per 5m)",
                    "Chandelier installation",
                    "CFL to LED Replacement"
                ]
            },
            {
                "id": "appliance-services",
                "name": "Appliance Related Works",
                "time": "60-90 mins",
                "list": [
                    "Room heater repair",
                    "Kaban airzone installation",
                    "Karba airzone lite installation",
                    "TV installation/uninstallation",
                    "Mini home theatre installation"
                ]
            },
            {
                "id": "wiring-services",
                "name": "Wiring Related Works",
                "time": "60-90 mins",
                "list": [
                    "New wiring with casing (per 5m)",
                    "New wiring without casing (per 5m)",
                    "New internal wiring (per 5m)"
                ]
            },
            {
                "id": "doorbell-services",
                "name": "Doorbell Related Works",
                "time": "30-40 mins",
                "list": [
                    "Doorbell installation",
                    "Doorbell replacement"
                ]
            },
            {
                "id": "mcb-services",
                "name": "MCB & Submeter",
                "time": "30-40 mins",
                "list": [
                    "MCB/Fuse installation",
                    "MCB/Fuse replacement",
                    "Submeter installation",
                    "3-phase changeover switch installation"
                ]
            },
            {
                "id": "inverter-services",
                "name": "Inverter & Stabiliser",
                "time": "30-40 mins",
                "list": [
                    "Inverter installation",
                    "Stabiliser installation",
                    "Inverter fuse replacement",
                    "Inverter servicing (Terminal dust removal & distilled water top-up)"
                ]
            }
        ],
        "notes": [
            "Provide a ladder if required.",
            "Wiring of more than 2m will cost extra.",
            "Warranty doesn't cover spare parts sourced by the customer."
        ]
    },
    {
        "id": "plumber-services",
        "title": "Plumber Services",
        "smallImg": [
            { "img": "placeholder.jpg", "title": "Tap & Mixer" },
            { "img": "placeholder.jpg", "title": "Toilet Related Services" },
            { "img": "placeholder.jpg", "title": "Bath Fittings" },
            { "img": "placeholder.jpg", "title": "Basin & Sink" },
            { "img": "placeholder.jpg", "title": "Drainage" },
            { "img": "placeholder.jpg", "title": "Water Pipes" },
            { "img": "placeholder.jpg", "title": "Water Tank Repair" },
            { "img": "placeholder.jpg", "title": "Motor" },
            { "img": "placeholder.jpg", "title": "Grouting" }
        ],
        "packages": [
            {
                "id": "uuid()",
                "name": "Tap & Mixer",
                "time": "30-45 mins",
                "list": [
                    "Tap repair",
                    "Tap installation/replacement",
                    "Water nozzle installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Toilet Related Services",
                "time": "45-60 mins",
                "list": [
                    "Flush tank repair",
                    "Flush tank replacement",
                    "Toilet installation/replacement",
                    "Toilet repair",
                    "Toilet pot blockage removal"
                ]
            },
            {
                "id": "uuid()",
                "name": "Bath Fittings",
                "time": "30-40 mins",
                "list": [
                    "Jet spray installation/repair",
                    "Toilet seat cover installation",
                    "Shower installation",
                    "Minor fittings installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Basin & Sink",
                "time": "30-40 mins",
                "list": [
                    "Wash basin repair",
                    "Wash basin installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Drainage",
                "time": "30-40 mins",
                "list": [
                    "Drain cover installation",
                    "Blockage removal"
                ]
            },
            {
                "id": "uuid()",
                "name": "Water Pipes",
                "time": "30-40 mins",
                "list": [
                    "Connection hose installation",
                    "Connection hose uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Water Tank Repair",
                "time": "60-90 mins",
                "list": [
                    "Water tank repair",
                    "Overhead water tank installing",
                    "Overhead water tank cleaning",
                    "Underground water tank cleaning",
                    "Water meter installing"
                ]
            },
            {
                "id": "uuid()",
                "name": "Motor",
                "time": "30-45 mins",
                "list": [
                    "Motor air cavity removal",
                    "Motor installation/replacement"
                ]
            },
            {
                "id": "uuid()",
                "name": "Grouting",
                "time": "30-45 mins",
                "list": [
                    "Bathroom tile grouting",
                    "Kitchen tile grouting"
                ]
            }
        ]
    },{
        "id": "carpenter-services",
        "title": "Carpenter Services",
        "smallImg": [
            { "img": "placeholder.jpg", "title": "Cupboard & Drawer" },
            { "img": "placeholder.jpg", "title": "Drill & Hang Services" },
            { "img": "placeholder.jpg", "title": "Door Services" },
            { "img": "placeholder.jpg", "title": "Windows and Curtain" },
            { "img": "placeholder.jpg", "title": "Bed Related Services" },
            { "img": "placeholder.jpg", "title": "Clothes Hangers" },
            { "img": "placeholder.jpg", "title": "Furniture Repair" },
            { "img": "placeholder.jpg", "title": "Carpenter Visit" }
        ],
        "packages": [
            {
                "id": "uuid()",
                "name": "Cupboard & Drawer",
                "time": "30-45 mins",
                "list": [
                    "Cupboard hinge installation (up to 2)",
                    "Cupboard channel repair (1 set)",
                    "Cupboard lock repair",
                    "Cupboard lock installation",
                    "Cupboard lock replacement",
                    "Glass shelf installation",
                    "Wooden shelf installation",
                    "Handle installation",
                    "Handle installation/replacement"
                ]
            },
            {
                "id": "uuid()",
                "name": "Drill & Hang Services",
                "time": "30-40 mins",
                "list": [
                    "Drill & hang (wall decor)",
                    "Bath fitting installation (one unit)",
                    "Bathroom mirror installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Door Services",
                "time": "45-60 mins",
                "list": [
                    "Accessory installation/replacement",
                    "Door lock replacement",
                    "Door lock repair",
                    "Door lock installation",
                    "Door repair",
                    "Wooden sliding door repairs",
                    "Door hinge installation (up to 4)",
                    "Wooden door installation",
                    "Door closer installation (overhead)",
                    "Door closer installation (wall-mounted)",
                    "Mesh grill door repair/replacement",
                    "Mesh replacement",
                    "Peephole installation",
                    "Door latch/aldrop installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Windows and Curtain",
                "time": "30-40 mins",
                "list": [
                    "Curtain rod installation (2 brackets)",
                    "Non-Motorized blinds fitting (up to 5ft)",
                    "Shower curtain rod (2 brackets)",
                    "Window grill installation",
                    "Window hinge installation (up to 4)",
                    "Window A/C Frame installation",
                    "Motorized blinds fittings (up to 5ft)",
                    "Curtain blinds measurement"
                ]
            },
            {
                "id": "uuid()",
                "name": "Bed Related Services",
                "time": "30-45 mins",
                "list": [
                    "Bed support repair",
                    "Bed legs/Headboard repair",
                    "New bed making"
                ]
            },
            {
                "id": "uuid()",
                "name": "Clothes Hangers",
                "time": "30-40 mins",
                "list": [
                    "Ceiling-mounted hanger installation",
                    "Wall/door hanger installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Furniture Repair",
                "time": "30-40 mins",
                "list": [
                    "Table/chair wheels fitting",
                    "Plastic buffer installation (up to 4)"
                ]
            },
        ]
    },
    {
        "id": "appliance-services",
        "title": "Appliance Repair Services",
        "smallImg": [
            { "img": "placeholder.jpg", "title": "A/C Repair and Services" },
            { "img": "placeholder.jpg", "title": "Installation & Uninstallation" },
            { "img": "placeholder.jpg", "title": "Air Cooler Repair" },
            { "img": "placeholder.jpg", "title": "Geyser Repair" },
            { "img": "placeholder.jpg", "title": "Laptop Repair & Services" },
            { "img": "placeholder.jpg", "title": "Microwave Repair" },
            { "img": "placeholder.jpg", "title": "Refrigerator Repair" }
        ],
        "packages": [
            {
                "id": "uuid()",
                "name": "A/C Repair and Services",
                "time": "Varies",
                "list": [
                    "Power saver AC services",
                    "Anti-rust deep clean AC",
                    "Lite AC services",
                    "Repair & gas refill",
                    "A/C gas leak fix & refill"
                ]
            },
            {
                "id": "uuid()",
                "name": "Installation & Uninstallation",
                "time": "Varies",
                "list": [
                    "AC Installation",
                    "AC Uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Air Cooler Repair",
                "time": "Varies",
                "list": [
                    "Air cooler repair",
                    "Air cooler services"
                ]
            },
            {
                "id": "uuid()",
                "name": "Geyser Repair",
                "time": "Varies",
                "list": [
                    "Geyser repair",
                    "Geyser services",
                    "Geyser installation",
                    "Geyser uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Laptop Repair & Services",
                "time": "Varies",
                "list": [
                    "Quick home booking",
                    "Windows laptop repair",
                    "Desktop repair",
                    "Laptop & PC Services",
                    "RAM/Hard disk upgrade"
                ]
            },
            {
                "id": "uuid()",
                "name": "Microwave Repair",
                "time": "Varies",
                "list": [
                    "Button not working",
                    "Not working",
                    "Noise issue",
                    "Not heating",
                    "Unknown issue"
                ]
            },
            {
                "id": "uuid()",
                "name": "Refrigerator Repair",
                "time": "Varies",
                "list": [
                    "Single door refrigerator check-up",
                    "Double door refrigerator check-up",
                    "Double door refrigerator check-up (non-inverter)",
                    "Side-by-side door refrigerator check-up"
                ]
            },
            {
                "id": "uuid()",
                "name": "Television Repair",
                "time": "Varies",
                "list": [
                    "TV Repair",
                    "TV Installation",
                    "TV Uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Washing Machine Repair",
                "time": "Varies",
                "list": [
                    "Fully automatic washing machine check-up (Top load)",
                    "Fully automatic washing machine check-up (Front load)",
                    "Semi-automatic washing machine check-up",
                    "Washing machine installation",
                    "Washing machine uninstallation"
                ]
            }
        ]
    },
    {
        "id": "painting-services",
        "title": "Painting & Waterproofing",
        "smallImg": [
            { "img": "placeholder.jpg", "title": "painting work" },
            { "img": "placeholder.jpg", "title": "water proffing Works" },
        ],
        "packages": [
            {
                "id": "uuid()",
                "name": "General Painting",
                "time": "Varies",
                "list": [
                    "Few walls",
                    "Bedroom 1,2,3, price according to rooms",
                    "Living room",
                    "Living & dining room",
                    "Lobby",
                    "Multiple room 2 or more cost (12,998) UC",
                    "Full home 1BHK 10,999 UC Cost",
                    "2 BHK (14,849) UC Cost",
                    "3 BHK (22,524) UC Cost"
                ]
            },
            {
                "id": "uuid()",
                "name": "Kitchen & Bathroom",
                "time": "Varies",
                "list": [
                    "Kitchen",
                    "Bathroom"
                ]
            },
            {
                "id": "uuid()",
                "name": "Outdoor & Washing Area",
                "time": "Varies",
                "list": [
                    "Store room",
                    "Balcony",
                    "Washing area",
                    "Terrace"
                ]
            },
            {
                "id": "uuid()",
                "name": "Doors, Grills & Cabinets",
                "time": "Varies",
                "list": [
                    "Wooden door",
                    "Full wall grill painting",
                    "Balcony grill painting",
                    "Single door cabinet painting",
                    "Double door cabinet painting",
                    "Tile grouting"
                ]
            }
        ]
    },
    {
        id: "laundry-services",
        title: "Laundry",
        rating: 4.6,
        reviews: "350k",
        smallImg: [
            {
                img: "https://example.com/home-clothes.jpg",
                title: "Home Clothes",
            },
            {
                img: "https://example.com/hotels-clothes.jpg",
                title: "Hotels Clothes",
            },
            {
                img: "https://example.com/gaalicha-washing.jpg",
                title: "Gaalicha Washing",
            },
            {
                img: "https://example.com/shoes-washing.jpg",
                title: "Shoes Washing",
            }
        ],
        packages: [
            {
                id: uuid(),
                name: "Home Clothes Laundry",
                time: "Depends upon quantity",
                list: ["Washing", "Ironing", "Folding"],
            },
            {
                id: uuid(),
                name: "Hotels Clothes Laundry",
                time: "Depends upon quantity",
                list: ["Bulk Washing", "Dry Cleaning", "Folding"],
            },
            {
                id: uuid(),
                name: "Gaalicha Washing",
                time: "Depends upon quantity",
                list: ["Deep Carpet Cleaning", "Drying", "Vacuuming"],
            },
            {
                id: uuid(),
                name: "Shoes Washing",
                time: "Depends upon quantity",
                list: ["Shoe Cleaning", "Deodorizing", "Polishing"],
            },
        ]
    },{
        id: "tiffin-services",
        title: "Tiffin Services",
        rating: 4.7,
        reviews: "500k",
        smallImg: [
            {
                img: "https://example.com/mess.jpg",
                title: "Mess Tiffin",
            },
            {
                img: "https://example.com/office-tiffin.jpg",
                title: "Office Tiffin",
            },
            {
                img: "https://example.com/home-tiffin.jpg",
                title: "Home Tiffin",
            }
        ],
        packages: [
            {
                id: uuid(),
                name: "Mess Tiffin Plan",
                time: "1 month",
                list: ["Breakfast + Lunch + Dinner", "Veg Meals", "Daily Fresh"],
            },
            {
                id: uuid(),
                name: "Office Tiffin Plan",
                time: "1 month",
                list: ["Lunch Only", "Varied Menu", "Healthy & Hygienic"],
            },
            {
                id: uuid(),
                name: "Home Tiffin Plan",
                time: "1 month",
                list: ["Lunch + Dinner", "Home-Cooked Style", "Customizable"],
            }
        ]
    }
];


export const ServicesDatabaseBackup = [
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
    }
]

export const sampleTestimonials = [
    {
        name: "Prashant Jadhav",
        rating: 5,
        text: "The customer support is fantastic! They go above and beyond to ensure satisfaction. OneStop is my go-to service now!",
        avatar: "https://ik.imagekit.io/ulyn7697x/WhatsApp%20Image%202025-02-26%20at%2020.47.20.jpeg?updatedAt=1740584431348",
    },
    {
        name: "Suraj Sarfale",
        rating: 4,
        text: "I love how OneStop handles any request! I asked for something unique, and they found it for me effortlessly. Truly a one-stop solution",
        avatar: "https://ik.imagekit.io/ulyn7697x/WhatsApp%20Image%202025-02-26%20at%2020.46.29.jpeg?updatedAt=1740584431073",
    },
    {
        name: "Hemangi Rane",
        rating: 5,
        text: "Such a convenient service! I just told them what I needed, and they took care of everything. Hassle-free and super quick!",
        avatar: "https://ik.imagekit.io/ulyn7697x/WhatsApp%20Image%202025-02-26%20at%2020.46.55.jpeg?updatedAt=1740584430734",
    },
];


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
