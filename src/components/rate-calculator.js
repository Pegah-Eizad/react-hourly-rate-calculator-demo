import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayRate: 300,
          hoursWork: 5,
        };
    }

    setDayRate(dayRate){
      this.setState({
        dayRate
      });
    }

    setHoursWork(hoursWork){
      this.setState({
        hoursWork
      });
    }

    render() {
        const rate = this.state.dayRate/this.state.hoursWork;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" value={this.state.dayRate} valueChange={value => this.setDayRate(value)} min={0} max={5000} />
                <NumberInput id="hours" label="Hours" value={this.state.hoursWork} valueChange={value => this.setHoursWork(value)} min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}
