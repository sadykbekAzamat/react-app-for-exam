package com.ibeta;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class UserWallet {

    @Id
    @SequenceGenerator(
            name = "user_id_sequence",
            sequenceName = "user_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_id_sequence"
    )
    private  Integer id;
    private  String username;
    private  String password;

    public UserWallet(Integer id,
                      String username,
                      String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public UserWallet() {


    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserWallet userWallet = (UserWallet) o;
        return Objects.equals(id, userWallet.id) && Objects.equals(username, userWallet.username) && Objects.equals(password, userWallet.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
