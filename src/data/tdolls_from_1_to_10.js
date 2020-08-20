/*
    This array of T-Dolls will contain information about each one in JSON format. Some things to note:
    - All stats are considered at max rank. For skill stats, I'm separating them for now.
    - If T-Doll has MOD, mod attribute will be populated. If not, mod attribute will be set to NULL.
	- number_of_stats in skill attribute dictates the amount of numbers from stat(1) to stat(n) to be replacing the "#(n)"" delimiters inside the skill description in sequential order.
	- TODO: include full body pictures as well.
	- TODO: include their sprites as well.
	- TODO: include pictures of skills as well.
	- TODO: include Tile information as well.
	- TODO: differentiate between Passive and/or Active skills.

*/

const tdolls = [
	{
		normal: {
			id: 1,
			name: "SAA",
			type: "HG",
			rarity: 4,
			max_hp: 80,
			max_dmg: 36,
			max_acc: 49,
			max_eva: 79,
			max_rof: 47,
			skill: {
				name: "Fire Command",
				initial_cooldown: 6,
				cooldown: [15, 14.7, 14.3, 14, 13.7, 13.3, 13, 12.7, 12.4, 12],
				description: "Increase all allies' damage by #1 for #2 seconds.",
				number_of_stats: 2,
				stat1: ["15%", "16%", "17%", "18%", "19%", "21%", "22%", "23%", "24%", "25%"],
				stat2: [5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
				image_skill: require("../images/tdolls/fire_command.jpg")
			},
			image_normal: require("../images/tdolls/1_normal.png"),
			image_damaged: require("../images/tdolls/1_damaged.png")
		},
		mod: {
			id: 1,
			name: "SAA Mod",
			type: "HG",
			rarity: 5,
			max_hp: 83,
			max_dmg: 37,
			max_acc: 51,
			max_eva: 80,
			max_rof: 50,
			skill: {
				name: "Fire Command",
				initial_cooldown: 6,
				cooldown: [15, 14.7, 14.3, 14, 13.7, 13.3, 13, 12.7, 12.4, 12],
				description: "Increase all allies' damage by #1 for #2 seconds.",
				number_of_stats: 2,
				stat1: ["15%", "16%", "17%", "18%", "19%", "21%", "22%", "23%", "24%", "25%"],
				stat2: [5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
				image_skill: require("../images/tdolls/fire_command.jpg")
			},
			skill2: {
				name: "Duel Survivor",
				initial_cooldown: 6,
				cooldown: [15, 14.7, 14.3, 14, 13.7, 13.3, 13, 12.7, 12.4, 12],
				description: "Increase all allies' rate of fire and accuracy by #1% for every #2 seconds that SAA is alive in battle. Max 3 stacks.",
				number_of_stats: 2,
				stat1: [3, 3, 3, 4, 4, 4, 5, 5, 5, 5],
				stat2: [6, 5.8, 5.6, 5.3, 5.1, 4.9, 4.7, 4.4, 4.2, 4],
				image_skill: require("../images/tdolls/duel_survivor.jpg")
			},
			image_normal: require("../images/tdolls/1_mod_normal.png"),
			image_damaged: require("../images/tdolls/1_mod_damaged.png")
		},
		selected: {}
	}
];

module.exports = tdolls;
