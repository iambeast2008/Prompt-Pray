import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Minus, Plus, Loader2 } from 'lucide-react';
import { getProviderById } from '../data/providers';
import Modal from '../components/Modal';

export default function Booking() {
  const { providerId, serviceId } = useParams();
  const navigate = useNavigate();
  const provider = getProviderById(providerId);

  const [selectedServiceId, setSelectedServiceId] = useState(serviceId || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    quantity: 1,
    address: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (provider && provider.services && !selectedServiceId) {
      if (provider.services.length > 0) {
        setSelectedServiceId(provider.services[0].id);
      }
    }
  }, [provider, selectedServiceId]);

  if (!provider) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] pt-32 px-4 text-center">
        <h1 className="text-2xl font-bold text-[#1B4332] mb-4">Provider not found</h1>
        <Link to="/browse" className="text-[#E8772E] hover:underline">
          Return to browse providers
        </Link>
      </div>
    );
  }

  const selectedService = provider.services?.find(s => s.id === selectedServiceId) || provider.services?.[0];
  const price = selectedService ? selectedService.price : 0;
  const total = price * formData.quantity;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date must be today or in the future';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    if (!formData.address || formData.address.trim().length < 5) {
      newErrors.address = 'Address must be at least 5 characters';
    }
    if (!selectedServiceId) {
      newErrors.service = 'Service is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
      }, 1500);
    } else {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <Link 
            to={`/provider/${providerId}`}
            className="inline-flex items-center text-[#6B7280] hover:text-[#1B4332] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Link>
          <h1 className="text-3xl font-bold text-[#1B4332] mb-4">Request a service</h1>
          
          <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-[#E5E5E5] max-w-xl">
            <img 
              src={provider.image || "https://placehold.co/100x100/1B4332/FFFFFF?text=Avatar"} 
              alt={provider.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-[#2D2D2D]">{provider.name}</h2>
              <p className="text-[#6B7280]">{provider.businessName}</p>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl border border-[#E5E5E5] shadow-sm">
              
              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#2D2D2D] mb-2">Selected Service</label>
                <select 
                  id="service"
                  value={selectedServiceId}
                  onChange={(e) => {
                    setSelectedServiceId(e.target.value);
                    if (errors.service) setErrors(prev => ({...prev, service: null}));
                  }}
                  className={`bg-white border ${errors.service ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                >
                  <option value="" disabled>Select a service</option>
                  {provider.services?.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - ₹{service.price}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="error-message text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    aria-label="Your Name"
                    className={`bg-white border ${errors.name ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                  />
                  {errors.name && <p className="error-message text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    aria-label="Phone Number"
                    className={`bg-white border ${errors.phone ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                  />
                  {errors.phone && <p className="error-message text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  aria-label="Email"
                  className={`bg-white border ${errors.email ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                />
                {errors.email && <p className="error-message text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#2D2D2D] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    aria-label="Preferred Date"
                    className={`bg-white border ${errors.date ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                  />
                  {errors.date && <p className="error-message text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#2D2D2D] mb-2">Preferred Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    aria-label="Preferred Time"
                    className={`bg-white border ${errors.time ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                  />
                  {errors.time && <p className="error-message text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                    className="p-3 rounded-xl border border-[#E5E5E5] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <Minus className="w-5 h-5 text-[#2D2D2D]" />
                  </button>
                  <span className="text-lg font-semibold text-[#2D2D2D] w-8 text-center">{formData.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: Math.min(10, prev.quantity + 1) }))}
                    className="p-3 rounded-xl border border-[#E5E5E5] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <Plus className="w-5 h-5 text-[#2D2D2D]" />
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-[#2D2D2D] mb-2">Neighborhood / Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Your full address or neighborhood"
                  aria-label="Neighborhood / Address"
                  className={`bg-white border ${errors.address ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition`}
                />
                {errors.address && <p className="error-message text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-[#2D2D2D] mb-2">Additional Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell the provider about your requirements, customization, preferred delivery time, etc."
                  aria-label="Additional Requirements"
                  className="bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 w-full focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332]/20 outline-none transition resize-y"
                ></textarea>
              </div>

              {/* Submit Button (Mobile) */}
              <div className="block lg:hidden mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E8772E] hover:bg-[#D4641A] text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center text-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Service Request'
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-96">
            <div className="sticky top-24 bg-white rounded-2xl border border-[#E5E5E5] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Order Summary</h3>
              
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={provider.image || "https://placehold.co/100x100/1B4332/FFFFFF?text=Avatar"} 
                  alt={provider.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-[#2D2D2D]">{provider.name}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[#2D2D2D]">
                  <span>{selectedService ? selectedService.name : 'No service selected'}</span>
                  <span>₹{price}</span>
                </div>
                <div className="flex justify-between text-[#6B7280]">
                  <span>Quantity</span>
                  <span>× {formData.quantity}</span>
                </div>
                <div className="flex justify-between text-[#6B7280]">
                  <span>Service fee</span>
                  <span>₹0 (Free)</span>
                </div>
              </div>

              <hr className="border-[#E5E5E5] mb-6" />

              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-[#2D2D2D]">Estimated Total</span>
                <span className="text-2xl font-bold text-[#1B4332]">₹{total}+</span>
              </div>
              <p className="text-xs text-[#6B7280] mb-6">Final price may vary based on your specific requirements</p>

              {/* Submit Button (Desktop) */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="hidden lg:flex w-full bg-[#E8772E] hover:bg-[#D4641A] text-white py-4 rounded-xl font-bold transition-colors items-center justify-center text-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Service Request'
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={() => {}}>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#D8F3DC] mb-4">
            <CheckCircle className="h-8 w-8 text-[#1B4332]" />
          </div>
          <h3 className="text-2xl font-bold text-[#1B4332] mb-2">Request sent successfully!</h3>
          <p className="text-[#6B7280] mb-8">
            {provider.name} will review your request and contact you shortly.
          </p>
          <div className="space-y-3">
            <Link 
              to="/"
              className="block w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 rounded-xl font-medium transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              to={`/provider/${providerId}`}
              className="block w-full bg-white border border-[#E5E5E5] hover:bg-[#FAF8F5] text-[#2D2D2D] py-3 rounded-xl font-medium transition-colors"
            >
              View Provider Profile
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}
