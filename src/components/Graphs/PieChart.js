import React, { Component, useState } from "react";
import '../UserProfile/Profile.css';
import { VictoryPie } from "victory-pie";
import { useHistory } from "react-router-dom";
import HistogramGraph from "./HistogramGraph"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const myData = [
    
    { x: "$100 Toilet", y: 400 },
    { x: "$300 Bathroom", y: 900 },
    { x: "$150 Miscellaneous", y: 300 },
];


const PieChart = () => {

    let history = useHistory();

    const [isHistogram, setIsHistogram] = useState(false);

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
                                onClick: () => { setIsHistogram(true) }
                            }
                        }]}
                    />
                </Grid>
                <Grid item xs={6}>
                    {isHistogram ?
                        (<HistogramGraph />) :
                        (<></>)
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default PieChart;
