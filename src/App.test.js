import { createRoot } from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
  createRoot(div).render(<App />);
});