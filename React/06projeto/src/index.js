// Importar o módulo ReactDOM
import { createRoot } from 'react-dom/client';

// Importar o componente Principal
import Principal from './Principal';

// Render
const elemento = document.getElementById('root');
const root = createRoot(elemento);
root.render(<Principal />);