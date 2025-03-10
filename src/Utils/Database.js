import { v4 as uuid } from "uuid";

export const getTopServices = () => {
    const otherService =  {
            img: "https://ik.imagekit.io/ulyn7697x/customer-service.png?updatedAt=1740976487463",
            title: "Other Services",
            path: "",
        }
    return ServicesDatabase.map((service) => {
        return {
            title: service.shortTitle,
            img: service.icon,
            path: service.id,
            tag: service.tag,
        };
    }).slice(0, 5).concat(otherService);
}

export const getAllServices = () => {
    return ServicesDatabase.map((service) => {
        return(
            {
                title: service.shortTitle,
                path: service.id,
                img: service.img,
                tag: service.tag,
                ratings: service.ratings,

            }
        )
    })
}

export const ServicesDatabase = [
    {
        "id": "electrician-services",
        "title": "Electrician Services",
        "icon": "https://ik.imagekit.io/ulyn7697x/electrician%20(1).png?updatedAt=1740831155688",
        "shortTitle": "Electricians",
        "img": "https://ik.imagekit.io/ulyn7697x/c51405fecd029f91ae69e8bedfeeabeb.jpg?updatedAt=1740982112780",
        "tag": "Most Ordered",
        "ratings": 4.5,
        "packages": [
            {
                "id": "switch-services",
                "name": "Switch Related Services",
                "img": "https://public.readdy.ai/ai/img_res/1ab843c2299661d23d26802b76ecd5b3.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/fdff63a5f3b46fa6a4332afd7fefd446.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/0962f630dfd714d95932deabc2ea2705.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/e80a0680688f579a094aa3abc200f5cd.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/161fa148a2e57808ed8ced10fcb27d4a.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/fea8e99a1dbbba8fb13fa8d9a6dbd14c.jpg",
                "time": "30-40 mins",
                "list": [
                    "Doorbell installation",
                    "Doorbell replacement"
                ]
            },
            {
                "id": "mcb-services",
                "name": "MCB & Submeter",
                "img": "https://public.readdy.ai/ai/img_res/33a2cf450d0b2d6b034ec977af01130f.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/47816951083c829585c25feba29cad02.jpg",
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
        "icon": "https://ik.imagekit.io/ulyn7697x/plumber%20(1).png?updatedAt=1740853653226",
        "img": "https://ik.imagekit.io/ulyn7697x/9e4f03a71df8bd5d310b18dbd3e71540.jpg?updatedAt=1740982108434",
        "shortTitle": "Plumbers",
        "ratings": 4.2,
        "packages": [
            {
                "id": "uuid()",
                "name": "Tap & Mixer",
                "img": "https://public.readdy.ai/ai/img_res/99dc4d88d1e6f15300da3d986184ece6.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/12d6b36b8fb09e2d23c96fee42c3521d.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/2991cba5e6ccf71ad3e0daf508f49ed6.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/185d983898278c0bdaf16b9e114482b3.jpg",
                "time": "30-40 mins",
                "list": [
                    "Wash basin repair",
                    "Wash basin installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Drainage",
                "img": "https://public.readdy.ai/ai/img_res/4701254cab03ab1f4a37b9056ab98930.jpg",
                "time": "30-40 mins",
                "list": [
                    "Drain cover installation",
                    "Blockage removal"
                ]
            },
            {
                "id": "uuid()",
                "name": "Water Pipes",
                "img": "https://public.readdy.ai/ai/img_res/1a92571e3b1c8c6c47524af2c8b7ae16.jpg",
                "time": "30-40 mins",
                "list": [
                    "Connection hose installation",
                    "Connection hose uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Water Tank Repair",
                "img": "https://public.readdy.ai/ai/img_res/7dec3d4c9411a9ecb0ec23e7e7513867.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/5e17c20659463734f070c6d9c17eb0b6.jpg",
                "list": [
                    "Motor air cavity removal",
                    "Motor installation/replacement"
                ]
            },
            {
                "id": "uuid()",
                "name": "Grouting",
                "img": "https://public.readdy.ai/ai/img_res/700d03f3d853613b454871130104a4f3.jpg",
                "time": "30-45 mins",
                "list": [
                    "Bathroom tile grouting",
                    "Kitchen tile grouting"
                ]
            }
        ]
    },
    {
        "id": "carpenter-services",
        "title": "Carpenter Services",
        "icon": "https://ik.imagekit.io/ulyn7697x/woman.png?updatedAt=1740831155914",
        "img": "https://ik.imagekit.io/ulyn7697x/86f8fe318aa84c3a8dc23a7457963375.jpg?updatedAt=1740982108305",
        "shortTitle": "Carpenters",
        "ratings": 4.7,
        "packages": [
            {
                "id": "uuid()",
                "name": "Cupboard & Drawer",
                "img": "https://public.readdy.ai/ai/img_res/ae0aef34113e8f9d9c001f27a19f5543.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/495a4655262e5b3cb8659bfd12166f43.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/1f659023341b353a9d7ebde4f136118f.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/403eab47747ead907b76d8e3fa65aeca.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/dd419f9ecd58cbf70ed346efd58627d0.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/1e8c8f02a4c20384dccc3385ef18b07c.jpg",
                "time": "30-40 mins",
                "list": [
                    "Ceiling-mounted hanger installation",
                    "Wall/door hanger installation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Furniture Repair",
                "img": "https://public.readdy.ai/ai/img_res/1b2c690f56c96763ee4966a6c62517ef.jpg",
                "time": "30-40 mins",
                "list": [
                    "Table/chair wheels fitting",
                    "Plastic buffer installation (up to 4)"
                ]
            }
        ]
    },
    {
        "id": "appliance-services",
        "title": "Appliance Repair Services",
        "icon": "https://ik.imagekit.io/ulyn7697x/technician.png?updatedAt=1740853791687",
        "img": "https://ik.imagekit.io/ulyn7697x/71d56df0b76fe646babd8d137382b495.jpg?updatedAt=1740982108586",
        "shortTitle": "Appliance Repair",
        "ratings": 3.9,
        "packages": [
            {
                "id": "uuid()",
                "name": "A/C Repair and Services",
                "img": "https://public.readdy.ai/ai/img_res/977688b11f80fa24354977706406b8dd.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/c6247523d3432a02067d095d21f47308.jpg",
                "time": "Varies",
                "list": [
                    "AC Installation",
                    "AC Uninstallation"
                ]
            },
            {
                "id": "uuid()",
                "name": "Air Cooler Repair",
                "img": "https://public.readdy.ai/ai/img_res/bbdcc645ca344b449966de6cb6d431bb.jpg",
                "time": "Varies",
                "list": [
                    "Air cooler repair",
                    "Air cooler services"
                ]
            },
            {
                "id": "uuid()",
                "name": "Geyser Repair",
                "img": "https://public.readdy.ai/ai/img_res/9a2ef11649523854d12a4236aa715523.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/65cca96b22f1c021c4a1315dad6b8252.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/8e19cf37e2a067832fcaf69128fe7bfb.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/84e3a54670820c69faae8ca609d5dbf2.jpg",
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
                "img": "https://ik.imagekit.io/ulyn7697x/noimage.jpg?updatedAt=1741240200131",
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
                "img": "https://ik.imagekit.io/ulyn7697x/noimage.jpg?updatedAt=1741240200131",
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
        "icon": "https://ik.imagekit.io/ulyn7697x/painter%20(1).png?updatedAt=1740831438506",
        "img": "https://ik.imagekit.io/ulyn7697x/80c5407b7a53cdcb2a6b905dd8716501.jpg?updatedAt=1740982109014",
        "shortTitle": "Painter",
        "ratings": 4.3,
        "packages": [
            {
                "id": "uuid()",
                "name": "General Painting",
                "time": "Varies",
                "img": "https://public.readdy.ai/ai/img_res/e942eb1b8892920a5d530eb63de32a72.jpg",
                "list": [
                    "Few walls",
                    "Bedroom 1,2,3, price according to rooms",
                    "Living room",
                    "Living & dining room",
                    "Lobby",
                    "Multiple room 2 or more cost",
                    "Full home 1BHK",
                    "2 BHK",
                    "3 BHK"
                ]
            },
            {
                "id": "uuid()",
                "name": "Kitchen & Bathroom",
                "img": "https://public.readdy.ai/ai/img_res/e942eb1b8892920a5d530eb63de32a72.jpg",
                "time": "Varies",
                "list": [
                    "Kitchen",
                    "Bathroom"
                ]
            },
            {
                "id": "uuid()",
                "name": "Outdoor & Washing Area",
                "img": "https://public.readdy.ai/ai/img_res/e942eb1b8892920a5d530eb63de32a72.jpg",
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
                "img": "https://public.readdy.ai/ai/img_res/e942eb1b8892920a5d530eb63de32a72.jpg",
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
        "id": "laundry-services",
        "title": "Laundry",
        "img": "https://ik.imagekit.io/ulyn7697x/laundary_uPQf12XuVG?updatedAt=1741172526408",
        "shortTitle": "Laundry",
        "path": "laundry-services",
        "tag": "Newly Added",
        "ratings": 4.6,
        "packages": [
            {
                "id": "uuid()",
                "name": "Home Clothes",
                "img": "https://public.readdy.ai/ai/img_res/81f43fb05fa32d30912aad7432d7e388.jpg",
                "time": "Depends upon quantity",
                "list": [
                    "Washing",
                    "Ironing",
                    "Folding"
                ]
            },
            {
                "id": "uuid()",
                "name": "Hotels Clothes",
                "img": "https://public.readdy.ai/ai/img_res/a824ebf11feeace37cc1cd8ed36f8a44.jpg",
                "time": "Depends upon quantity",
                "list": [
                    "Bulk Washing",
                    "Dry Cleaning",
                    "Folding"
                ]
            },
            {
                "id": "uuid()",
                "name": "Gaalicha Washing",
                "img": "https://public.readdy.ai/ai/img_res/ffc54527847ec0672d6e217d71b254b9.jpg",
                "time": "Depends upon quantity",
                "list": [
                    "Deep Carpet Cleaning",
                    "Drying",
                    "Vacuuming"
                ]
            },
            {
                "id": "uuid()",
                "name": "Shoes Washing",
                "img": "https://public.readdy.ai/ai/img_res/d2023a9f71d2d660aac25de236faf3af.jpg",
                "time": "Depends upon quantity",
                "list": [
                    "Shoe Cleaning",
                    "Deodorizing",
                    "Polishing"
                ]
            }
        ]
    },
    {
        "id": "tiffin-services",
        "title": "Tiffin Services",
        "img": "https://ik.imagekit.io/ulyn7697x/Untitled%20design%20(2).png?updatedAt=1741169254608",
        "shortTitle": "Tiffin",
        "path": "tiffin-services",
        "tag": "Newly Added",
        "ratings": 4.7,
        "packages": [
            {
                "id": "uuid()",
                "name": "Mess Tiffin",
                "img": "https://public.readdy.ai/ai/img_res/24277a804f68e273772378491e8c9b9c.jpg",
                "time": "1 month",
                "list": [
                    "Breakfast + Lunch + Dinner",
                    "Veg Meals",
                    "Daily Fresh"
                ]
            },
            {
                "id": "uuid()",
                "name": "Office Tiffin",
                "img": "https://public.readdy.ai/ai/img_res/391ec43755d179bae7f63b25d219a28e.jpg",
                "time": "1 month",
                "list": [
                    "Lunch Only",
                    "Varied Menu",
                    "Healthy & Hygienic"
                ]
            },
            {
                "id": "uuid()",
                "name": "Home Tiffin",
                "img": "https://public.readdy.ai/ai/img_res/6fb48c51c2a9e7288ef0797e474584ef.jpg",
                "time": "1 month",
                "list": [
                    "Lunch + Dinner",
                    "Home-Cooked Style",
                    "Customizable"
                ]
            }
        ]
    },
    {
        "id": "dairy-products",
        "title": "Dairy Products",
        "img": "https://ik.imagekit.io/onestops/WhatsApp%20Image%202025-03-09%20at%2023.54.54.jpeg?updatedAt=1741544807634",
        "shortTitle": "Dairy",
        "path": "dairy-products",
        "tag": "Newly Added",
        "ratings": 4.9,
        "packages": [
            {
                "id": "uuid()",
                "name": "Milk Delivery",
                "img": "https://ik.imagekit.io/onestops/WhatsApp%20Image%202025-03-09%20at%2022.24.48.jpeg?updatedAt=1741539331333",
                "time": "Renews after every 1 month",
                "list": [
                    "Buffalo Milk",
                    "Cow's Milk",
                    "Goat's Milk",
                    "Customizable"
                ]
            },
            {
                "id": "uuid()",
                "name": "Fresh Yogurt",
                "img": "https://ik.imagekit.io/onestops/WhatsApp%20Image%202025-03-09%20at%2023.54.54(1).jpeg?updatedAt=1741544879965",
                "time": "Renews after every 1 month",
                "list": [
                    "Tangy Curd",
                    "Sweet Curd",
                    "Customizable"
                ]
            },
            {
                "id": "uuid()",
                "name": "Paneer",
                "img": "https://ik.imagekit.io/onestops/WhatsApp%20Image%202025-03-10%20at%2000.00.17.jpeg?updatedAt=1741545047941",
                "time": "Renews after every 1 month",
                "list": [
                    "Low-fat Paneer",
                    "Soft Paneer",
                    "Customizable"
                ]
            }
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


