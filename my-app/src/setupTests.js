import Enzyme, { shallow, render, mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;