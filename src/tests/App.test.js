import App from "../App";
import * as sd from "skin-deep";
import React from "react";
import {getByKeyName} from "./testingUtils";
import * as axios from "axios";
import logo from '../logo.svg';

const rssItems = [{title: "title1"}, {title: "title2"}];

describe("App", () => {
    it("constructor, default state", () => {
        const tree = sd.shallowRender(<App />);
        expect(tree.getMountedInstance().state).toEqual({rssItems: [], isLoaded: false});
    });

    describe("header", () => {
        const tree = sd.shallowRender(<App/>);
        tree.getMountedInstance().setState({rssItems, isLoaded:true});

        it("does not display", () => {
            const tree = sd.shallowRender(<App/>);
            expect(getByKeyName(tree, "root-div").props.children[0]).toEqual(<></>);
        });

        it("displays", () => expect(getByKeyName(tree, "root-div").props.children[0]).not.toEqual(<></>));
        it("props items", () => expect(getByKeyName(tree, "root-div").props.children[0].props.items).toEqual(rssItems));
    });

    describe("fallBack", () => {
     const tree = sd.shallowRender(<App/>);
        it("img", () => expect(getByKeyName(tree, "root-div").props.children[1].props.children[0]).toEqual(<img src={logo} className="App-logo" alt="logo" />));
        it("text", () => expect(getByKeyName(tree, "root-div").props.children[1].props.children[1]).toEqual("Site under construction"));
    });

    describe("Feed", () => {
                const tree = sd.shallowRender(<App/>);
                tree.getMountedInstance().setState({rssItems, isLoaded:true});

        it("props, items", () => expect(getByKeyName(tree, "root-div").props.children[1].props.items).toEqual(rssItems));
    });
});
