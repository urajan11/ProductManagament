import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import productService from '../service/productService';

const EditProduct = () => {
 
    const [product, setProduct] = useState({
        id:"",
        productName: "",
        description: "",
        price: "",
        status: ""
      });
    
      const {id} = useParams();
      console.log(id);

      const [msg, setMsg] = useState("");
    

      useEffect(() =>{
        productService.getProductById(id)
        .then((res)=>{
            setProduct(res.data);
        })
        .catch((error) =>
        {
            console.log(error);
        })
      },[])
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
        }));
      };
    
      const navigate = useNavigate();
      const ProductUpdate= (e) => {
        e.preventDefault();
        // console.log(product);
    
        productService
        .editProduct(product)
        .then((res) => {
            navigate("/");
        //   console.log("Product Edit Sucessfully");
    
          setMsg("Product Edit Sucessfully");
    
          setProduct({
            productName: "",
            description: "",
            price: "",
            status: ""
          });
          
          

        }).catch((error) => {
          console.log(error);
        });
      
      };
    
      return (
        <>
          <div className='container mt-3'>
            <div className="row">
              <div className='col-md-6 offset-md-3'>
                <div className="card">
                  <div className="card-header fs-3 text-center">
                    Edit Product
                  </div>
    
                  {
                    msg && 
                    <p className='fs-4 text-center text-success'>{msg}</p>
                  }
    
                  <div className="card-body">
                    <form onSubmit={ProductUpdate}>
                      <div className="mb-3">
                        <label className="form-label">Enter Product Name</label>
                        <input
                          type='text'
                          name='productName'
                          className='form-control'
                          value={product.productName}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label className="form-label">Enter Product Description</label>
                        <input
                          type='text'
                          name='description'
                          className='form-control'
                          value={product.description}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label className="form-label">Enter Product Price</label>
                        <input
                          type='text'
                          name='price'
                          className='form-control'
                          value={product.price}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label className="form-label">Enter Product Status</label>
                        <input
                          type='text'
                          name='status'
                          className='form-control'
                          value={product.status}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div>
                        <button className='btn btn-primary col-md-12'>Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default EditProduct