package com.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProductManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductManagementBackendApplication.class, args);
		System.out.println("Product Managament");
	}

}
