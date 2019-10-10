/*
Реализуйте функцию и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами title и text, и возвращает jsx с подставленными значениями. Пример:

import getCard from '/Card';

getCard({ title: 'hi', text: 'how are you?' });
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>
*/

export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }

  const titleDom = title && <h4 className="card-title">{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;

  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
// VARIANT S PROPSAMI
  import React from 'react';

  // BEGIN
  export default class Card extends React.Component {
    render() {
      const { title, text } = this.props;
      return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
        </div>
      );
    }
  }

  //dl+dt
import { uniqueId } from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }

    const tags = data.map(({ dd, dt }) => (
      <React.Fragment key={uniqueId()}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}
// END
//progressbar
export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  }
}

//CLASSES INLINE
/* eslint-disable react/prefer-stateless-function */

import cn from 'classnames';
import React from 'react';

// BEGIN
export default class Alert extends React.Component {
  render() {
    const { type, text } = this.props;

    const alertClass = cn({
      alert: true,
      [`alert-${type}`]: true,
    });
    return (
      <div className={alertClass} role="alert">
        {text}
      </div>
    );
  }
}
// END
