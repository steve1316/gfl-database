import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component imports
import ScrollToTop from "../../components/ScrollToTop";

// MaterialUI imports
import { Container, makeStyles, Grid, Chip, Avatar, Divider, Card, CardActionArea, CardMedia, Typography, Tooltip, withStyles, Grow, Zoom } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

// MaterialUI icon imports
import DoneIcon from "@material-ui/icons/Done";
import { useEffect } from "react";

// Image imports
import mod_button from "../../images/mod.png";

// T-Dolls JSON import
const tdolls_from_1_to_100 = require("../../data/tdolls_from_1_to_100").default;
const tdolls_from_101_to_200 = require("../../data/tdolls_from_101_to_200").default;
const tdolls_from_201_to_300 = require("../../data/tdolls_from_201_to_300").default;
const tdolls_from_301_to_400 = require("../../data/tdolls_from_301_to_400").default;
const tdolls_from_1000_to_1050 = require("../../data/tdolls_from_1000_to_1050").default;

const tdolls_array = tdolls_from_1_to_100.concat(tdolls_from_101_to_200).concat(tdolls_from_201_to_300).concat(tdolls_from_301_to_400).concat(tdolls_from_1000_to_1050);

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#f5f5f9",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9"
	}
}))(Tooltip);

export default function TDoll_Index() {
	const useStyles = makeStyles((theme) => ({
		root: {
			marginTop: "4rem"
		},
		cardGrid: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8)
		},
		card: {
			display: "flex",
			flexDirection: "column",
			maxWidth: 200,
			maxHeight: 500
		},
		cardMedia: {
			height: "100%",
			width: "100%",
			objectFit: "contain" // Makes sure to keep the image contained inside the rendered Card.
		},
		chip: {
			margin: theme.spacing(0.5)
		},
		chipList: {
			display: "flex",
			justifyContent: "center",
			listStyle: "none",
			flexWrap: "wrap",
			"& > *": {
				margin: theme.spacing(0.5)
			}
		},
		dividerForChips: {
			margin: 5
		},
		topDividerForCards: {
			marginTop: 10,
			marginBottom: 25
		},
		bottomDividerForCards: {
			marginTop: 25,
			marginBottom: 10
		}
	}));

	const classes = useStyles();

	const [currentSearchResults, setCurrentSearchResults] = useState(0);
	const [totalSearchResults, setTotalSearchResults] = useState(0);
	const [searchResults, setSearchResults] = useState([]);
	const [searchResultPages, setSearchResultPages] = useState([]);
	const [pageSelected, setPageSelected] = useState(1);

	const [rarityFilter, setRarityFilter] = useState([
		{ key: 0, label: "General", rarity: 2, selected: false },
		{ key: 1, label: "Rare", rarity: 3, selected: false },
		{ key: 2, label: "Epochal", rarity: 4, selected: false },
		{ key: 3, label: "Legendary", rarity: 5, selected: false },
		{ key: 4, label: "Extra", rarity: 1, selected: false }
	]);

	const [typeFilter, setTypeFilter] = useState([
		{ key: 0, label: "HG", selected: false },
		{ key: 1, label: "SMG", selected: false },
		{ key: 2, label: "RF", selected: false },
		{ key: 3, label: "AR", selected: false },
		{ key: 4, label: "MG", selected: false },
		{ key: 5, label: "SG", selected: false }
	]);

	const [modFilter, setModFilter] = useState({
		key: 0,
		label: "Mod",
		selected: false
	});

	const handleDelete = () => {
		// It is blank as it needed to be set in order for the delete icon (the checkmark) to appear next to the chip.
	};

	// Checks for filters in sessionStorage. Set the number of search results to the length of the T-Doll JSON. Runs once for now.
	useEffect(() => {
		if (sessionStorage.getItem("filters")) {
			var temp = JSON.parse(sessionStorage.getItem("filters"));
			setRarityFilter(temp.rarityFilter);
			setTypeFilter(temp.typeFilter);
			setModFilter(temp.modFilter);
		}
	}, []);

	// Update the page selected whenever the following values change.
	useEffect(() => {
		setPageSelected(1);
	}, [modFilter, rarityFilter, typeFilter, totalSearchResults]);

	// Update the search results every time the filters and the page selected changes. Save the filters in sessionStorage.
	useEffect(() => {
		setSearchResults(renderTDolls());

		var tempFilters = {
			rarityFilter: rarityFilter,
			typeFilter: typeFilter,
			modFilter: modFilter
		};

		sessionStorage.setItem("filters", JSON.stringify(tempFilters));
	}, [modFilter, rarityFilter, typeFilter, pageSelected]);

	// The following handler functions below are setting the filters selected as active.
	const handleOnClickRarity = (rarityToBeUpdated) => () => {
		const key = rarityToBeUpdated.key;
		const newSelected = !rarityToBeUpdated.selected;

		// Match the rarity's key with the given rarity's key and only set its selected boolean to the opposite of what it was.
		setRarityFilter((rarities) => rarities.map((rarity) => (rarity.key === key ? { ...rarity, selected: newSelected } : rarity)));
	};

	const handleOnClickType = (typeToBeUpdated) => () => {
		const key = typeToBeUpdated.key;
		const newSelected = !typeToBeUpdated.selected;
		setTypeFilter((type) => type.map((type) => (type.key === key ? { ...type, selected: newSelected } : type)));
	};

	const handleOnClickMod = () => {
		setModFilter({
			...modFilter,
			selected: !modFilter.selected
		});
	};

	// This will update the page selected via the Pagination component.
	const handlePageChange = (event, value) => {
		setPageSelected(value);
	};

	// Create and return an array of T-Dolls that match filters.
	const createSearchResults = () => {
		var tempArray = [];

		tempArray = tdolls_array.filter((data) => {
			// Filter if T-Dolls have Mod or not.
			if (modFilter.selected) {
				if (data.mod === null) {
					return null;
				}
				data.selected = data.mod;
			} else {
				data.selected = data.normal;
			}

			// Filter for rarity.
			for (var i = 0; i < rarityFilter.length; i++) {
				if (rarityFilter[i].selected && rarityFilter[i].rarity !== data.selected.rarity) {
					// Now check to see if rarity selected is 5* and the selected T-Doll is 6*. This is only possible for T-Dolls that have Mods so far.
					// Thus, 6* Mods will appear when you select the 5* rarity filter and the Mod Filter is also selected.
					if (rarityFilter[i].rarity === 5 && data.selected.rarity === 6) {
						// This is intentionally empty to include the 6* Mods in the results.
					} else {
						return null;
					}
				}
			}

			// Filter for type.
			for (i = 0; i < typeFilter.length; i++) {
				if (typeFilter[i].selected && typeFilter[i].label !== data.selected.type) {
					return null;
				}
			}

			// If passed all filters, then return this T-Doll.
			return data;
		});

		// Partition search results by 30 at a time (static for now).
		var tempSearchResultPages = [];

		for (var i = 0, j = 0; i < tempArray.length; i += 30, j++) {
			var temp = [];
			if (i + 30 > tempArray.length) {
				temp = tempArray.slice(i, tempArray.length);
			} else {
				temp = tempArray.slice(i, i + 30);
			}

			tempSearchResultPages[j] = temp;
		}

		console.log("Page Partitions: ", tempSearchResultPages);

		// Update the pages of search results and the total number of results.
		setSearchResultPages(tempSearchResultPages);
		setTotalSearchResults(tempArray.length);

		return tempSearchResultPages;
	};

	// Render the Cards of T-Dolls based on filters selected.
	const renderTDolls = () => {
		var tempArrayOfSearchResults = createSearchResults();

		var tempArray = [];
		var stagger = 100;
		var tempPageSelected = pageSelected;

		// Makes sure to avoid the out of bounds error.
		if (tempPageSelected > tempArrayOfSearchResults.length) {
			tempPageSelected = 1;
		}

		// Go through the Search Results array from createSearchResults() and push 30 at a time until the remainder is left.
		tempArrayOfSearchResults[tempPageSelected - 1].map((tdoll) => {
			tempArray.push(
				<Grid item key={tdoll.selected.name} xs={6} sm={4} md={2}>
					<Grow in={true} style={{ transformOrigin: "0 5 0" }} timeout={stagger}>
						<Card className={classes.card} elevation={12}>
							<Link
								to={{
									pathname: "/tdoll",
									search: "?id=" + tdoll.normal.id
								}}
								onClick={() => sessionStorage.setItem(tdoll.normal.id, JSON.stringify(tdoll))}
							>
								<HtmlTooltip
									title={
										<>
											<Typography color="inherit">
												{tdoll.selected.name}
												<small>
													<sup>[#{tdoll.normal.id}]</sup>
												</small>
											</Typography>
											<b>{tdoll.selected.rarity + "* " + tdoll.selected.type}</b>
										</>
									}
									placement="right"
								>
									<CardActionArea>
										<CardMedia component="img" className={classes.cardMedia} image={tdoll.selected.images.card} title={tdoll.selected.name} />
									</CardActionArea>
								</HtmlTooltip>
							</Link>
						</Card>
					</Grow>
				</Grid>
			);

			// Stagger timeout will never be more than 2 seconds.
			stagger += 100;
			if (stagger >= 2000) {
				stagger = 0;
			}
		});

		// Update number of search results.
		setCurrentSearchResults(tempArray.length);

		return tempArray;
	};

	return (
		<main className={classes.root}>
			<ScrollToTop />
			<Container>
				<br />

				{/* Chips List */}
				<div className={classes.chipList}>
					{rarityFilter.map((rarity) => {
						return (
							<li key={rarity.key}>
								<Zoom in={true} timeout={400}>
									<Chip
										className={classes.chip}
										avatar={<Avatar>{rarity.rarity}*</Avatar>}
										clickable
										color={rarity.selected ? "primary" : "secondary"}
										label={rarity.label}
										onClick={handleOnClickRarity(rarity)}
										onDelete={rarity.selected ? handleDelete : null}
										deleteIcon={
											<>
												<Divider orientation="vertical" flexItem />
												<DoneIcon />
											</>
										}
									/>
								</Zoom>
							</li>
						);
					})}
				</div>

				<Divider className={classes.dividerForChips} />

				<div className={classes.chipList}>
					{typeFilter.map((type) => {
						return (
							<li key={type.key}>
								<Zoom in={true} timeout={600}>
									<Chip
										className={classes.chip}
										avatar={<Avatar style={{ width: 30 }}>{type.label}</Avatar>}
										clickable
										color={type.selected ? "primary" : "secondary"}
										label={type.label}
										onClick={handleOnClickType(type)}
										onDelete={type.selected ? handleDelete : null}
										deleteIcon={
											<>
												<Divider orientation="vertical" flexItem />
												<DoneIcon />
											</>
										}
									/>
								</Zoom>
							</li>
						);
					})}
				</div>

				<Divider className={classes.dividerForChips} />

				<div className={classes.chipList}>
					<Zoom in={true} timeout={800}>
						<Chip
							className={classes.chip}
							avatar={
								<Avatar>
									<img src={mod_button} alt="Mod" style={{ width: 20, height: 20 }} />
								</Avatar>
							}
							clickable
							color={modFilter.selected ? "primary" : "secondary"}
							label={modFilter.label}
							onClick={() => handleOnClickMod()}
							onDelete={modFilter.selected ? handleDelete : null}
							deleteIcon={
								<>
									<Divider orientation="vertical" flexItem />
									<DoneIcon />
								</>
							}
						/>
					</Zoom>
				</div>

				{/* End of Chips List */}
			</Container>

			{/* T-Dolls List */}
			<Container className={classes.cardGrid} maxWidth="md">
				<Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
					Total number of search results: {totalSearchResults}. Now showing {currentSearchResults} search results.
				</Typography>

				{/* Pagination Component */}
				<Pagination count={searchResultPages.length} color="primary" value={pageSelected} page={pageSelected} onChange={handlePageChange} showFirstButton showLastButton size="large" />

				<Divider className={classes.topDividerForCards} />

				{/* Search Results */}
				<Grid container spacing={4}>
					{searchResults}
				</Grid>

				<Divider className={classes.bottomDividerForCards} />

				{/* Pagination Component */}
				<Pagination count={searchResultPages.length} color="primary" value={pageSelected} page={pageSelected} onChange={handlePageChange} showFirstButton showLastButton size="large" />

				{/* End of Search Results */}
			</Container>

			{/* End of T-Dolls List */}
		</main>
	);
}
