import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const emptyForm = {
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
  const [formFields, setFormFields] = useState(emptyForm);

  const onInputChange = (event) => {
    const newForm = {...formFields};
    newForm[event.target.name] = event.target.value;
    // console.log(newForm);
    setFormFields(newForm);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();               
    //send back form to Game via callback
    const newForm = {...formFields};
    props.onSubmitFormCallback(newForm);
    //clear form
    setFormFields(emptyForm);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitForm}>

        <div className="PlayerSubmissionForm__poem-inputs">

          <span>The</span>
          <input
            name='adj1'
            placeholder='adjective'
            value={formFields.adj1}
            onChange={onInputChange}
            type='text' />
          <input
            name='noun1'
            placeholder='noun'
            value={formFields.noun1}
            onChange={onInputChange}
            type='text' />
          <input
            name='adv'
            placeholder='adverb'
            value={formFields.adv}
            onChange={onInputChange}
            type='text' />
          <input
            name='verb'
            placeholder='verb'
            value={formFields.verb}
            onChange={onInputChange}
            type='text' />
          <span>the</span>
          <input
            name='adj2'
            placeholder='adjective'
            value={formFields.adj2}
            onChange={onInputChange}
            type='text' />
          <input
            name='noun2'
            placeholder='noun'
            value={formFields.noun2}
            onChange={onInputChange}
            type='text' />
          <span>.</span>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" 
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn" 
          />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  onSubmitFormCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;



  // const [formFields, setFormFields] = useState(  //array of strings and objects
  //   [
  //     "The", //0
  //     {
  //       key: 'adj1', //1
  //       // placeholder: 'adjective',
  //       value: '',
  //     },
  //     {
  //       key: 'noun1', //2
  //       // placeholder: 'noun',
  //       value: '',
  //     },
  //     {
  //       key: 'adv', //3
  //       // placeholder: 'adverb',
  //       value: '',
  //     },
  //     {
  //       key: 'verb', //4
  //       // placeholder: 'verb',
  //       value: '',
  //     },
  //     "the",  //5
  //     {
  //       key: 'adj2',  //6
  //       // placeholder: 'adjective',
  //       value: '',
  //     },
  //     {
  //       key: 'noun2', //7
  //       // placeholder: 'noun',
  //       value: '',
  //     },
  //     ".",
  //   ]
  // );

  // const onInputChange = (event) => {
  //   const newForm = [...formFields].map((field) => {
  //     if (field.key === event.target.name) {
  //       field.value = event.target.value;
  //       return field;
  //     } else {
  //       return field;
  //     }
  //   });

  //   console.log(newForm);
  //   setFormFields(newForm);
  // }

