package com.ibeta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@SpringBootApplication
@RestController
@RequestMapping("")
public class Main {

    private final UserWalletRepository userWalletRepository;

    private final PostRepository postRepository;

    public Main(UserWalletRepository customerRepository, PostRepository postRepository) {
        this.userWalletRepository = customerRepository;
        this.postRepository = postRepository;
    }

    public static void main(String[] args)  throws IOException {

        SpringApplication.run(Main.class, args);


    }

    @GetMapping("/user")
    public ResponseEntity<UserWallet> getUserByUsernameAndPassword(
            @RequestParam String username,
            @RequestParam String password) {

        UserWallet user = userWalletRepository.findByUsernameAndPassword(username, password);

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null); // or any appropriate response for not found
        }
    }

    @GetMapping("/check")
    public ResponseEntity<UserWallet> checkUsername(
            @RequestParam String username) {

        UserWallet user = userWalletRepository.findByUsername(username);

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null); // or any appropriate response for not found
        }
    }

    @GetMapping
    public List<UserWallet> getCustomers() {
        return userWalletRepository.findAll();
    }

    @GetMapping("/post")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    record NewUserRequest(
            String username,
            String password
    ) {}

    record NewPostRequest(
            String title,String info,String category,String owner,String number, String image, String grade
    ) {}
    @PostMapping
    public void addCustomer(@RequestBody NewUserRequest request) {
        UserWallet userWallet = new UserWallet();
        userWallet.setUsername(request.username);
        userWallet.setPassword(request.password);
        userWalletRepository.save(userWallet);
    }

    @DeleteMapping("{userID}")
    public void deleteCustomer(@PathVariable("userID") Integer id) {
        userWalletRepository.deleteById(id);
    }

    @PutMapping("{userID}")
    public ResponseEntity<String> updateCustomer(
            @PathVariable("userID") Integer id,
            @RequestBody NewUserRequest updatedCustomer) {

        Optional<UserWallet> optionalCustomer = userWalletRepository.findById(id);

        if (optionalCustomer.isPresent()) {
            UserWallet existingCustomer = optionalCustomer.get();

            existingCustomer.setUsername(updatedCustomer.username);
            existingCustomer.setPassword(updatedCustomer.password);

            userWalletRepository.save(existingCustomer);

            return ResponseEntity.ok("Customer updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Customer not found with ID: " + id);
        }
    }

    @PostMapping("/post")
    public void addPost(@RequestBody NewPostRequest request) {
        Post post = new Post();
        post.setTitle(request.title);
        post.setInfo(request.info);
        post.setCategory(request.category);
        post.setOwner(request.owner);
        post.setNumber(request.number);
        post.setImage(request.image);
        post.setGrade((request.grade    ));
        postRepository.save(post);
    }

    @GetMapping("/post/category")
    public List<Post> findByCategory(
            @RequestParam String category) {

        List<Post> post = postRepository.findByCategory(category);

        if (post != null) {
            return post;
        } else {
            return null;
        }
    }

    @GetMapping("/post/title")
    public List<Post> findByTitle(
            @RequestParam String title) {

        List<Post> post = postRepository.findByTitle(title);

        if (post != null) {
            return post;
        } else {
            return null;
        }
    }

    @GetMapping("/post/owner")
    public List<Post> findByOwner(
            @RequestParam String owner) {

        List<Post> post = postRepository.findByOwner(owner);

        if (post != null) {
            return post;
        } else {
            return null;
        }
    }

    @DeleteMapping("/post/{ID}")
    public void deletePost(@PathVariable("ID") Integer id) {
        postRepository.deleteById(id);
    }




}
