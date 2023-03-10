import Entry from "../components/Entry";
import * as sd from "skin-deep";
import React from "react";

describe("Entry", () => {
    const tree = sd.shallowRender(<Entry
            author="author"
            link="link"
            title="title"
            description="description"
            publishDate="Fri, 10 Mar 2023"
            thumbnailUrl="comments"
    />);

    it("Date", () => expect(tree.props.children[0].props.children[0]).toEqual(<p className="Entry-subtext">{`${new Date("Fri, 10 Mar 2023").toDateString()}`}</p>));
    it("title", () => expect(tree.props.children[0].props.children[1]).toEqual(<a href={"link"} rel="noreferrer" target="_blank"><p className="Entry-title">title</p></a>));
    it("description", () => expect(tree.props.children[0].props.children[2]).toEqual(<a href={"link"} rel="noreferrer" target="_blank"><p className="Entry-name">description</p></a>));
    it("author", () => expect(tree.props.children[0].props.children[3]).toEqual(<p className="Entry-subtext">By author</p>));

    it("img", () => expect(tree.props.children[1].props.children).toEqual(<a href={"link"} rel="noreferrer" target="_blank"><img alt="" src="comments" width="160px"/></a>));
});