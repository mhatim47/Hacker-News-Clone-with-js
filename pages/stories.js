import view from '../util/view.js'
import Story from '../components/Story.js';
import baseUrl from '../util/baseUrl.js';
export default async function Stories(path) {
    const stories = await getStories(path);
    const hasStories = stories.length > 0;
    view.innerHTML = `
    <div>
    ${hasStories? stories.map((story, i) => Story({...story, index:i})).join('') : 'No Stories'}
    </div>`
}

async function getStories(path) {
    switch (path) {
        case "/":
            path = "/news"
            break;
        case "/new":
            path = "/newest"
            break;
    }
    const response = await fetch(`${baseUrl}${path}`);
    const stories = await response.json();
    return stories;
}
// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show