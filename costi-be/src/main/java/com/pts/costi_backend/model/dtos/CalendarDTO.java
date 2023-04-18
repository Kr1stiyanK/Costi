package com.pts.costi_backend.model.dtos;

import javax.validation.constraints.NotNull;
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
