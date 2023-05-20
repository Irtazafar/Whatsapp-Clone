document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#app',
    data: {
      contacts: [
        { id: 1, name: 'Jane Smith', avatar: 'avatar1.jpg', status: 'Online', messages: [
          { id: 1, sender: 'Jane Smith', content: 'Hi John!', timestamp: '10:00 AM', avatar: 'avatar1.jpg' },
          { id: 2, sender: 'John Doe', content: 'Hey Jane, how are you?', timestamp: '10:02 AM', avatar: 'avatar.jpg' },
          { id: 3, sender: 'Jane Smith', content: 'I\'m good, thanks!', timestamp: '10:05 AM', avatar: 'avatar1.jpg' },
          // Add more messages here for Jane Smith
        ]},
        { id: 2, name: 'Alice Johnson', avatar: 'avatar2.jpg', status: 'Offline', messages: [
          { id: 1, sender: 'Alice Johnson', content: 'Hi John!', timestamp: '11:00 AM', avatar: 'avatar2.jpg' },
          { id: 2, sender: 'John Doe', content: 'Hey Alice, how are you?', timestamp: '11:02 AM', avatar: 'avatar.jpg' },
          { id: 3, sender: 'Alice Johnson', content: 'I\'m fine, thanks!', timestamp: '11:05 AM', avatar: 'avatar2.jpg' },
          // Add more messages here for Alice Johnson
        ]}
        // Add more contacts here
      ],
      selectedContact: {},
      newMessage: ''
    },
    methods: {
      selectContact(contact) {
        this.selectedContact = contact;
      },
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          const newMessage = {
            id: this.selectedContact.messages.length + 1,
            sender: 'John Doe',
            content: this.newMessage,
            timestamp: this.getCurrentTimestamp(),
            avatar: 'avatar.jpg'
          };
          this.selectedContact.messages.push(newMessage);
          this.newMessage = '';
          // Simulate receiving a reply after a short delay
          setTimeout(this.receiveReply, 1000);
        }
      },
      receiveReply() {
        const replyMessage = {
          id: this.selectedContact.messages.length + 1,
          sender: this.selectedContact.name,
          content: 'Sample reply',
          timestamp: this.getCurrentTimestamp(),
          avatar: this.selectedContact.avatar
        };
        this.selectedContact.messages.push(replyMessage);
      },
      getCurrentTimestamp() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
      }
    },
    mounted() {
      this.selectedContact = this.contacts[0];
    }
  });
});
