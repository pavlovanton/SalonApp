import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames';
import Panel from './Panel';
import DICT from '../constants/dict';
import moment from 'moment';

export default class InfoPanel extends Component {
  render() {
    const content = this.props.content;
    const show = _.intersection(Object.keys(content), Object.keys(DICT)).length ? true : false;

    return (
      show &&
      <div className={classNames('info-panel', this.props.className)}>
        <table>
          <thead>
          </thead>
          <tbody>
            {Object.keys(content).map(key => (
              DICT[key] &&
              <tr key={key}>
                <th>{DICT[key].translate}:</th>
                <td>{DICT[key].type === 'date' ? moment(content[key]).format('MMMM D YYYY') : content[key]}</td>
              </tr>))}
          </tbody>
        </table>
      </div>
      //<Panel content={infoContent} className={classNames('info-panel', this.props.className)}/>
    );
  }
}
