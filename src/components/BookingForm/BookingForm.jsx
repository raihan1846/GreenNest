import React from 'react';

const BookingForm = () => {
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Consultation Type</span>
                </label>
                <div className="flex flex-wrap gap-3">
                    <div className="form-control">
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="consultation-type" className="radio checked:bg-indigo-500" defaultChecked />
                            <span className="label-text">Business Strategy</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="consultation-type" className="radio checked:bg-indigo-500" />
                            <span className="label-text">Marketing</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="consultation-type" className="radio checked:bg-indigo-500" />
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
    );
};

export default BookingForm;
