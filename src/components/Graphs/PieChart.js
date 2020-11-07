import React, { Component, useState } from "react";
import '../UserProfile/Profile.css';
import { VictoryPie } from "victory-pie";
import { useHistory } from "react-router-dom";
import HistogramGraph from "./HistogramGraph"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HistogramGraphToilet from "./HistogramGraphToilet";
import HistogramGraphMiscellenaous from "./HistogramGraphMisecllenaous";


const PieChart = ({purchaseHistory}) => {

    const distinctCats = new Set(purchaseHistory.map(purchase => purchase.cat));
    let myData = [];

    for(const cat of distinctCats){
        const sum = purchaseHistory.filter(purchase => purchase.cat === cat).reduce((total, purchase) => total + purchase.price, 0);
        myData.push({x: `${cat} ${sum}$`, y: sum});
    }

    const [isHistogram, setIsHistogram] = useState(false);
    const [textType,setTextType] = useState(undefined);

    const decideHistogram = (text) => {
        if (text.includes('Toilet')) return <HistogramGraphToilet purchaseHistory={purchaseHistory}/>;
        if (text.includes('Bathroom')) return <HistogramGraph purchaseHistory={purchaseHistory}/>;
        if (text.includes('Misc')) return <HistogramGraphMiscellenaous purchaseHistory={purchaseHistory}/>;
    };

    return (
        <Container >
            <Grid className="graph" container spacing={2} alignContent={"center"}>
                <Grid item xs={6}>
                    <VictoryPie
                        data={myData}
                        colorScale={["#007df5", "yellow", "red"]}
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
