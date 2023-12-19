package com.ibeta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserWalletRepository extends JpaRepository<UserWallet, Integer> {

    @Query("SELECT u FROM UserWallet u WHERE u.username = :username AND u.password = :password")
    UserWallet findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    @Query("SELECT u FROM UserWallet u WHERE u.username = :username")
    UserWallet findByUsername(@Param("username") String username);
}
