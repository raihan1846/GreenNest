import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const BookingForm = () => {
    const [submitForm, setSubmitForm] = useState(false);
    const handleBookingForm = (e)=>{
      e.preventDefault();
      setSubmitForm(true);
      toast.success("SuccessFully Submitted");
      e.target.reset();
      

    }
    return (
        <div className="">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Consultation</h2>
                <ToastContainer></ToastContainer>
                <form onSubmit={handleBookingForm} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Full Name</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter your full name" 
                            className="input input-bordered w-full focus:input-primary"
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="input input-bordered w-full focus:input-primary"
                            required
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Preferred Date</span>
                            </label>
                            <input 
                                type="date" 
                                className="input input-bordered w-full focus:input-primary"
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Preferred Time</span>
                            </label>
                            <select className="select select-bordered w-full focus:select-primary" defaultValue="">
                                <option value="" disabled>Select a time</option>
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:00 PM</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Consultation Type</span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input
                                        type="radio"
                                        name="consultation-type"
                                        className="radio checked:bg-indigo-500"
                                        defaultChecked
                                    />
                                    <span className="label-text">Business Strategy</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input
                                        type="radio"
                                        name="consultation-type"
                                        className="radio checked:bg-indigo-500"
                                    />
                                    <span className="label-text">Marketing</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2">
                                    <input
                                        type="radio"
                                        name="consultation-type"
                                        className="radio checked:bg-indigo-500"
                                    />
                                    <span className="label-text">Financial Planning</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Additional Notes (Optional)</span>
                        </label>
                        <textarea 
                            className="textarea textarea-bordered h-24 focus:textarea-primary" 
                            placeholder="Any specific topics or questions you'd like to discuss?"
                        ></textarea>
                    </div>
                    
                    <div className="form-control mt-8">
                        <button type="submit" className="btn btn-primary btn-lg w-full">
                            <i className="fas fa-calendar-check mr-2"></i>
                            Book Now
                        </button>
                    </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-start space-x-3">
                        <div className="text-indigo-500 mt-1">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Secure Booking</h4>
                            <p className="text-sm text-gray-600">
                                Your information is protected and secure. We respect your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
