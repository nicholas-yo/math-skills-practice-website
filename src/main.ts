import k from './lib/kazda';
import App from './app/main';
import './scss/main.scss';

const root = k.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(App);
