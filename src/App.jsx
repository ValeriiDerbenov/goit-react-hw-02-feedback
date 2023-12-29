import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
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

  render()
  {return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onClick={this.onClick}
        feedbackOptions={this.state}>
      </FeedbackOptions>
    </Section>
      
  );}
};
