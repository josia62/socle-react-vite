import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './style';

const ExampleScreen = () => {
    const { credentials } = useSelector(({ auth }: any) => auth);
    return (
        <>
            <div>
              Hello world
            </div>
        </>
    );
};

export default ExampleScreen;
