import "./App.css";
import Layout from './components/Header/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary'; // Adjust the path accordingly

function App() {
  return  <ErrorBoundary> <Layout/> </ErrorBoundary>;
}

export default App;
