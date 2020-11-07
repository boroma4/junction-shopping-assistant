import React from "react";
import '../UserProfile/Profile.css';
import { VictoryBar, VictoryChart} from "victory";

const sampleData = [
    { x: "Toilet Paper", y: 900 },
    { x: "Liquid soap", y: 400 },
    { x: "Toilet capsules", y: 700 },
];
const HistogramGraphToilet = () => {
    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#007df5" } }}
                    data={sampleData}
                />
            </VictoryChart>
        </div>
    );
};

export default HistogramGraphToilet;
