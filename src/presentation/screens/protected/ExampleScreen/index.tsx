import React from 'react';
import { useSelector } from 'react-redux';
import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';

const ExampleScreen = () => {
    const { credentials } = useSelector(({ auth }: any) => auth);
    const { age } = userStates();
    const { incrementAge, handleUpdateAge } = userActions();
    return (
        <>
            <div>
              Hello world
            </div>
            <button onClick={incrementAge}>one up</button>
        </>
    );
};

export default ExampleScreen;
