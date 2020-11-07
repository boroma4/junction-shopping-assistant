import React from "react";
import './Profile.css';
import { VictoryBar, VictoryChart, VictoryTooltip, Bar} from "victory";


const sampleData = [
    { x: "Shower Gel", y: 900 },
    { x: "Shampoo", y: 400 },
    { x: "Tooth Brush", y: 600 },
    { x: "Conditioner", y: 700 },
    { x: "Cleaner", y: 100 },
];


const HistogramGraph = () => {

    //let history = useHistory();

    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={sampleData}
                />
            </VictoryChart>
        </div>
    );
};

export default HistogramGraph;
