import React from "react";
import StickyBox from "react-sticky-box";


export default function SuggestionsSidebar({event}){

    return(
        <div>
            { event &&
            <StickyBox>
                <h6>{event.title}</h6>
                {event.suggestions.map(suggestion => (
                    <div>
                        {suggestion}
                    </div>
                ))}
            </StickyBox>
            }
        </div>
    )
}
