import React from 'react';
import './ContactUs.css';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-div">
      <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="name-main">
          <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="gmail-main">
          <label>G-Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Feedback Input */}
        <div className="feedback-name">
          <label>Feedback : </label>
          <textarea
            className="feedback-input"
            {...register('feedback', {
              required: 'Feedback is required',
              minLength: {
                value: 10,
                message: 'Feedback must be at least 10 characters long',
              },
            })}
          />
          {errors.feedback && (
            <p className="error-message">{errors.feedback.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUs;
