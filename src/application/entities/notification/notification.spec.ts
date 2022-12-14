import { Content } from "./content";
import { Notification } from "./notification";

describe('Notifications', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizada'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });
  
    expect(notification).toBeTruthy();
  });  
});

