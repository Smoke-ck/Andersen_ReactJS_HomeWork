import App from "./App"
import  { shallow, render, mount} from "enzyme";
import { Provider } from 'react-redux';
import { shallowToJson } from 'enzyme-to-json';
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";


 
const createStore = createMockStore([thunk]);
const props: any = {
  todos: [{
    title: "hi",
    completed: false,
    favorite: false,
    id: 50,
  }, {
    title: "hi",
    completed: false,
    favorite: false,
    id: 51,
  }],
  };

describe('App', () => {
  let wrapper: any;

  const store = createStore(props)
  
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper).toBeDefined();
  });
  it('renders form component', () => {
    expect(wrapper.find("Filters")).toBeTruthy()
    expect(shallowToJson(wrapper)).toMatchSnapshot(); 
  });
  it('renders form component', () => {
    expect(wrapper.find("List")).toBeTruthy()
    
  });
  it('renders form component', () => {
    expect(wrapper.find("Form")).toBeTruthy()
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
