package com.pts.costi_backend.model;

import jakarta.persistence.*;
;
import java.util.Date;

@Entity
@Table(name = "calendar")
public class CalendarObjEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Date start;

    @Column(nullable = false)
    private Date end;

    public CalendarObjEntity(String title, Date start, Date end) {
        this.title = title;
        this.start = start;
        this.end = end;
    }

    public CalendarObjEntity() {

    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Date getStart() {
        return start;
    }

    public Date getEnd() {
        return end;
    }
}
