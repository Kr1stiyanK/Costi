package com.pts.costi_backend.model.services;

import com.pts.costi_backend.model.CalendarObjEntity;
import com.pts.costi_backend.model.dtos.CalendarDTO;
import com.pts.costi_backend.model.repositories.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.Query;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import jakarta.websocket.Session;
import java.util.Calendar;

@Service
public class CalendarService {
    @Autowired
    private CalendarRepository calendarRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public boolean isRecordExists(CalendarObjEntity entity) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<CalendarObjEntity> root = criteria.from(CalendarObjEntity.class);
        criteria.select(builder.count(root)).where(builder.equal(root.get("start"), entity.getStart()));
        return entityManager.createQuery(criteria).getSingleResult() > 0;
    }

    public void createEvent(CalendarDTO calendarDTO) {
        CalendarObjEntity calendarObj = new CalendarObjEntity(
                calendarDTO.getTitle(),
                calendarDTO.getStartDate(),
                calendarDTO.getEndDate());
        if (!isRecordExists(calendarObj)) {
            calendarRepository.save(calendarObj);
        }
    }
}
