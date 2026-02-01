
import React, { useState } from 'react';
import './Onboarding.css';
const CreatorOnboarding = ({ onComplete }) => {
    const [step, setStep] = useState(1);

    // Form State
    const [niches, setNiches] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [platformHandles, setPlatformHandles] = useState({});
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        dob: '',
        gender: ''
    });

    // Content Lists
    const AVAILABLE_NICHES = [
        "Tech & Gadgets", "Fashion", "Beauty", "Gaming", "Fitness",
        "Food", "Travel", "Education", "Lifestyle", "Comedy",
        "Music", "Art & Design", "Business", "Parenting", "Health"
    ];

    const AVAILABLE_PLATFORMS = [
        "Instagram", "YouTube", "TikTok", "Twitch", "Twitter/X", "LinkedIn"
    ];

    // Handlers
    const toggleNiche = (niche) => {
        if (niches.includes(niche)) {
            setNiches(niches.filter(n => n !== niche));
        } else {
            setNiches([...niches, niche]);
        }
    };

    const togglePlatform = (platform) => {
        if (platforms.includes(platform)) {
            setPlatforms(platforms.filter(p => p !== platform));
            // Cleanup handles if removed
            const newHandles = { ...platformHandles };
            delete newHandles[platform];
            setPlatformHandles(newHandles);
        } else {
            setPlatforms([...platforms, platform]);
        }
    };

    const handleHandleChange = (platform, value) => {
        setPlatformHandles({ ...platformHandles, [platform]: value });
    };

    const handlePersonalChange = (e) => {
        setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step === 1 && niches.length === 0) return alert("Please select at least one niche.");
        if (step === 2 && platforms.length === 0) return alert("Please select at least one platform.");
        if (step === 3) {
            const missing = platforms.some(p => !platformHandles[p]);
            if (missing) return alert("Please enter URLs for all selected platforms.");
        }

        if (step < 4) setStep(step + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        try {
            // Mock submission
            console.log("Mocking Creator Profile Submission");

            const payload = {
                // user_id: user.id, // User not available without backend
                niches,
                platforms,
                platform_handles: platformHandles,
                name: personalDetails.name,
                dob: personalDetails.dob,
                gender: personalDetails.gender
            };

            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Creator profile saved (simulated):", payload);

            // Trigger dashboard reload
            if (onComplete) {
                onComplete();
            }
        } catch (error) {
            console.error("Error saving creator profile:", error);
            alert("Failed to save profile: " + error.message);
        }
    };

    // Render Steps
    const renderProgressBar = () => (
        <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
    );

    return (
        <div className="onboarding-container">
            {renderProgressBar()}

            {/* STEP 1: NICHES */}
            {step === 1 && (
                <div className="step-content">
                    <div className="onboarding-header">
                        <h1 className="onboarding-title">Choose Your Niche</h1>
                        <p className="onboarding-subtitle">Select the categories that best describe your content.</p>
                    </div>

                    <div className="selection-grid">
                        {AVAILABLE_NICHES.map(niche => (
                            <div
                                key={niche}
                                className={`selection-card ${niches.includes(niche) ? 'selected' : ''}`}
                                onClick={() => toggleNiche(niche)}
                            >
                                <span className="card-label">{niche}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 2: PLATFORMS */}
            {step === 2 && (
                <div className="step-content">
                    <div className="onboarding-header">
                        <h1 className="onboarding-title">Your Platforms</h1>
                        <p className="onboarding-subtitle">Where do you create content?</p>
                    </div>

                    <div className="selection-grid">
                        {AVAILABLE_PLATFORMS.map(platform => (
                            <div
                                key={platform}
                                className={`selection-card ${platforms.includes(platform) ? 'selected' : ''}`}
                                onClick={() => togglePlatform(platform)}
                            >
                                <span className="card-label">{platform}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 3: URLS (UPDATED) */}
            {step === 3 && (
                <div className="step-content">
                    <div className="onboarding-header">
                        <h1 className="onboarding-title">Profile URLs</h1>
                        <p className="onboarding-subtitle">How can we find you?</p>
                    </div>

                    <div className="stats-form">
                        {platforms.map(platform => (
                            <div key={platform} className="form-group">
                                <label className="form-label">{platform} URL</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder={platform === "YouTube" ? "https://youtube.com/@channel" : `https://${platform.toLowerCase()}.com/username`}
                                    value={platformHandles[platform] || ''}
                                    onChange={(e) => handleHandleChange(platform, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 4: PERSONAL */}
            {step === 4 && (
                <div className="step-content">
                    <div className="onboarding-header">
                        <h1 className="onboarding-title">Final Details</h1>
                        <p className="onboarding-subtitle">Tell us who you are.</p>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            name="name"
                            className="form-input"
                            placeholder="Your Name"
                            value={personalDetails.name}
                            onChange={handlePersonalChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Date of Birth</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>📅</span>
                            <input
                                name="dob"
                                type="date"
                                className="form-input"
                                style={{ paddingLeft: '48px' }}
                                value={personalDetails.dob}
                                onChange={handlePersonalChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Gender</label>
                        <div className="gender-grid">
                            {['Male', 'Female', 'Other', 'Prefer not to say'].map(option => (
                                <button
                                    key={option}
                                    type="button"
                                    className={`gender-card ${personalDetails.gender === option ? 'selected' : ''}`}
                                    onClick={() => setPersonalDetails({ ...personalDetails, gender: option })}
                                >
                                    <span className="gender-label">{option}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="nav-buttons">
                <button
                    className="btn-back"
                    onClick={handleBack}
                    style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                >
                    Back
                </button>
                <button className="btn-next" onClick={handleNext}>
                    {step === 5 ? 'Complete Profile' : 'Next Step'}
                </button>
            </div>
        </div>
    );
};

export default CreatorOnboarding;
