import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { buyItem } from '../actions/removebuyActions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (initialState) => {
  return {
    additionalFeatures: initialState.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures); // calling a function twice in this manner is known as 'function currying'

//connect is a function that gets called twice!
//The first call: takes two arguments-- #1 is a function conventionally called mapStateToProps().
//#2 is an object of action creaters. An action creater is a function that returns an action object. 
//Under the hood, redux will take that action object that was returned, and dispatch it to the reducer. 


//The second call: takes the component you want to connect as an argument.
