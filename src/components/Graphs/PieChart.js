import React, { Component, useState } from "react";
import '../UserProfile/Profile.css';
import { VictoryPie } from "victory-pie";
import { useHistory } from "react-router-dom";
import HistogramGraph from "./HistogramGraph"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HistogramGraphToilet from "./HistogramGraphToilet";
import HistogramGraphMiscellenaous from "./HistogramGraphMisecllenaous";

const myData = [

    { x: "Toilet", y: 400 },
    { x: "Bathroom", y: 900 },
    { x: "Miscellaneous", y: 300 },
];


const PieChart = ({purchaseHistory}) => {

    let history = useHistory();
<<<<<<< HEAD
=======
    const myData = [
    {x: 'Toilet', y: purchaseHistory.filter(purchase => purchase.cat === 'Toilet').reduce((total, purchase) => total + purchase.price, 0)},
    {x: 'Bathroom', y: purchaseHistory.filter(purchase => purchase.cat === 'Bathroom').reduce((total, purchase) => total + purchase.price, 0)},
    {x: 'Misc', y: purchaseHistory.filter(purchase => purchase.cat === 'Misc').reduce((total, purchase) => total + purchase.price, 0)}
    ];

>>>>>>> 969cd714419c1d8ddc23c09080445f1e6dbea1a3
    const [isHistogram, setIsHistogram] = useState(false);
    const [textType,setTextType] = useState(undefined);

    const decideHistogram = (text) => {
        switch (text) {
            case "Toilet":
                return <HistogramGraphToilet/>;
            case "Bathroom":
                return <HistogramGraph />;
            case "Misc":
                return <HistogramGraphMiscellenaous/>;
            default:
                break;
        }
    };

    return (
        <Container >
            <Grid className="graph" container spacing={2} alignContent={"center"}>
                <Grid item xs={6}>
                    <VictoryPie
                        data={myData}
                        colorScale={["blue", "yellow", "red"]}
                        radius={100}
                        events={[{
                            target: "data",
                            eventHandlers: {
                              onClick: () => {
                                return [
                                    {
                                    target: "labels",
                                    mutation: ({ text }) => {
                                        setIsHistogram(true);
                                        setTextType(text);
                                    }
                                  }
                                ];
                              }
                            }
                          }]}
                    />
                </Grid>
                <Grid item xs={6}>
                    {textType && isHistogram ?
                        (decideHistogram(textType)) :
                        (<></>)
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default PieChart;
