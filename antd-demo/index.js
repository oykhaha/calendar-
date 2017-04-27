import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  disabledStartDate(value){
    
    return (value && value.valueOf() < Date.now()) || (value && value.format("M") > 8);

  }


  onChange(value) {
    this.setState({ value });
  }

  onStartChange (value){
  	this.onChange(value);
  }


  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      
        <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Time"  
        />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, document.getElementById('root'));