import { hello } from './hello-world'

describe('Hello world: ', () => {
    it('says hello world', () => {
      expect(hello()).toEqual('Hello, World!')
    })
})
