package com.ibeta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT u FROM Post u WHERE u.title = :title")
    List<Post> findByTitle(@Param("title") String title);

    @Query("SELECT u FROM Post u WHERE u.category = :category")
    List<Post> findByCategory(@Param("category") String category);

    @Query("SELECT u FROM Post u WHERE u.owner = :owner")
    List<Post> findByOwner(@Param("owner") String owner);
}
