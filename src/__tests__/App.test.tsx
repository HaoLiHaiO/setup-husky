import App from '../App';
import Enzyme, { shallow } from 'enzyme';
import { MockComponent } from '../Mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it("renders beginning of mockup component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(MockComponent).html()).toContain("This is just a mock component.");
    })

    it("renders end of mockup component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(MockComponent).html()).toContain("Set up husky");
    })
})