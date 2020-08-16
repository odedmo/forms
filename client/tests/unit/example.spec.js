import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import BaseForm from '../../src/components/BaseForm.vue'

describe('BaseForm', () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(BaseForm, {
      localVue,
      vuetify,
      attachToDocument: true,
      data() {
        return {
          state: {
            baseForm: {
              name: 'test-name',
              budget: 1
            },
            getBaseForm: () => {
              return {
                name: 'test-name',
                budget: 1
              }
            }
          }
        }
      }
    });
  })

  it('should render a name input', () => {
    expect(wrapper.find('[data-testid="name-input"]').exists()).toBe(true);
  });

  it('should render a budget input', () => {
    expect(wrapper.find('[data-testid="budget-input"]').exists()).toBe(true);
  });

  it('should render a budget input', () => {
    expect(wrapper.find('[data-testid="name-input"]').text()).toEqual('test-name');
  });
})