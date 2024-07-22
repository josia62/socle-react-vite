
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import Navigation from './presentation/navigation';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const App = (): any => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <Navigation />
      </QueryClientProvider>
    </Provider>
  );
};

export default App
