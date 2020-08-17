import React, { useState } from "react";
import { Link } from "react-router-dom";

// MaterialUI imports
import { Container, makeStyles, Grid, Chip, Avatar, Divider, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";

// MaterialUI icon imports
import DoneIcon from "@material-ui/icons/Done";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useEffect } from "react";

// T-Dolls JSON import
const tdolls_from_1_to_10 = require("../../data/tdolls_from_1_to_10");

export default function TDoll_Index() {
	const useStyles = makeStyles((theme) => ({
		root: {
			marginTop: "5rem"
		},
		paper: {
			padding: theme.spacing(2)
		},
		cardGrid: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8)
		},
		card: {
			display: "flex",
			flexDirection: "column",
			maxWidth: 200,
			maxHeight: 550
		},
		cardMedia: {
			height: "100%",
			width: "100%",
			objectFit: "contain"
		},
		cardContent: {
			flexGrow: 1
		},
		cardButton: {
			display: "flex",
			margin: 10,
			justifyContent: "flex-end"
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
		divider: {
			marginTop: 5,
			marginBottom: 5
		}
	}));

	const classes = useStyles();

	const [numberOfSearchResults, setNumberOfSearchResults] = useState(0);

	const [rarityFilter, setRarityFilter] = useState([
		{ key: 0, label: "General", rarity: "2*", selected: false },
		{ key: 1, label: "Rare", rarity: "3*", selected: false },
		{ key: 2, label: "Epochal", rarity: "4*", selected: false },
		{ key: 3, label: "Legendary", rarity: "5*", selected: false },
		{ key: 4, label: "Extra", rarity: "1*", selected: false }
	]);

	const [typeFilter, setTypeFilter] = useState([
		{ key: 0, label: "HG", selected: false },
		{ key: 1, label: "SMG", selected: false },
		{ key: 2, label: "RF", selected: false },
		{ key: 3, label: "AR", selected: false },
		{ key: 4, label: "MG", selected: false },
		{ key: 5, label: "SG", selected: false }
	]);

	const handleDelete = () => {
		// It is blank as it needed to be set in order for the delete icon (the checkmark) to appear next to the chip.
	};

	useEffect(() => {
		setNumberOfSearchResults(tdolls_from_1_to_10.length);
	}, []);

	const handleOnClickRarity = (rarityToBeUpdated) => () => {
		const key = rarityToBeUpdated.key;
		const newSelected = !rarityToBeUpdated.selected;
		setRarityFilter((rarities) => rarities.map((rarity) => (rarity.key === key ? { ...rarity, selected: newSelected } : rarity)));
	};

	const handleOnClickType = (typeToBeUpdated) => () => {
		const key = typeToBeUpdated.key;
		const newSelected = !typeToBeUpdated.selected;
		setTypeFilter((type) => type.map((type) => (type.key === key ? { ...type, selected: newSelected } : type)));
	};

	return (
		<main>
			<Container>
				<br />

				{/* Chips List */}
				<div className={classes.chipList}>
					{rarityFilter.map((rarity) => {
						return (
							<li key={rarity.key}>
								<Chip
									className={classes.chip}
									avatar={<Avatar>{rarity.rarity}</Avatar>}
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
							</li>
						);
					})}
				</div>
				<Divider className={classes.divider} />
				<div className={classes.chipList}>
					{typeFilter.map((type) => {
						return (
							<li key={type.key}>
								<Chip
									className={classes.chip}
									avatar={<Avatar>{type.label}</Avatar>}
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
							</li>
						);
					})}
				</div>
				{/* End of Chips List */}
			</Container>

			{/* T-Dolls List */}
			<Container className={classes.cardGrid} maxWidth="md">
				<Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
					Now showing {numberOfSearchResults} search results.
				</Typography>
				<Divider />
				<Grid container spacing={4}>
					{tdolls_from_1_to_10.map((tdoll) => {
						return (
							<Grid item key={tdoll.name} xs={12} sm={6} md={4}>
								<Card className={classes.card} elevation={12}>
									<Link
										to={{
											pathname: "/tdoll",
											state: {
												tdoll: tdoll
											}
										}}
									>
										<CardActionArea>
											<CardMedia component="img" className={classes.cardMedia} image={tdoll.image_normal} title={tdoll.name} />
										</CardActionArea>
									</Link>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>

			{/* End of T-Dolls List */}
		</main>
	);
}
