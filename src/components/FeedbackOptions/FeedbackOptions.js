import React from 'react';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);
        return (<section>

            
            {options.map(option => 
                <button type="button" key={option} onClick ={()=> onLeaveFeedback(option)}>{option}</button>
            )}
            
            {/* <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button> */}
        
    </section>);
    
    };