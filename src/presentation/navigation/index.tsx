import Protected from './protectedRoute';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExampleScreen from '../screens/protected/ExampleScreen';

const Navigation = (): any => {
  const { accessToken, user } = useSelector(({ auth }) => auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ExampleScreen} />
          <Route
            path="/example"
            element={
              <Protected isSignedIn={accessToken ? true : false}>
                <ExampleScreen />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
