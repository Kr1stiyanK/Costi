package com.pts.costi_backend.web;

import com.pts.costi_backend.model.CalendarObjEntity;
import com.pts.costi_backend.model.dtos.CalendarDTO;
import com.pts.costi_backend.model.repositories.CalendarRepository;
import com.pts.costi_backend.model.services.CalendarService;
import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/application")
public class CalendarController {
    @Autowired
    private CalendarRepository calendarRepository;
    @Autowired
    private CalendarService calendarService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/event")
    public ResponseEntity<Void> createEvent(@RequestBody CalendarDTO calendarDTO) {
        calendarService.createEvent(calendarDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/delete-event")
    public String deleteObject(@RequestBody CalendarDTO calendarDTO) {
        CalendarObjEntity record = calendarRepository.findByTitle(calendarDTO.getTitle());
        if (record != null) {
            calendarRepository.delete(record);
            return "Record deleted successfully";
        } else {
            return "Record not found";
        }
    }

    @PostMapping("/delete-all")
    public ResponseEntity<Void> deleteAllEvents() {
        calendarRepository.deleteAll();
        return null;
    }

}