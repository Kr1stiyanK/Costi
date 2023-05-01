package com.pts.costi_backend.model.dtos;

import jakarta.validation.constraints.NotNull;
import java.util.Date;


public class CalendarDTO {
    @NotNull
    private String title;
    @NotNull
    private Date start;
    @NotNull
    private Date end;

    public CalendarDTO() {
    }

    public CalendarDTO(String title, Date start, Date end) {
        this.title = title;
        this.start = start;
        this.end = end;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getStartDate() {
        return start;
    }

    public void setStartDate(Date start) {
        this.start = start;
    }

    public Date getEndDate() {
        return end;
    }

    public void setEndDate(Date end) {
        this.end = end;
    }
}
