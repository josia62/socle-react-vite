
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import Navigation from './presentation/navigation';

const App = (): any => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App
