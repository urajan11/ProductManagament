package com.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.model.Product;
import com.product.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepo;

	@Override
	public Product saveProduct(Product product) {

		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {

		return productRepo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {

		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Product product = productRepo.findById(id).get();
		if (product != null) {
			productRepo.delete(product);
			return "Product delete Sucessfully";
		}
		return "Not deleted";
	}

	@Override
	public Product ediProduct(Product product, Integer id) {
		Product oldProduct = productRepo.findById(id).get();
		oldProduct.setProductName(product.getProductName());
		oldProduct.setdescription(product.getdescription());
		oldProduct.setStatus(product.getStatus());
		oldProduct.setPrice(product.getPrice());

		return productRepo.save(oldProduct);
	}

}
