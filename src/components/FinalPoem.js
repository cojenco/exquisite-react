import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const readPoem = props.poem.map((line, i) => {
    const newLine = Object.values(line).join(' ');
    return <p key={i}>{newLine}</p>;
  });  //use <p> tag to skip new line. Reference: https://www.freecodecamp.org/forum/t/newline-in-react-string-solved/68484/9
  
  const onClickReveal = () => {
    if (props.poem.length > 0) {
      props.onRevealCallback();
    }
  };

  return (
    <div className="FinalPoem">

      {props.revealStatus &&
      <section className="FinalPoem__poem">  
        <h3>Final Poem</h3>
        <section>{readPoem}</section>
      </section>}

      {!props.revealStatus &&
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
          onClick={onClickReveal}
        />
      </div>}

    </div>
  );
}

FinalPoem.propTypes ={
  poem: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRevealCallback: PropTypes.func.isRequired,  //callback func to change state (revealStatus) in Game and then send state back again as props
  revealStatus: PropTypes.bool.isRequired,
}

export default FinalPoem;