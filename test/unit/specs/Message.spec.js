import { mount } from 'vue-test-utils';
import Message   from '@/components/Message';

describe('Message', () => {
    let wrapper;
    const createWrapper = propsData => mount(Message, {propsData});

    describe('Properties', () => {
        it('has a message property', () => {
            wrapper = createWrapper({ message: 'oi' });

            expect(wrapper.props().message).toEqual('oi');
        });

        it('has no a cat property', () => {
            wrapper = createWrapper({ cat : 'olá' });

            expect(wrapper.props().cat).toEqual('olá');
        });

        it('José is the default author', () => {
            wrapper = createWrapper({ message : 'oi' });

            expect(wrapper.hasProp('author', 'José')).toBeTruthy();
        });
    });

    describe('Validation', () => {
       const message = createWrapper().vm.$options.props.message

       it('message is of type string', () => {
           expect(message.type).toBe(String);
       });

       it('message is required', () => {
           expect(message.required).toBeTruthy();
       });

       it('message has at least length 2', () => {
           expect(message.validator && message.validator('a')).toBeFalsy();
           expect(message.validator && message.validator('aa')).toBeTruthy();
       });
    });

    describe('Events', () => {
        beforeEach(() => {
            wrapper = createWrapper({ message : 'Olá' });
        });

        it('calls handleClick when click on message', () => {
            const spy = spyOn(wrapper.vm, 'handleClick');

            wrapper.update(); // force to re-ender, applying changes on template
            wrapper.find('.message').trigger('click');

            expect(wrapper.vm.handleClick).toBeCalled();
        });

        it('calls handleClick when click on message with jest', () => {
            wrapper.vm.handleClick = jest.fn();

            wrapper.update(); // force to re-ender, applying changes on template
            wrapper.find('.message').trigger('click');

            expect(wrapper.vm.handleClick).toBeCalled();
        });

        it('calls handleClick when click on message with stub', () => {
            const stub = jest.fn();
            wrapper.setMethods({ handleClick : stub });

            wrapper.find('.message').trigger('click');

            expect(stub).toBeCalled();
        });

        it('triggers a message-clicked event when a handleClick method is called', () => {
            const stub = jest.fn();
            wrapper.vm.$on('message-clicked', stub);

            wrapper.vm.handleClick();

            expect(stub).toBeCalledWith('Olá');
        });

        // it('calls handleMessageClick when @message-click happens', () => {
        //     const stub = jest.fn();
        //     wrapper.setMethods({ handleMessageClick: stub });

        //     wrapper.update();
        //     wrapper.find(Message).vm.$emit('message-clicked', 'oi');

        //     expect(stub).toBeCalledWith('oi');
        // });
    });
});