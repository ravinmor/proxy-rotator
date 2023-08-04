import {
  TaskBuilder
} from '../../src/services/ProxyRotator'

jest.setTimeout(80000)
describe('Rotate proxies', () => {
  it('verifies 2 + 2 = 4', async () => {
    const pup = new TaskBuilder();

    pup.setName('ravin')
      .setDescription('Lindao')
      .setFinished(false)
      .setDueDate(new Date(2019, 5, 12))
      .build()

    console.log(pup)
    expect(2 + 2).toBe(4)
  })
})
