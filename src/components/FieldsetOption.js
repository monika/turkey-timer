import React from 'react';

const FieldsetOption = props => (
  <fieldset className={props.type}>
    <legend>{props.type}</legend>

    <input type="radio" name={props.type} id={'turkey-' + props.firstOption} />
    <label for={'turkey-' + props.firstOption}>{props.firstOption}</label>

    <input type="radio" name={props.type} id={'turkey-' + props.secondOption} />
    <label for={'turkey-' + props.secondOption}>{props.secondOption}</label>
  </fieldset>
);

export default FieldsetOption;
