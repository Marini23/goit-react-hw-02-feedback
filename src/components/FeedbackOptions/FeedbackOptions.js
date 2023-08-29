import React from 'react';
import PropTypes from 'prop-types';
import {
    BtnWrapper,
    BtnItem
} from './FeedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (<BtnWrapper>
            {options.map(option => 
                <BtnItem type="button" key={option} onClick ={()=> onLeaveFeedback(option)}>{option}</BtnItem>
            )}
        </BtnWrapper>);
    
};
    
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};