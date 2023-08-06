package mycompany.myapp.backend.messages;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class MessageService {

    private List<Message> messages = new CopyOnWriteArrayList<>(List.of( //
            new Message(newId(), "Message 1"), //
            new Message(newId(), "Message 2") //
    ));

    public List<Message> getMessages() {
        return messages;
    }

    public void createMessage(MessageInput input) {
        var message = new Message(newId(), input.text());
        messages.add(message);
    }

    private String newId() {
        return UUID.randomUUID().toString();
    }
}
