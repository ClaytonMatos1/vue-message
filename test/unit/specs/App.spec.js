/*
 *
 * com vue-test-utils
 *
 */
import { shallow } from "vue-test-utils";
import App         from '@/App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(App, {
			data : {
				messages : ['Tchau']
			}
		});
	});

	it('must render a message equal to ["Tchau"]', () => {
		expect(wrapper.vm.messages).toEqual(['Tchau']);
	});
});

/*
 *
 * sem vue-test-utils
 *
 */
/*
import Vue from 'vue';
import App from '@/App';

describe('App', () => {
	let component, vm;

	beforeEach(() => {
		component = Vue.extend(App);
		vm = new component({
			data : {
				messages : ['Tchau']
			}
		}).$mount();
	});

	it('must render a message equal to  ["Tchau"]', () => {
		expect(vm.messages).toEqual(['Tchau']);
	});

	it('has the expected html structure', () => {
		expect(vm.$el).toMatchSnapshot();
	});
});
*/