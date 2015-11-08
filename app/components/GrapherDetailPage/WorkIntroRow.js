var React = require('react');
import { Router, Route, Link } from 'react-router';

import {imgModifier} from '../Tools';

var WorkIntroRow = React.createClass({
  getDefaultProps: function() {
    return {
      data: {
        img: ""
      }
    };
  },
  render: function() {
    const cover = imgModifier(this.props.data.Cover,"workCover");
    return (
      <div className="workIntroRow" style={{width:'100%',height:260/375*innerWidth+80,textAlign:'center'}}>
        <Link to={"/workDetail/" + this.props.data.Id}>
          <img 
            style={{width:'100%',height:260/375*innerWidth}}
            ref="workImage"
            src={cover} />
        </Link>
        <img 
          style={{marginBottom:1}}
          ref="workArrow"
          src="imgs/grapherDetailPage/work-arrow.png"
          srcSet="imgs/grapherDetailPage/work-arrow@2X.png 2x" />
        <div
          style={{marginTop:-6}}
          ref="workTitle">{this.props.data.Title}</div>
      </div>
    );
  }
});

module.exports = WorkIntroRow;