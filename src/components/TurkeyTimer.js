// Libraries
import React from 'react';

// Components
import Action from './Action';
import FieldsetOption from './FieldsetOption';

// Form Data
const formData = {
  temperature: [
    {
      name: 'Frozen',
      id: 'turkey-frozen'
    },
    {
      name: 'Thawed',
      id: 'turkey-thawed'
    }
  ],
  stuffing: [
    {
      name: 'Stuffed',
      id: 'turkey-stuffed'
    },
    {
      name: 'Unstuffed',
      id: 'turkey-unstuffed'
    }
  ],
  measurement: [
    {
      name: 'Imperial',
      id: 'imperial'
    },
    {
      name: 'Metric',
      id: 'metric'
    }
  ]
};

class TurkeyTimer extends React.Component {
  state = {
    weight: 12,
    frozen: false,
    stuffed: false,
    metric: false
  };
  render() {
    return (
      <div className="turkey-timer">
        <h1>Turkey Timer</h1>

        <form action="" method="post">
          <div className="weight">
            <label for="turkey-weight">
              Weight: <small>in lbs.</small>
            </label>
            <input
              id="turkey-weight"
              type="number"
              name="weight"
              required
              min="2"
              max="40"
            />
          </div>

          <FieldsetOption
            type="stuffing"
            firstOption="stuffed"
            secondOption="unstuffed"
          />

          <FieldsetOption
            type="temperature"
            firstOption="frozen"
            secondOption="thawed"
          />

          <FieldsetOption
            type="measurement"
            firstOption="imperial"
            secondOption="metric"
          />

          <Action text="Calculate Cook Time" />
        </form>
      </div>
    );
  }
}

export default TurkeyTimer;
