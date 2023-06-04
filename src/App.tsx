import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider
      client={queryClient}
      data-testid='query-client-provider'
    >
      <HomePage data-testid='home-page' />
    </QueryClientProvider>
  );
}

export default App;
