// @flow
import React, { Component } from 'react';
import styles from './Joint.css';

type Props = {};

export default class Joint extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.fileContainer} />
      </div>
    );
  }
}
