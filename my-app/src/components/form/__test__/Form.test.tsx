import Form from "../Form"
import Enzyme, { shallow, render, mount } from "enzyme";

import { Provider } from 'react-redux';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from "redux-mock-store";

 
const mockStore = configureStore([]);
const stringMore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lectus ut sodales porttitor. Mauris ac mattis arcu. Suspendisse id nisl vel lorem efficitur suscipit. Nullam leo quam, ultricies eu porta eget, malesuada at justo. Duis posuere gravida dolor vel tincidunt. In lorem massa, dapibus ut tortor eget, bibendum ultricies velit. Phasellus egestas feugiat augue, at vestibulum tortor sodales quis. Fusce id ante nunc. Praesent aliquam augue nec mauris egestas, at pulvinar turpis ornare. Pellentesque non ex tortor. Aliquam eu sem et lectus tempor auctor et ut metus. Fusce lacinia facilisis ante, at consequat velit elementum id. Suspendisse non turpis interdum, faucibus ligula sed, iaculis purus."
const mockDispatchfn = jest.fn();

describe('Form', () => {
  let wrapper: any;
  let store: any;
  const props: any = {
  createTodo: jest.fn(),
  };
  
  beforeEach(() => {
  store = mockStore({})
    jest.spyOn(store, "dispatch");
    wrapper = mount(
      <Provider store={store}>
        <Form {...props}  dispatch={mockDispatchfn} />
      </Provider>,
    );
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should renders form component', () => {
    expect(wrapper.find('[className="form"]').first()).toHaveLength(1);
  });

  it('should component value will be', () => {
    wrapper.find('[className="form__input"]').simulate('change', { target: { value: 'MyTest' } });
    expect(wrapper.find('[className="form__test__text"]').text()).toBe('MyTest');
  });
  it('should renders input field', () => {
    const inputField = wrapper.find('[className="form__input"]');
    expect(inputField.prop('type')).toBe('text');
  });
  it('should renders button', () => {
    const submitButton = wrapper.find('[className="form__button"]');
    expect(submitButton.prop('type')).toBe('submit');
  });
  it("should renders message error", () => {
    const input = wrapper.find('[className="form__input"]');
    input.simulate("change", { target: { value: stringMore } });
    expect(wrapper.find('[className="errorMsg"]').text()).toContain(
      "Превышен лимит текста задачи на"
    );
  });
});




























// describe('Selected component', () => {
//   let wrapper: any;

//   beforeEach(() => {
//     wrapper = mount(<Form{...props} />)
//   })
  
//   afterEach(() => {
//     wrapper.unmount();
//   })

//   it("component should render correctly", () => {
//     expect(wrapper).toBeTruthy();
//   })

//   // it("shoud render popup element", () => {
//   //   const popup = wrapper.find('[className="popup"]');
//   //   expect(popup).toHaveLength(1);
//   // })

//   // it("shoud render 4 button", () => {
//   //   const buttons = wrapper.find('[className="listItem__menu--button"]');
//   //   expect(buttons).toHaveLength(4);
//   // })

//   // it("shoud click for first button", () => {
//   //   wrapper.find("button").at(0).simulate('click');
//   //   expect(props.handleFavoriteToDo).toBeCalled();
//   // })

//   // it("shoud click for second button", () => {

//   //   wrapper.find("button").at(1).simulate('click');
//   //   expect(props.handleDoneToDo).toBeCalled();
//   // })

//   // it("shoud click for tird button", () => {

//   //   wrapper.find("button").at(2).simulate('click');
//   //   expect(props.handleClick).toBeCalled();
//   // })

//   // it("shoud click for fourth button", () => {

//   //   wrapper.find("button").at(3).simulate('click');
//   //   expect(props.handleToggleModal).toBeCalled();
//   // })
// })
