import React from "react";
import './Profile.css';
import { VictoryBar, VictoryChart, VictoryTooltip, Bar} from "victory";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';



const sampleData = [
    { x: "Shower Gel", y: 900 },
    { x: "Shampoo", y: 400 },
    { x: "Conditioner", y: 700 },
    { x: "Cleaner", y: 100 },
];


const HistogramGraph = () => {
    let history = useHistory();
    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={sampleData}
                />
            </VictoryChart>
            <Button size="big" onClick={()=>{history.goBack("")}}>Go Back to Profile</Button>
        </div>
    );
};

export default HistogramGraph;
