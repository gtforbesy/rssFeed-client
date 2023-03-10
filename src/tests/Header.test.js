import Header from "../containers/Header";
import * as sd from "skin-deep";
import React from "react";
import {NYT_LOGO_PATH} from "../constants/Constants"

describe("Header", () => {
    const items = [{pubDate: "Fri, 10 Mar 2023 19:02:57 +0000"}];
    const tree = sd.shallowRender(<Header items={items}/>);

    it("Date", () => expect(tree.props.children.props.children[0]).toEqual(<p className="Entry-date align-left">Fri Mar 10 2023</p>));
    it("Logo", () => expect(tree.props.children.props.children[1]).toEqual(<div className="align-center"><svg style={{height: "50px", width: "200px"}}viewBox="0 0 184 25" fill="#000"><path d={NYT_LOGO_PATH}></path></svg></div>));
    it("ENG", () => expect(tree.props.children.props.children[2]).toEqual(<p className="align-right">ENG</p>));
});