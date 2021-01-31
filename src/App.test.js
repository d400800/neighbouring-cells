import {mount,  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";

import App from './App';

configure({adapter: new Adapter()});

describe('Testing App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App/>);
    });

    it('should start with the game tab active', () => {
        expect(wrapper.find('#game-tab-content').hostNodes())
            .toHaveLength(1);
    });
});