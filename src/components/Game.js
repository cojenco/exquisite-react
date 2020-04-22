import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [player, setPlayer] = useState(1);
  const [linesSubmitted, setlinesSubmitted] = useState([]);  //array of objects that represent lines of poem
  const [revealStatus, setRevealStatus] = useState(false);
  
  const submitLine = (newLine) => {
    const allLines = [...linesSubmitted];
    allLines.push(newLine);
    setlinesSubmitted(allLines);
    setPlayer(player + 1);
  };

  const revealPoem = () => {
    setRevealStatus(true);
  };

  const resetGame = () => {
    setRevealStatus(false);
    setlinesSubmitted([]);
    setPlayer(1);
  }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {!revealStatus && linesSubmitted.length > 0 && 
      <RecentSubmission mostRecentLine={linesSubmitted[linesSubmitted.length - 1]} />}

      {!revealStatus && 
      <PlayerSubmissionForm onSubmitFormCallback={submitLine} player={player} />}

      <FinalPoem poem={linesSubmitted} onRevealCallback={revealPoem} revealStatus={revealStatus} />
      
      {revealStatus &&
      <div className='FinalPoem__reveal-btn-container'>
        <input 
          type='button' 
          value='Play Again' 
          title='Click button to play again'
          className='PlayerSubmissionForm__submit-btn'
          onClick={resetGame}
        />
      </div>}
    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;