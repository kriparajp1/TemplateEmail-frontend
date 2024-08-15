import React from 'react';
import './EmailForm.css';

function EmailForm() {
  return (
    <div className="bodyMail">
      <h1>
          TEMPLATE<span className="highlight">EMAIL</span>
        </h1>
    <div className="orderMail-form-container">
      <form className="orderMail-form">
        <div className="orderMail-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="orderMail-form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="orderMail-form-group">
          <label htmlFor="heading">Heading</label>
          <input type="text" id="heading" name="heading" required />
        </div>
        <div className="orderMail-form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" required></textarea>
        </div>
        <button type="submit" className="orderMail-submit-button">Submit</button>
      </form>
    </div>
    </div>

  );
}

export default EmailForm;
