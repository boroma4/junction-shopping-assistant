import React from "react";
import '../UserProfile/Profile.css';
import { VictoryBar, VictoryChart} from "victory";

const sampleData = [
    { x: "Plastic cup", y: 30 },
    { x: "Trash bags", y: 120 },
    { x: "Hand sanitizer", y: 40 },
];
const HistogramGraphMiscellenaous = () => {
    return (
        <div>
            <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                <VictoryBar
                    style={{ data: { fill: "#ffc362" } }}
                    data={sampleData}
                />
            </VictoryChart>
        </div>
    );
};

export default HistogramGraphMiscellenaous;
