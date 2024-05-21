package com.partyapp.service;

import com.partyapp.model.party.Event;
import com.partyapp.model.party.EventAttender;

import java.util.Optional;

public interface EventService {
    EventAttender updateAttendersList(long eventId, long userId, boolean remove);
    public String generateInvitationCode();
    double calculateDistance(Double userLat, Double userLon, Double eventLat, Double eventLon);

    Optional<Event> getEventBySlug(String slug);

}
