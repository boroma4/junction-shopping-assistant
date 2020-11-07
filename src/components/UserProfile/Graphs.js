import React from "react";
import './Profile.css';
import { VictoryPie } from "victory-pie";

import { useHistory } from "react-router-dom";

const myData = [
    { x: "Body", y: 900 },
    { x: "Toiletries", y: 400 },
    { x: "Kitchen", y: 300 },
];


const Graphs = () => {

    let history = useHistory();

    return (
        <div className="graph">
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
                                target: "data",
                                mutation: ({ Link }) => {
                                    return  history.push("/Histogram");
                                  }
                              }
                          ]
                      }
                    }
                  }]}
            />
        </div>
    );
};

export default Graphs;
