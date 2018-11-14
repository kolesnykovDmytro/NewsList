import { shallowMount } from '@vue/test-utils'
import ArticlesList from '@/components/ArticlesList.vue'

describe('ArticlesList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ArticlesList, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
