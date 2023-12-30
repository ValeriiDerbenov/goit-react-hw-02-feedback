import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => (total += el), 0);
  };

  countPositiveFeedbackPercentage = value => {
    return this.countTotalFeedback()
      ? Math.floor((value / this.countTotalFeedback()) * 100)
      : 0;
  };

  render()
  {return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onClick={this.onClick}
        feedbackOptions={this.state}>
      </FeedbackOptions>
      <Statistics 
      title="Statistics" 
      feedbackOptions={this.state}
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage(this.state.good)}
      > </Statistics>
    </Section>
      
  );}
};
