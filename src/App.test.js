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

    it('should start with the game tab-content being active', () => {
        expect(wrapper.find('#game-tab-content').hostNodes())
            .toHaveLength(1);
    });

    it('should have 2 tabs', () => {
        expect(wrapper.find('#tab-1').hostNodes())
            .toHaveLength(1);

        expect(wrapper.find('#tab-0').hostNodes())
            .toHaveLength(1);
    });
    
    it('should switch between the tabs', () => {
        const settingsTabBtn = wrapper.find('#tab-1').hostNodes().first();
        const gameTabBtn = wrapper.find('#tab-0').hostNodes().first();

        settingsTabBtn.simulate('click');

        expect(wrapper.find('#settings-tab-content').hostNodes())
            .toHaveLength(1);

        expect(wrapper.find('#game-tab-content').hostNodes())
            .toHaveLength(0);

        gameTabBtn.simulate('click');

        expect(wrapper.find('#game-tab-content').hostNodes())
            .toHaveLength(1);

        expect(wrapper.find('#settings-tab-content').hostNodes())
            .toHaveLength(0);
    });
});