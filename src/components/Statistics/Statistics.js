import React from 'react';
import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
        <div>
            <StatisticItem>Good: {good}</StatisticItem>
            <StatisticItem>Neutral: { neutral}</StatisticItem>
            <StatisticItem>Bad: {bad}</StatisticItem>
            <StatisticItem>Total: {total}</StatisticItem>
            <StatisticItem>Positive feedback: {positivePercentage + `%`}</StatisticItem>
        </div> 
        
    );
};
    
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};