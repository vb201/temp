import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';
import ButtonComponent from '../../components/Button';
import { InventoryContext } from '../../context/InventoryContext';

const Product = () => {
  const { setProducts } = useContext(InventoryContext);

  const [formValues, setFormValues] = useState({
    title: '',
    rating: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    rating: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((err) => !!err)) {
      console.log({ errors });
      alert('Please fix the errors');
      return;
    }

    const newProduct = {
      ...formValues,
      id: Math.floor(Math.random() * 100000),
    };

    setProducts((prev) => [...prev, newProduct]);
    alert('Product added successfully');
  };

  const validate = (name, value) => {
    switch (name) {
      case 'title':
        if (value.length < 5) {
          return 'Title must be at least 5 characters long';
        }
        break;
      case 'rating':
        if (value < 0 || value > 5 || isNaN(value)) {
          return 'Rating must be between 0 and 5';
        }
        break;
      case 'price':
        if (value < 0 || isNaN(value)) {
          return 'Price must be a positive number';
        }
        break;
      case 'description':
        if (value.length < 20) {
          return 'Description must be at least 20 characters long';
        }
        break;
      case 'category':
        if (value.length < 5) {
          return 'Category must be at least 5 characters long';
        }
        break;
      case 'image':
        if (!value.startsWith('http')) {
          return 'Image must be a valid url';
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = validate(name, value);
    console.log({ returnedError: error, name, value });
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />

      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%',
          }}
        >
          <h1>Add a new Product</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                width: '100%',
              }}
            >
              <label>Title</label>
              <Input
                name="title"
                placeholder="Title"
                value={formValues.title}
                callBack={(e) => handleChange(e)}
                errors={errors.title}
              />
            </div>

            {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '1rem',
                alignItems: 'center',
              }}
            >
              <label>Rating</label>
              <Input
                name="rating"
                placeholder="Rating"
                value={formValues.rating}
                callBack={(e) => handleChange(e)}
                errors={errors.rating}
              />
            </div>

            {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label>category</label>
              <Input
                name="category"
                placeholder="Category"
                value={formValues.category}
                callBack={(e) => handleChange(e)}
                errors={errors.category}
              />
            </div>

            {errors.category && (
              <p style={{ color: 'red' }}>{errors.category}</p>
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label>Price</label>
              <Input
                name="price"
                placeholder="Price"
                value={formValues.price}
                callBack={(e) => handleChange(e)}
                errors={errors.price}
              />
            </div>

            {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label>Description</label>
              <Input
                name="description"
                placeholder="Description"
                value={formValues.description}
                callBack={(e) => handleChange(e)}
                errors={errors.description}
              />
            </div>

            {errors.description && (
              <p style={{ color: 'red' }}>{errors.description}</p>
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label>Image</label>
              <Input
                name="image"
                placeholder="Image"
                value={formValues.image}
                callBack={(e) => handleChange(e)}
                errors={errors.image}
              />
            </div>

            {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
            <ButtonComponent label="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Product;
