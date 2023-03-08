import {MessageService} from "./message.service";

describe('MessageService', () => {
  let service: MessageService

  beforeEach(() => {
  })

  it('sould have no messages to start', () => {
    service = new MessageService();
      expect(service.messages.length).toBe(0);
  })

  it('sould add a message when add is called', () => {
    service = new MessageService();
    service.add("message1")
    expect(service.messages.length).toBe(1);
  })


  it('sould remove all messages when clear is called', () => {
    service = new MessageService();
    service.add("message1")

    service.clear();
    expect(service.messages.length).toBe(0);
  })
})
