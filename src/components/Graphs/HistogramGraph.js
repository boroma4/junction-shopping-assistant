import React from "react";
import '../UserProfile/Profile.css';
import { VictoryBar, VictoryChart} from "victory";

const sampleData = [
    { x: "Shampoo", y: 400 },
    { x: "Toothpaste", y: 700 },
    { x: "Toothbrush", y: 100 },
];
const HistogramGraph = () => {
    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#ff8a93" } }}
                    data={sampleData}
                />
            </VictoryChart>
        </div>
    );
};

export default HistogramGraph;
