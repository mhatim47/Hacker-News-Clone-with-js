import view from '../util/view.js'

export default async function Stories(path) {
    const stories = await getStories(path);
    const storiesList = document.createElement('ul');
    console.log(stories);
    view.innerHTML = ''
    stories.forEach(story => {
        const storyItem = document.createElement('li');
        storyItem.textContent = story.title;
        storiesList.appendChild(storyItem);
    });
    // view.innerHTML = `<div>${storiesList}</div>`
    view.appendChild(storiesList)
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
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}
// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show