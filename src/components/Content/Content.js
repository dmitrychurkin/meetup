import React from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'components';
import './Content.css';

const Content = ({ name, banner, children, goBack }) => (
    <div className='Content'>
        <Route
            path='/region/:city/:event'
            render={() => (
                <Button
                    back
                    onClick={goBack}
                >
                    back
                </Button>
            )}
        />
        <div className='Content__container'>
            <div
                style={{
                    backgroundImage: `url(${banner})`
                }}
                className='Content__head'>
                <h1 className='Content__head_title'>{name}</h1>
            </div>
            <div className='Content__wrap'>{children}</div>
        </div>
    </div>
);


export default Content;