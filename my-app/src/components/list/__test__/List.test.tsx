import ConnectedList, { List } from "../List"
import { shallow, render, mount } from "enzyme";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallowToJson } from 'enzyme-to-json';
import thunk from "redux-thunk";

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
    onItemToggle: jest.fn(),
    onItemFavorite: jest.fn(),
    onItemDelete: jest.fn(),
    onUpdate: jest.fn()
  };
  
  describe('List',()=>{
    
    it('should show container div', () => {
      const render =  shallow(<List {...props}/>)
      expect(render.find('[className="list"]').length).toEqual(1)
    });

});

const todos = [{
  title: "hi",
  completed: false,
  favorite: false,
  id: 50,
}, {
  title: "hi",
  completed: true,
  favorite: true,
  id: 51,
}, {
  title: "hi",
  completed: false,
  favorite: false,
  id: 52,
}, {
  title: "hi",
  completed: true,
  favorite: false,
  id: 53,
}]


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({
  getState: jest.fn(() => ({
    todos:todos,
    todosFilter:{value:'all'}
  })),
  dispatch: jest.fn()
})
describe('ConnectedList container', () => {
  let wrapper:any;
  it('render wrapped into provider with mocked store', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ConnectedList {...todos}/>
      </Provider>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
})