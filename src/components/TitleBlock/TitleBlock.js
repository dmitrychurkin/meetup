import React from 'react';
import classnames from 'classnames';
import './TitleBlock.css';

const TitleBlock = ({ containerClassName, contentClassName }) => (
    <div className={classnames('TitleBlock', containerClassName)}>
        <h2 className={classnames('TitleBlock__title', contentClassName)}>
            +Blockchain
        </h2>
    </div>
);

export default TitleBlock;