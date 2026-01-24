
import React, { useState } from 'react';
import './Onboarding.css';
import { supabase } from '../config/supabase';

import { countryCodes } from '../data/countryCodes';

const BrandOnboarding = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        countryCode: '+91',
        phoneNumber: '',
        companyName: '',
        industry: '',
        aboutCompany: ''
    });

    // Local countryCodes array removed in favor of import

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get current user
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                alert("You must be logged in to complete onboarding.");
                return;
            }

            const fullPhoneNumber = `${formData.countryCode} ${formData.phoneNumber}`;

            const payload = {
                user_id: user.id,
                name: formData.name,
                job_title: formData.jobTitle,
                phone_number: fullPhoneNumber,
                company_name: formData.companyName,
                industry: formData.industry,
                about_company: formData.aboutCompany
            };

            const { data, error } = await supabase
                .from('brands')
                .upsert(payload, { onConflict: 'user_id' });

            if (error) throw error;

            console.log("Brand profile saved:", data);
            alert("Welcome to Collabifyy! Your brand profile is ready.");
            if (onComplete) onComplete();
        } catch (error) {
            console.error("Error saving brand profile:", error);
            alert("Failed to save profile: " + error.message);
        }
    };

    return (
        <div className="onboarding-container brand-theme">
            <div className="onboarding-header">
                <h1 className="onboarding-title">Brand Profile</h1>
                <p className="onboarding-subtitle">Tell us about your company.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Job Title *</label>
                    <input
                        name="jobTitle"
                        className="form-input"
                        placeholder="Marketing Manager"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <div className="phone-input-group">
                        <select
                            name="countryCode"
                            className="form-select country-select"
                            value={formData.countryCode}
                            onChange={handleChange}
                        >
                            {countryCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                    {item.code} ({item.country})
                                </option>
                            ))}
                        </select>
                        <input
                            name="phoneNumber"
                            type="tel"
                            className="form-input"
                            placeholder="9876543210"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input
                        name="companyName"
                        className="form-input"
                        placeholder="Your Company Inc."
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Industry *</label>
                    <select
                        name="industry"
                        className="form-select"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your industry...</option>
                        <option value="fashion">Fashion & Apparel</option>
                        <option value="tech">Technology & Software</option>
                        <option value="food">Food & Beverage</option>
                        <option value="health">Health & Wellness</option>
                        <option value="beauty">Beauty & Cosmetics</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="education">Education & E-Learning</option>
                        <option value="travel">Travel & Hospitality</option>
                        <option value="entertainment">Entertainment & Media</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">About Company</label>
                    <textarea
                        name="aboutCompany"
                        className="form-input"
                        style={{ minHeight: '100px', resize: 'vertical' }}
                        placeholder="Tell us about your company and what you do..."
                        value={formData.aboutCompany}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn brand">
                    Complete Profile
                </button>
            </form>
        </div>
    );
};

export default BrandOnboarding;
