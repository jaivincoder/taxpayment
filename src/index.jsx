import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';

let render = () => {
    import('./index.css').then(() => {
        require('./Apprenderer');
    });
};
render();
