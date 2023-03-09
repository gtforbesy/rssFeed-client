import React from "react";
import Entry from "../components/Entry";


export default function Feed(props) {
    function renderPost(post) {

    return <Entry key={post.guid}
                author={post.author}
                link={post.link}
                title={post.title}
                description={post.description}
                publishDate={post.pubDate}
                thumbnailUrl={post.comments}
           />
    }

    return (
            <section>
                {props.items.map((item, index) => renderPost(item))}
            </section>
    );
}