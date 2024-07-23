package com.product.services;

import java.util.List;

import com.product.model.Product;

public interface ProductService {

	
	public Product saveProduct(Product product);
	
	public List<Product> getAllProduct();

    public Product getProductById(Integer id);

    public String deleteProduct(Integer id);

    public Product ediProduct(Product product, Integer id);
}
