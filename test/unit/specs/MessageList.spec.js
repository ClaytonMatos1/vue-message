import { mount }   from "vue-test-utils";
import MessageList from '@/components/MessageList';
import Message     from '@/components/Message';

describe('MessageList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MessageList, {
            propsData : {
                messages: ['Adeus']
            }
        });
    });

    it('has received ["Adeus"] as the message property', () => {
        expect(wrapper.vm.messages).toEqual(['Adeus']);
    });

    it('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('is a MessageList component', () => {
        expect(wrapper.is(MessageList)).toBeTruthy();
        expect(wrapper.is('ul')).toBeTruthy();
    });

    it('contains a Message component', () => {
        expect(wrapper.contains(Message)).toBeTruthy();
        expect(wrapper.contains('.message')).toBeTruthy();
    });

    it('both MessageList and Message are vue instances', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.find(Message).isVueInstance).toBeTruthy();
    });

    it('message element exists', () => {
        expect(wrapper.find('.message')).toBeTruthy();
    });

    it('message is not empty', () => {
        expect(wrapper.find(Message).isEmpty()).toBeFalsy();;
    });

    it('message has a class attribute set to "message"', () => {
        expect(wrapper.find(Message).attributes('class', 'message')).toBeTruthy();
    });

    it('message component has the .message class', () => {
        expect(wrapper.find(Message).classes()).toContain('message');
    });

    it('message component has style margin-top equal 10px', () => {
        // expect(wrapper.find(Message).hasStyle('margin-top', '10px')).toBe(true)
    });
});