package com.thalaivar.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @GetMapping
    public List<MovieDto> getAllMovies() {
        return Arrays.asList(
            new MovieDto(1, "Baasha", 1995, 9.5, "Action", "🔫", "#1a1a2e"),
            new MovieDto(2, "Muthu", 1995, 8.8, "Drama", "🐎", "#1a2e1a"),
            new MovieDto(3, "Padayappa", 1999, 9.2, "Action", "⛰️", "#1a2e1a"),
            new MovieDto(4, "Sivaji", 2007, 8.9, "Thriller", "🎩", "#1a1a2e"),
            new MovieDto(5, "Enthiran", 2010, 9.1, "Sci-Fi", "🤖", "#1a2a2e"),
            new MovieDto(6, "Kabali", 2016, 8.3, "Drama", "👓", "#2e2a1a"),
            new MovieDto(7, "Petta", 2019, 8.9, "Action", "🧢", "#1a1a2e"),
            new MovieDto(8, "Jailer", 2023, 9.0, "Action", "⛓️", "#2e1a2a")
        );
    }
    
    @GetMapping("/featured")
    public List<MovieDto> getFeaturedMovies() {
        return getAllMovies(); // Just return top 8 for featured
    }

    // Inner DTO class for simplicity
    public static class MovieDto {
        public int id;
        public String title;
        public int year;
        public double rating;
        public String genre;
        public String emoji;
        public String color;

        public MovieDto(int id, String title, int year, double rating, String genre, String emoji, String color) {
            this.id = id; this.title = title; this.year = year; this.rating = rating; this.genre = genre; this.emoji = emoji; this.color = color;
        }
    }
}
