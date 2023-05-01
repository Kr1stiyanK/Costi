package com.pts.costi_backend.model.dtos;

import jakarta.validation.constraints.NotNull;

import java.util.Date;

public class EditDTO {
    @NotNull
    private String titleOld;
    @NotNull
    private Date startOld;
    @NotNull
    private Date endOld;
    @NotNull
    private String titleNew;
    @NotNull
    private Date startNew;
    @NotNull
    private Date endNew;

    public EditDTO() {
    }

    public String getTitleOld() {
        return titleOld;
    }

    public void setTitleOld(String titleOld) {
        this.titleOld = titleOld;
    }

    public Date getStartOld() {
        return startOld;
    }

    public void setStartOld(Date startOld) {
        this.startOld = startOld;
    }

    public Date getEndOld() {
        return endOld;
    }

    public void setEndOld(Date endOld) {
        this.endOld = endOld;
    }

    public String getTitleNew() {
        return titleNew;
    }

    public void setTitleNew(String titleNew) {
        this.titleNew = titleNew;
    }

    public Date getStartNew() {
        return startNew;
    }

    public void setStartNew(Date startNew) {
        this.startNew = startNew;
    }

    public Date getEndNew() {
        return endNew;
    }

    public void setEndNew(Date endNew) {
        this.endNew = endNew;
    }
}
