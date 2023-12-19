package com.ibeta;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Post {
    private String title, category, owner, number, grade;

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Column(length = 1000)
    private String info, image;

    @Id
    @SequenceGenerator(
            name = "post_id_sequence",
            sequenceName = "post_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_id_sequence"
    )
    private Integer id;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id) && Objects.equals(title, post.title) && Objects.equals(info, post.info) && Objects.equals(category, post.category) && Objects.equals(owner, post.owner) && Objects.equals(number, post.number) && Objects.equals(image, post.image) && Objects.equals(grade, post.grade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, info,category, owner, number, image, grade);
    }


    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", info='" + info + '\'' +
                ", category='" + category + '\'' +
                ", owner='" + owner + '\'' +
                ", number='" + number + '\'' +
                ", image='" + image + '\'' +
                ", grade='" + grade + '\'' +
                '}';
    }

    public Post(String title, String info, String category, String owner, String number, Integer id, String image, String grade) {
        this.title = title;
        this.info = info;
        this.category = category;
        this.owner = owner;
        this.number = number;
        this.id = id;
        this.image = image;
        this.grade = grade;
    }

    public  Post() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
