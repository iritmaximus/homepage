import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";

import { App } from "./components/App";
import './index.css';

const container = document.getElementById("root");

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
      <App />
    </Router>
);
