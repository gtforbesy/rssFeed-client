import Feed from "../containers/Feed";
import * as sd from "skin-deep";
import React from "react";
import {NYT_LOGO_PATH} from "../constants/Constants"

describe("Feed", () => {
   const items = [{
        guid: "guid",
        author: "author",
        link: "link",
        title: "title",
        description: "description",
        pubDate: "Fri, 10 Mar 2023 19:02:57 +0000",
        comments: "comments"
   }];

    const tree = sd.shallowRender(<Feed items={items}/>);

    describe("props", () => {
        it("author", () => expect(tree.props.children[0].props.author).toEqual("author"));
        it("link", () => expect(tree.props.children[0].props.link).toEqual("link"));
        it("title", () => expect(tree.props.children[0].props.title).toEqual("title"));
        it("description", () => expect(tree.props.children[0].props.description).toEqual("description"));
        it("publishDate", () => expect(tree.props.children[0].props.publishDate).toEqual("Fri, 10 Mar 2023 19:02:57 +0000"));
        it("thumbnailUrl", () => expect(tree.props.children[0].props.thumbnailUrl).toEqual("comments"));
    });
});