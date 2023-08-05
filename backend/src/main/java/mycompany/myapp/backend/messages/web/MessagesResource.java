package mycompany.myapp.backend.messages.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mycompany.myapp.backend.messages.MessageItem;
import mycompany.myapp.backend.messages.MessageService;
import mycompany.myapp.backend.messages.NewMessageItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/myapp/messages")
@CrossOrigin(origins = {"${app.dev.frontend.local}"})
class MessagesResource {

    private final MessageService messageService;

    @GetMapping
    public ResponseEntity<List<MessageItem>> listMessages() {
        log.debug("List messages");
        var messages = messageService.getMessages();
        return ResponseEntity.ok(messages);
    }

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody NewMessageItem newItem) {
        log.debug("Create message");
        messageService.createMessage(newItem);
        return ResponseEntity.ok().build();
    }

}
