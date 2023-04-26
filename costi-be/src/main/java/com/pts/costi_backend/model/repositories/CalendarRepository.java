package com.pts.costi_backend.model.repositories;

import com.pts.costi_backend.model.CalendarObjEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface CalendarRepository extends JpaRepository<CalendarObjEntity, Long> {
    //    List<CalendarObjEntity> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);
    CalendarObjEntity findByTitle(String title);

    void deleteAll();
}
