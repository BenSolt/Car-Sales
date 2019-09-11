import React from 'react';
import AdditionalFeature from './AdditionalFeature';

//import Connect
import { connect } from "react-redux";


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



const mapStateToProps = state => {
  console.log('mSTP', state);
  return{

  };
};

//export default AdditionalFeatures;
export default  connect(mapStateToProps, {})(AdditionalFeatures);
