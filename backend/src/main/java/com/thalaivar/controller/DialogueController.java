package com.thalaivar.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;
import java.util.Random;

@RestController
@RequestMapping("/api/dialogue")
public class DialogueController {

    private final List<String> aiDialogues = Arrays.asList(
        "எதிரி எவ்வளவு பெரிய ஆளா இருந்தாலும், என் முன்னாடி அவன் வெறும் தூசு தான்!",
        "நான் அமைதியா இருந்தா புயல் வரப்போகுதுன்னு அர்த்தம்!",
        "அன்பால அடிச்சா தாங்குவேன், அதிகாரத்தால அடிச்சா திருப்பி அடிப்பேன்!",
        "நல்லவங்களுக்கு நான் நண்பன், கெட்டவங்களுக்கு நான் எமன்!",
        "நேரம் வரும்போது என் ஆட்டம் ஆரம்பமாகும், அப்போ உங்க ஆட்டம் முடிஞ்சிரும்!"
    );

    @GetMapping("/random")
    public DialogueDto getRandomAiDialogue() {
        Random rand = new Random();
        String randomText = aiDialogues.get(rand.nextInt(aiDialogues.size()));
        return new DialogueDto(randomText);
    }

    public static class DialogueDto {
        public String text;
        public DialogueDto(String text) {
            this.text = text;
        }
    }
}
