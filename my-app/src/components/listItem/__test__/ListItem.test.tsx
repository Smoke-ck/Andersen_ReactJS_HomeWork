import ListItem, { } from "../ListItem"
import { shallow, render, mount } from "enzyme";
import { IToDos } from "../../../api";
import { shallowToJson } from 'enzyme-to-json';
import PopUp from "../popUp/PopUp";

const props = {
    item: {
        title: "Hi from test",
        completed: false,
        favorite: false,
        id: 50,
    },
    onItemToggle: jest.fn(),
    onItemDelete: jest.fn(),
    onItemFavorite: jest.fn(),
    onUpdate: jest.fn(),
}

const event = Object.assign(jest.fn(), {stopPropagation: () => {}})

describe('ListItem', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(<ListItem {...props} />)
    })
    
    it("shoud render wrapper", () => {
       const click= wrapper.find('[className="listItem__wrapper"]');
       expect(click.length).toBe(1);
       expect(shallowToJson(wrapper)).toMatchSnapshot()
        
    })
    it("shoud toggle favorite todo", () => { 
        wrapper.find('[className="listItem___button--favorite"]').simulate('click',event);
        expect(props.onItemFavorite).toBeCalled();
    })
    it("shoud toggle favorite todo", () => { 
        wrapper.find('[className="listItem__wrapper"]').simulate('click',event);
        expect(wrapper.find(PopUp)).toBeTruthy()
    })
})
