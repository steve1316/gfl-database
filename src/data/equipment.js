

var equipment = {
    opticalSight: {
        1: {
            name: "16Lab 6-24X56",
            rarity: 5,
            exclusive: false,
            usable: ["SMG", "AR", "MG", "RF", "SG"],
            description: "16Lab's optical sight of choice. Slap 16Lab's logo on a limited edition and you can sell it for ten times the price. Awesome, huh?",
            stats: {
                criticalHitRate: ["+24", "+26", "+28", "+31", "+33", "+36", "+38", "+40", "+43", "+45", "+48"]
            }
        },
        2: {
            name: "ACOG (4x)",
            rarity: 5,
            exclusive: true,
            usable: ["Agent 416"],
            description: "An optical sight that has been modified to the SHD's requirements. When fitted to a rifle, it improves effectiveness at middle to long range combat.",
            stats: {
                criticalHitRate: ["+24", "+26", "+28", "+31", "+33", "+36", "+38", "+40", "+43", "+45", "+48"]
            }
        },
        3: {
            name: "Advanced Infantry Sight",
            rarity: 5,
            exclusive: true,
            usable: ["Type 95", "Type 97"],
            description: "An integrated sight with wired transmission and a rangefinder, it is designed to enhance the battlefield awareness and combat adaptability of Type95 and Type97, allowing them to not reveal themselves while shooting from behind cover.",
            stats: {
                criticalHitRate: ["+18~24", "+19~26", "+21~28", "+23~31", "+25~33", "+27~36", "+28~38", "+30~40", "+32~43", "+34~45", "+36~48"],
                damage: ["+2~3", "+2~3", "+2~3", "+2~3", "+2~3", "+2~4", "+2~4", "+2~4", "+3~4", "+3~4", "+3~5"]
            }
        },
        4: {
            name: "ART2",
            rarity: 5,
            exclusive: true,
            usable: ["M21"],
            description: "A scope for accurate firing. M21 delights in the distinctive golden eyepiece rim.",
            stats: {
                criticalHitRate: ["+17~24", "+18~26", "+20~28", "+22~31", "+23~33", "+25~36", "+27~38", "+28~40", "+30~43", "+32~45", "+34~48"],
                damage: ["+3~5", "+3~5", "+3~5", "+3~6", "+3~6", "+4~7", "+4~7", "+4~7", "+4~8", "+5~8", "+5~9"]
            }
        },
        5: {
            name: "BM 3-12X40",
            rarity: 2,
            exclusive: false,
            usable: ["SMG", "AR", "MG", "RF", "SG"],
            description: "The 3-12x magnification optical sight manufactured by BM Corporation allows T-Dolls to hit the enemy's vital points more easily. Can be equipped by all except HG.",
            stats: {
                criticalHitRate: ["+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8", "+5~8"],
            }
        },
        6: {
            name: "FELIN System Sight",
            rarity: 5,
            exclusive: true,
            usable: ["FAMAS"],
            description: "Once a part of an advanced infantry combat system, this hardware incorporates an optical sight and an infrared laser into one single unit, allowing Fr FAMAS to flexibly adapt to the battle environment.",
            stats: {
                criticalHitRate: ["+17~24", "+18~26", "+20~28", "+22~31", "+23~33", "+25~36", "+27~38", "+28~40", "+30~43", "+32~45", "+34~48"],
                damage: ["+1~2", "+1~2", "+1~2", "+1~2", "+1~2", "+1~3", "+1~3", "+1~3", "+1~3", "+1~3", "+2~4"],
                accuracy: ["+1~2", "+1~2", "+1~2", "+1~2", "+1~2", "+1~3", "+1~3", "+1~3", "+1~3", "+1~3", "+2~4"]
            }
        },
        7: {
            name: "Gr G36 Hybrid Sight",
            rarity: 5,
            exclusive: true,
            usable: ["G36 Mod"],
            description: "A hybrid sight developed especially for Gr G36. It comprises of a 3x optical sight on the bottom and a red dot sight on top, allowing for flexible usage to suit the needs of the operational environment. Can only be equipped by Gr G36.",
            stats: {
                criticalHitRate: ["+17~24", "+18~26", "+20~28", "+22~31", "+23~33", "+25~36", "+27~38", "+28~40", "+30~43", "+32~45", "+34~48"],
                accuracy: ["+3~4", "+3~4", "+3~4", "+3~5", "+4~5", "+4~6", "+4~6", "+5~6", "+5~7", "+5~7", "+6~8"]
            }
        },
        8: {
            name: "K6-24X56",
            rarity: 5,
            exclusive: true,
            usable: ["Mosin-Nagant Mod"],
            description: "This modern optical sight installed on rails unleashes the full potential of Mosin-Nagant by increasing its accuracy and critical hit rate. Can only be equipped by Mosin-Nagant.",
            stats: {
                criticalHitRate: ["+18~25", "+19~27", "+21~30", "+23~32", "+25~35", "+27~37", "+28~40", "+30~42", "+32~45", "+34~47", "+36~50"],
                accuracy: ["+2~3", "+2~3", "+2~3", "+2~3", "+2~4", "+3~4", "+3~4", "+3~5", "+3~5", "+3~5", "+4~6"]
            }
        },
        9: {
            name: "KST1P7",
            rarity: 5,
            exclusive: true,
            usable: ["AK-47", "Type 56-1"],
            description: "An optical scope developed by KST before the war, it is specially designed to fit onto the AK family of weapons. It is still a decent choice for the AK variants to this day.",
            stats: {
                criticalHitRate: ["+32", "+33", "+35", "+36", "+38", "+40", "+41", "+43", "+44", "+46", "+48"],
                criticalHitDamage: ["+10", "+10", "+11", "+11", "+12", "+12", "+13", "+13", "+14", "+14", "+15"]
            }
        },
        10: {
            name: "KST1P8",
            rarity: 5,
            exclusive: true,
            usable: ["AK-47", "Type 56-1"],
            description: "An optical scope meticulously developed by KST with accuracy and precision before the war, it is specially designed to fit onto the AK family of weapons. Due to its precision and durability, it is still favored for the AK variants to this day.",
            stats: {
                criticalHitRate: ["+32", "+33", "+35", "+36", "+38", "+40", "+41", "+43", "+44", "+46", "+48"],
                criticalHitDamage: ["+25", "+25", "+26", "+26", "+27", "+27", "+27", "+28", "+28", "+29", "+30"]
            }
        },
        11: {
            name: "KSTSP",
            rarity: 5,
            exclusive: true,
            usable: ["AK-47", "Type 56-1"],
            description: "An optical scope developed by KSTSP before the war, it is specially designed to fit onto the AK family of weapons. Due to its unrivaled precision, it is still the accessory of choice for the AK variants to this day.",
            stats: {
                criticalHitRate: ["+32", "+33", "+35", "+36", "+38", "+40", "+41", "+43", "+44", "+46", "+48"],
                criticalHitDamage: ["+40", "+40", "+40", "+41", "+41", "+42", "+42", "+42", "+43", "+43", "+44"]
            }
        },
        12: {
            name: "LRA 2-12x50",
            rarity: 3,
            exclusive: false,
            usable: ["SMG", "AR", "MG", "RF", "SG"],
            description: "A new model of optical sight developed by LRA Corporation. It provides a high magnification and a wide field of view. Can be equipped by all except HG.",
            stats: {
                criticalHitRate: ["+9~12", "+9~13", "+10~14", "+11~15", "+12~16", "+13~18", "+14~19", "+15~20", "+16~21", "+17~22", "+18~24"]
            }
        },
        13: {
            name: "No32 MKI",
            rarity: 5,
            exclusive: true,
            usable: ["Lee-Enfield"],
            description: "Telescopic sight produced exclusively for Lee Enfield No. 4 MK. I (T) at the beginning of the last century, furnished with an exquisite brass finish. The faded scope lens witnessed countless lives lost. Can only be equipped by Lee Enfield.",
            stats: {
                criticalHitRate: ["+24", "+26", "+28", "+31", "+33", "+36", "+38", "+40", "+43", "+45", "+48"],
                rateOfFire: ["+2", "+2", "+2", "+2", "+2", "+3", "+3", "+3", "+3", "+3", "+4"]
            }
        },
        14: {
            name: "PM 5-25X56",
            rarity: 5,
            exclusive: true,
            usable: ["Kar98k"],
            description: "The expensive German-made optical lens has always been the ultimate choice for snipers and photographers. For someone who has toured through 130 years of battlefields, this sophisticated sight will allow her to be even more serene. Can only be equipped by Kar98k.",
            stats: {
                criticalHitRate: ["+24", "+26", "+28", "+31", "+33", "+36", "+38", "+40", "+43", "+45", "+48"],
                criticalHitDamage: ["+10", "+11", "+12", "+13", "+14", "+15", "+16", "+17", "+18", "+19", "+20"]
            }
        },
        15: {
            name: "ZFG42",
            rarity: 5,
            exclusive: true,
            usable: ["FG42"],
            description: "ZF's optical sight for FG42. Its brass exterior has faded after more than a century, but you can still get a sense of the German style from the lens. Looking through it makes you feel like you've joined Magnum.",
            stats: {
                criticalHitRate: ["+13~17", "+14~18", "+15~20", "+16~21", "+17~23", "+18~24", "+20~26", "+21~27", "+22~29", "+23~30", "+24~32"],
                criticalHitDamage: ["+13~16", "+13~16", "+14~17", "+14~18", "+15~19", "+16~20", "+16~20", "+17~21", "+18~22", "+18~23", "+19~24"],
                rateOfFire: ["-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1", "-4~1"]
            }
        },
        16: {
            name: "VFL 6-24x56",
            rarity: 5,
            exclusive: false,
            usable: ["SMG", "AR", "MG", "RF", "SG"],
            description: "An excellent scope specially built for long-distance sniping, it is made from the best materials and optical components, ensuring outstanding and reliable performance. Can be equipped by all except HG.",
            stats: {
                criticalHitRate: ["+17~24", "+18~26", "+20~28", "+22~31", "+23~33", "+25~36", "+27~38", "+28~40", "+30~43", "+32~45", "+34~48"]
            }
        },
        17: {
            name: "PSO-1",
            rarity: 4,
            exclusive: false,
            usable: ["SMG", "AR", "MG", "RF", "SG"],
            description: "Possessing a compact and reliable design, the military-grade optical sight incorporates specialized reticle subtensions, allowing for ease of use on the battlefield. Can be equipped by all except HG.",
            stats: {
                criticalHitRate: ["+13~16", "+14~17", "+15~19", "+16~20", "+18~22", "+19~24", "+20~25", "+22~27", "+23~28", "+24~30", "+26~32"]
            }
        },
    },
    holographicSight: {

    },
    redDotSight: {

    },
    suppressor: {

    },
    nightBattleEquipment: {

    },
    highVelocityAmmo: {

    },
    hollowPointAmmo: {

    },
    armorPiercingAmmo: {

    },
    buckshotAmmo: {

    },
    slugAmmo: {

    },
    exoskeleton: {

    },
    ammunitionBox: {

    },
    camouflageCloak: {

    },
    armorPlate: {

    },
    chip: {

    }
}