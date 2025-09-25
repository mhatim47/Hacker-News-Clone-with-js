import Story from "../components/Story.js";
import view from "../util/view.js";
import baseUrl from '../util/baseUrl.js';


export default async function Item() {
    
    let story = null;  
    let hasComments = false;
    let hassError = false;
    try {
        story = await getStory();
        hasComments = story.comments.length > 0;
        
    } catch (error) {
        console.error(`Error :${error}`)
    }
    if (hassError) {
        view.innerHTML = `<div class="error">Error fetching stories</div>`
    }
    view.innerHTML = 
    `
    <div>
    ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join(''): 'No Comments'}
    `;    
}


async function getStory() {
    const id = window.location.hash.split("?id=")[1];
    const response = await fetch(`${baseUrl}/item/${id}`);
    const story = await response.json()
    return story;    
}