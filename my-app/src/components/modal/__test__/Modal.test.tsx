import Modal, {} from "../Modal"
import { shallow, render, mount } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';

const root = document.createElement('div')
const Child = () => <div>Yolo</div>;

const props = {
  active:false,
  setActive:() => jest.fn(),
  children:root,
  handleToggleModal : () => jest.fn()
}
describe('Modal component', () => {
  const mockfn = jest.fn();
  let wrapper:any;
  beforeEach(() => {
    wrapper = shallow(
      <Modal {...props} handleToggleModal={mockfn} setActive={mockfn}><Child/></Modal>
    );
  })
  it('should render all components ', () => {
    expect(wrapper.find('[className="modal"]').exists()).toBeTruthy();
    expect(wrapper.find('[className="modal__content"]').exists()).toBeTruthy();
    expect(wrapper.find('[className="modal__close"]').exists()).toBeTruthy();
    expect(wrapper.find('[className="deleteMenu__button deleteMenu__button--close"]').exists()).toBeTruthy();
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  });
  it('should toggle when clicked', () => {
    wrapper.find('[className="deleteMenu__button deleteMenu__button--close"]').simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
  it('should click close', () => {
    wrapper.find('[className="modal"]').simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});