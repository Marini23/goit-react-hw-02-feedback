import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyles } from './GlobalStyle';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  leaveFeedback = e => {
    const target = e;
    this.setState({
    [target]: this.state[target] + 1
    });
    };

  countTotalFeedback = ({good, neutral, bad}) => { 
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage = ({good, neutral, bad}) => {
    return (Math.round( good * 100  / this.countTotalFeedback(this.state)));
  };

  render() {

    const {good, neutral, bad} = this.state;
    
    const options = Object.keys(this.state);
    
    const totalFeedback = (good + neutral + bad) > 0;

    return (
      
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}
        />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)} /> : <Notification message="There is no feedback"/>}
        
        
        </Section>
        <GlobalStyles/>
      </div>
    );
    
  };
};

