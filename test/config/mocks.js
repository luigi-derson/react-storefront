import { Observer, resetObservers } from '../mocks/mockObservers'
require('next')

global.IntersectionObserver = Observer
global.ResizeObserver = Observer
global.HTMLElement.prototype.scrollIntoView = () => {}

jest.doMock('next/router', () => require('../mocks/mockRouter'))
jest.doMock('next/link', () => require('../mocks/mockNextLink'))

global.beforeEach(() => {
  resetObservers()
})
