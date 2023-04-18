package com.pts.costi_backend.web;

import com.pts.costi_backend.model.CalendarObjEntity;
import com.pts.costi_backend.model.dtos.CalendarDTO;
import com.pts.costi_backend.model.repositories.CalendarRepository;
import com.pts.costi_backend.model.services.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CalendarController {
    @Autowired
    private CalendarService calendarService;

    @PostMapping("/application/event")
    public ResponseEntity<Void> createEvent(@RequestBody CalendarDTO calendarDTO) {
        calendarService.createEvent(calendarDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
