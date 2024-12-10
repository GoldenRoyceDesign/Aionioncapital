import React, { useState } from "react";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        primaryLocation: "",
        secondaryLocation: "",
        whatsappNumber: "",
        profession: "",
        lifeInsurance: false,
        lifeInsuranceVehicle: false,
        teamInsurance: false,
        teamInsuranceVehicle: false,
        renewalDateLifeInsurance: "",
        renewalDateTeamInsurance: "",
        renewalDateLifeInsuranceVehicle: "", // New key
        renewalDateTeamInsuranceVehicle: "", // New key
        lifeInsuranceVehicleNumber: "",
        teamInsuranceVehicleNumber: "",
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle checkbox state change
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            // Handle regular input changes
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            (formData.lifeInsurance && !formData.renewalDateLifeInsurance) ||
            (formData.lifeInsuranceVehicle && !formData.renewalDateLifeInsuranceVehicle) ||
            (formData.teamInsurance && !formData.renewalDateTeamInsurance) ||
            (formData.teamInsuranceVehicle && !formData.renewalDateTeamInsuranceVehicle)
        ) {
            alert("Please fill in all required fields.");
        }
        else {
            try {
                const response = await fetch("http://localhost:5000/submit-profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Profile saved successfully!");
                    setFormData({
                        name: "",
                        primaryLocation: "",
                        secondaryLocation: "",
                        whatsappNumber: "",
                        profession: "",
                        lifeInsurance: false,
                        lifeInsuranceVehicle: false,
                        teamInsurance: false,
                        teamInsuranceVehicle: false,
                        renewalDateLifeInsurance: "",
                        renewalDateTeamInsurance: "",
                        renewalDateLifeInsuranceVehicle: "",
                        renewalDateTeamInsuranceVehicle: "",
                        lifeInsuranceVehicleNumber: "",
                        teamInsuranceVehicleNumber: "",
                    });
                } else {
                    alert("Failed to save profile. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again.");
            }
        }
    };


    return (
        <div className="container mt-5 profile">
            <h3 className="text-center">Upload fields to unlock products:</h3>
            <p className="text-center mt-4 mb-4">Profile: Self</p>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">Name *</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Primary Location */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">Primary Location *</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            name="primaryLocation"
                            value={formData.primaryLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Secondary Location */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">Secondary Location *</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            name="secondaryLocation"
                            value={formData.secondaryLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* WhatsApp Number */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">
                        WhatsApp Number with country code *
                    </label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Profession */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">Profession *</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Insurances */}
                <div className="form-group row">
                    <label className="col-md-4 col-form-label">Insurances *</label>
                    <div className="col-md-8 d-flex justify-content-end">
                        <h6>If Yes, Enter Renewal Date</h6>
                    </div>
                </div>

                {/* Life Insurance (Yes/No) and Date */}
                <div className="form-group row form-head">
                    <label className="col-md-4 col-form-label">Life Insurances *</label>
                    <div className="col-md-8 d-flex justify-content-between profile-rows">
                        {/* Column 1: Yes/No Switch */}
                        <div className="d-flex align-items-center gap-3 col-md-2">
                            <span className="yesno">Y</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="lifeInsurance"
                                    checked={formData.lifeInsurance}
                                    onChange={handleChange}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span className="yesno">N</span>
                        </div>



                        {/* Column 3: Date */}
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="renewalDateLifeInsurance"
                                value={formData.renewalDateLifeInsurance}
                                onChange={handleChange}
                                disabled={!formData.lifeInsurance} // Disabled when "No"
                            />
                        </div>
                    </div>
                </div>



                {/* Team Insurance (Yes/No) and Date */}
                <div className="form-group row form-head">
                    <label className="col-md-4 col-form-label">Team Insurances *</label>
                    <div className="col-md-8 d-flex justify-content-between profile-rows">
                        {/* Column 1: Yes/No Switch */}
                        <div className="d-flex align-items-center gap-3 col-md-2">
                            <span className="yesno">Y</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="teamInsurance"
                                    checked={formData.teamInsurance}
                                    onChange={handleChange}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span className="yesno">N</span>
                        </div>



                        {/* Column 3: Date */}
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="renewalDateTeamInsurance"
                                value={formData.renewalDateTeamInsurance}
                                onChange={handleChange}
                                disabled={!formData.teamInsurance} // Disabled when "No"
                            />
                        </div>
                    </div>
                </div>


                {/* Life Insurance Vehicle Number and Date */}
                <div className="form-group row form-head">
                    <label className="col-md-4 col-form-label">Life Insurances *</label>
                    <div className="col-md-8 d-flex justify-content-between profile-rows">
                        {/* Column 1: Yes/No Switch */}
                        <div className="d-flex align-items-center gap-3 col-md-2">
                            <span className="yesno">Y</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="lifeInsuranceVehicle"
                                    checked={formData.lifeInsuranceVehicle}
                                    onChange={handleChange}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span className="yesno">N</span>
                        </div>

                        {/* Column 2: Vehicle Number */}
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="Vehicle Number"
                                name="lifeInsuranceVehicleNumber"
                                value={formData.lifeInsuranceVehicleNumber}
                                onChange={handleChange}
                                disabled={!formData.lifeInsuranceVehicle} // Disabled when "No"
                            />
                        </div>

                        {/* Column 3: Date */}
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="renewalDateLifeInsuranceVehicle"
                                value={formData.renewalDateLifeInsuranceVehicle}
                                onChange={handleChange}
                                disabled={!formData.lifeInsuranceVehicle} // Disabled when "No"
                            />

                        </div>
                    </div>
                </div>


                {/* Team Insurance Vehicle Number and Date */}
                <div className="form-group row form-head">
                    <label className="col-md-4 col-form-label">Team Insurances *</label>
                    <div className="col-md-8 d-flex justify-content-between profile-rows">
                        {/* Column 1: Yes/No Switch */}
                        <div className="d-flex align-items-center gap-3 col-md-2">
                            <span className="yesno">Y</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="teamInsuranceVehicle"
                                    checked={formData.teamInsuranceVehicle}
                                    onChange={handleChange}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span className="yesno">N</span>
                        </div>

                        {/* Column 2: Vehicle Number */}
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control text-center"
                                placeholder="Vehicle Number"
                                name="teamInsuranceVehicleNumber"
                                value={formData.teamInsuranceVehicleNumber}
                                onChange={handleChange}
                                disabled={!formData.teamInsuranceVehicle} // Disabled when "No"
                            />
                        </div>

                        {/* Column 3: Date */}
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="renewalDateTeamInsuranceVehicle"
                                value={formData.renewalDateTeamInsuranceVehicle}
                                onChange={handleChange}
                                disabled={!formData.teamInsuranceVehicle} // Disabled when "No"
                            />

                        </div>
                    </div>
                </div>


                {/* Submit Button */}
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        SUMBIT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
