import { shallowMount } from '@vue/test-utils'
import SearchResults from '../../src/views/SearchResults.vue'

describe('SearchResults.vue', () => {
  it('renders props.tag when passed', () => {
    const tag = ''
    const wrapper = shallowMount(SearchResults, {
      props: { tag}
    })
    expect(wrapper.text()).toMatch(tag)
  })
})
