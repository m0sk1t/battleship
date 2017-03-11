import React, { Component, PropTypes } from 'react';
import Game from './Game';
import Sidebar from './Sidebar';

import './GameLayout.scss';

export default class GameLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  };

  render() {
    const { data, actions } = this.props;

    return (
      <div className="container wrapper">
        <div className="row">
          <div className="content col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <Game
              hitShoots={data.hits}
              missShoots={data.misses}
              onCellClick={actions.shootCell}
            />
          </div>
          <Sidebar
            ships={data.layout}
            hits={data.hits}
            misses={data.misses}
          />
        </div>
      </div>
    );
  }
}
