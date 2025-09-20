import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');


export default class RouterHandler {
    constructor() {
        this.createRoutes();
    }
    createRoutes() {

        const routers = [
            {path: '/', page:Stories},
            {path: '/new', page:Stories},
            {path: '/ask', page:Stories},
            {path: '/show', page:Stories},
            {path: '/favorites', page:Stories},
        ];

        routers.forEach(({path, page}) => {
            router.on(path, () => page(path)).resolve();
        })
    }
}


