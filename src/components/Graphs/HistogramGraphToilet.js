import React from "react";
import '../UserProfile/Profile.css';
import { VictoryBar, VictoryChart} from "victory";

const sampleData = [
    { x: "Toilet Paper", y: 34 },
    { x: "Liquid soap", y: 50 },
    { x: "Toilet capsules", y: 100 },
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
