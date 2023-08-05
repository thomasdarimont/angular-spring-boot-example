package mycompany.myapp.backend.messages;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class MessageService {

    private List<MessageItem> messages = new ArrayList<>(List.of( //
            new MessageItem(newId(), "Message 1"), //
            new MessageItem(newId(), "Message 2") //
    ));

    public List<MessageItem> getMessages() {
        return messages;
    }

    public void createMessage(NewMessageItem newItem) {
        var message = new MessageItem(newId(), newItem.text());
        messages.add(message);
    }

    private String newId() {
        return UUID.randomUUID().toString();
    }
}
