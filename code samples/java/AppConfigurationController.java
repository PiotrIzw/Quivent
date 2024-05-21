package com.partyapp.controller;

import com.partyapp.service.impl.AppConfigurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/app-config")
public class AppConfigurationController {

    @Autowired
    private AppConfigurationService appConfigurationService;

    @GetMapping("/version")
    public ResponseEntity<String> getCurrentVersion() {
        String version = appConfigurationService.getCurrentVersion();
        if (version != null) {
            return ResponseEntity.ok(version);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
