import PopUp, { } from "../PopUp"
import { shallow, render, mount } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';

const props = {
  handleFavoriteToDo: jest.fn(),
  handleDoneToDo: jest.fn(),
  handleClick: jest.fn(),
  handleToggleModal: jest.fn(),
  item: {
    title: "hi",
    completed: false,
    favorite: false,
    id: 50,
  }
}

describe('Selected component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<PopUp{...props} />)
  })
  
  afterEach(() => {
    wrapper.unmount();
  })

  it("component should render correctly", () => {
    expect(wrapper).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it("shoud render popup element", () => {
    const popup = wrapper.find('[className="popup"]');
    expect(popup).toHaveLength(1);
  })

  it("shoud render 4 button", () => {
    const buttons = wrapper.find('[className="listItem__menu--button"]');
    expect(buttons).toHaveLength(4);
  })

  it("shoud click for first button", () => {
    wrapper.find("button").at(0).simulate('click');
    expect(props.handleFavoriteToDo).toBeCalled();
  })

  it("shoud click for second button", () => {
    wrapper.find("button").at(1).simulate('click');
    expect(props.handleDoneToDo).toBeCalled();
  })

  it("shoud click for tird button", () => {
    wrapper.find("button").at(2).simulate('click');
    expect(props.handleClick).toBeCalled();
  })

  it("shoud click for fourth button", () => {
    wrapper.find("button").at(3).simulate('click');
    expect(props.handleToggleModal).toBeCalled();
  })
})


