import Vue from 'vue'
import StartPage from '@/components/StartPage'

describe('StartPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(StartPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p.title').textContent)
      .toEqual('Welcome to ToDo application')
    expect(vm.$el.querySelector('p.subtitle').textContent)
      .toEqual('Please login or register.')
  })
})
