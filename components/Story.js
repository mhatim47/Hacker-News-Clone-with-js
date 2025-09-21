export default function Story(story) {
    return `
    <div class="story">
        <div>
            <span class="gray">${story.index}</span> 
            <span class="upvote">▲</span> 
            <a href=${story.url}>${story.title}</a> 
            <span>(${story.domain})</span>
        </div>
        <div class="gray">
            ${story.points} points by ${story.usr} ${story.time_ago} |
            <a href="#/item?id=${story.id}">
                ${story.comments_count} Comments
            </a> |
            <span class="favorite">
                <img class="heart" src="https://icon.now.sh/heart/ccc">
                Add To Favorites
            </span>   
        </div>
    </div>
    `
}