import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onRevealClick = () => {
    console.log('REVEAL!');
    props.onRevealCallback();
  };

  const readPoem = props.poem.map((line, i) => { 
    const newLine = Object.values(line).join(' ');
    return <p key={i}>{newLine}</p>;
  });
  // reference: https://www.freecodecamp.org/forum/t/newline-in-react-string-solved/68484/9
  
  return (
    <div className="FinalPoem">
      {props.revealStatus &&
      <section className="FinalPoem__poem">  
        <h3>Final Poem</h3>
        <section>{readPoem}</section>

      </section>
      }

      {!props.revealStatus &&
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
          onClick={onRevealClick}
        />
      </div>
      }
    </div>
  );
}

FinalPoem.propTypes ={
  poem: PropTypes.array.isRequired,
  onRevealCallback: PropTypes.func.isRequired,
  revealStatus: PropTypes.bool.isRequired
}

export default FinalPoem;
