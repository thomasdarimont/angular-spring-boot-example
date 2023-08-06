package mycompany.myapp.backend.messages.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mycompany.myapp.backend.messages.Message;
import mycompany.myapp.backend.messages.MessageService;
import mycompany.myapp.backend.messages.MessageInput;
import org.springframework.http.ResponseEntity;
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
class MessageResource {

    private final MessageService messageService;

    @GetMapping
    public ResponseEntity<List<Message>> listMessages() {
        log.debug("List messages");
        var messages = messageService.getMessages();
        return ResponseEntity.ok(messages);
    }

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody MessageInput input) {
        log.debug("Create message");
        messageService.createMessage(input);
        return ResponseEntity.ok().build();
    }

}
