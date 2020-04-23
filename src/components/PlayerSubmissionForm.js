import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState(EMPTYFORM);  //state to track entire form

  const onInputChange = (event) => {
    const {name, value} = event.target;   //practice using destructuring assignment
    const newForm = {
      ...formFields,
      [name]: value,                      //event.target.name = event.target.value
    }
    setFormFields(newForm);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();               //prevent default behavior to send out HTTP request
    if (allFieldsFilled()) {
      const newForm = {...formFields};
      props.onSubmitFormCallback(newForm);  //send back form to Game via callback
      setFormFields(EMPTYFORM);             //clear form
    }
  };

  const allFieldsFilled = () => {
    return Object.values(formFields).every((value) => value !== '');
  };

  return (
    <div className="PlayerSubmissionForm">

      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitForm}>
        <div className="PlayerSubmissionForm__poem-inputs">
          <span>The</span>
          <input
            name='adj1'
            title='Type an adjective here'
            placeholder='adjective'
            value={formFields.adj1}
            onChange={onInputChange}
            type='text' 
            className={formFields.adj1? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <input
            name='noun1'
            title='Type a noun here'
            placeholder='noun'
            value={formFields.noun1}
            onChange={onInputChange}
            type='text' 
            className={formFields.noun1? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <input
            name='adv'
            title='Type an adverb here'
            placeholder='adverb'
            value={formFields.adv}
            onChange={onInputChange}
            type='text' 
            className={formFields.adv? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <input
            name='verb'
            title='Type a verb here'
            placeholder='verb'
            value={formFields.verb}
            onChange={onInputChange}
            type='text' 
            className={formFields.verb? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <span>the</span>
          <input
            name='adj2'
            title='Type another adjective here'
            placeholder='adjective'
            value={formFields.adj2}
            onChange={onInputChange}
            type='text' 
            className={formFields.adj2? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <input
            name='noun2'
            title='Type another noun here'
            placeholder='noun'
            value={formFields.noun2}
            onChange={onInputChange}
            type='text' 
            className={formFields.noun2? '' : 'PlayerSubmissionForm__poem-inputs--empty'}/>
          <span>.</span>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            title='Submit Line'
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
};

const EMPTYFORM = {
  the1: 'The',
  adj1: '',
  noun1: '',
  adv: '',
  verb: '',
  the2: 'the',
  adj2: '',
  noun2: '',
  period: '.',
};

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  onSubmitFormCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;

//Reference: Web Accessibility while using input tags
//https://www.coolfields.co.uk/2011/04/accessible-forms-should-every-input-have-a-label/
//https://www.coolfields.co.uk/2016/05/text-for-screen-readers-only-updated/
