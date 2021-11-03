import  { Filters } from "../Filters"
import  { shallow } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';

const props: any = {
        setTodosFilter: jest.fn(),
        filter: "All"
    }

describe('Filters snapshot',()=>{
    let wrapper:any;
    beforeEach(() => {
         wrapper =  shallow(<Filters {...props}/>);
    });
    it("shoud render div", () => {
        const container = wrapper.find('[className="filter"]');
        expect(container).toHaveLength(1);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      })
    it("shoud render 4 button", () => {
        const buttons = wrapper.find('[className="filter__button"]');
        expect(buttons).toHaveLength(4);
      })
      it("shoud render togleButton", () => {
        wrapper.find("button").at(0).simulate('click');
        expect(wrapper.find('[className="filter__button filter__button--active"]'));
      })
      it("shoud render togleButton", () => {
        wrapper.find("button").at(1).simulate('click');
        expect(wrapper.find('[className="filter__button filter__button--active"]'));
      })
      it("shoud render togleButton", () => {
        wrapper.find("button").at(2).simulate('click');
        expect(wrapper.find('[className="filter__button filter__button--active"]'));
      })
      it("shoud render togleButton", () => {
        wrapper.find("button").at(3).simulate('click');
        expect(wrapper.find('[className="filter__button filter__button--active"]'));
      })
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
