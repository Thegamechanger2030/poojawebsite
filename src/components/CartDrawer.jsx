import React, { useState } from 'react';
import { X, Trash2, Calendar, Clock, MapPin, CreditCard, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'details' | 'success'

  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    date: '2026-10-05',
    timeSlot: '08:00 AM - 10:30 AM',
    city: '',
    address: '',
    pujaMode: 'in-person',
    language: 'Hindi (हिंदी)',
    paymentMode: 'upi'
  });

  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const hasPujaBooking = cartItems.some(item => item.type === 'puja');

  const updatePujaMode = (pujaMode) => {
    setBookingDetails({
      ...bookingDetails,
      pujaMode,
      paymentMode: pujaMode === 'online' ? 'upi' : bookingDetails.paymentMode
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderData = {
      orderId: 'MRP-' + Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      total: totalPrice,
      customer: bookingDetails,
      date: new Date().toLocaleDateString()
    };
    setConfirmedOrder(orderData);
    setCheckoutStep('success');
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="bg-amber-50 w-full max-w-lg h-full shadow-2xl flex flex-col justify-between border-l-2 border-amber-400 animate-fade-in text-stone-900">
        
        {/* Drawer Header */}
        <div className="bg-rose-950 text-white p-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xl">🪷</span>
            <h3 className="text-lg font-bold font-serif text-amber-300">
              {checkoutStep === 'cart' && 'Your Shopping & Booking Cart'}
              {checkoutStep === 'details' && 'Slot & Address Checkout'}
              {checkoutStep === 'success' && 'Booking Confirmation'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-amber-200 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* STEP 1: CART LIST */}
        {checkoutStep === 'cart' && (
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-stone-500">
                <span className="text-4xl">🛒</span>
                <p className="font-semibold text-sm">Your cart is currently empty</p>
                <p className="text-xs max-w-xs">Add a Vedic Puja booking or Samagri kit from the store to proceed.</p>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <span className="w-14 h-14 shrink-0 rounded-xl border border-amber-200 bg-orange-50 text-[#A83200] flex items-center justify-center font-serif font-bold" aria-hidden="true">श्री</span>
                    )}
                    <div>
                      <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        {item.type === 'puja' ? 'Vedic Puja Booking' : 'Store Product'}
                      </span>
                      <h4 className="font-bold text-xs text-stone-900 mt-1">{item.name}</h4>
                      {item.packageName && (
                        <p className="text-[10px] text-rose-900 font-medium">Package: {item.packageName}</p>
                      )}
                      <p className="text-sm font-bold text-rose-950 font-serif mt-0.5">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="p-2 text-rose-800 hover:bg-rose-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {/* STEP 2: CHECKOUT DETAILS */}
        {checkoutStep === 'details' && (
          <form onSubmit={handlePlaceOrder} className="p-5 flex-1 overflow-y-auto space-y-4 text-xs">
            <div className="bg-amber-100/70 p-3 rounded-xl border border-amber-300 font-medium">
              <span className="text-stone-600 block">Total Order Value:</span>
              <span className="text-xl font-bold font-serif text-rose-950">₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="space-y-3">
              {hasPujaBooking && (
                <fieldset className="space-y-2">
                  <legend className="font-semibold text-stone-800">Pooja Mode / पूजा का तरीका</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <label className={`flex cursor-pointer items-start gap-2 rounded-xl border p-3 ${bookingDetails.pujaMode === 'in-person' ? 'border-amber-600 bg-amber-100/70' : 'border-amber-300 bg-white'}`}>
                      <input
                        type="radio"
                        name="pujaMode"
                        checked={bookingDetails.pujaMode === 'in-person'}
                        onChange={() => updatePujaMode('in-person')}
                      />
                      <span>
                        <span className="block font-bold">At your location</span>
                        <span className="mt-0.5 block text-[10px] text-stone-600">Pandit ji performs the puja in person</span>
                      </span>
                    </label>
                    <label className={`flex cursor-pointer items-start gap-2 rounded-xl border p-3 ${bookingDetails.pujaMode === 'online' ? 'border-amber-600 bg-amber-100/70' : 'border-amber-300 bg-white'}`}>
                      <input
                        type="radio"
                        name="pujaMode"
                        checked={bookingDetails.pujaMode === 'online'}
                        onChange={() => updatePujaMode('online')}
                      />
                      <span>
                        <span className="block font-bold">E-Pooja (Online)</span>
                        <span className="mt-0.5 block text-[10px] text-stone-600">Join online from anywhere</span>
                      </span>
                    </label>
                  </div>
                  {bookingDetails.pujaMode === 'online' && (
                    <p className="rounded-lg bg-emerald-50 px-3 py-2 text-[10px] leading-relaxed text-emerald-900">
                      E-Pooja ke liye aapko apne ghar par pandit bulane ki zaroorat nahi. Booking confirm hone ke baad team aapke WhatsApp par online join karne ki details share karegi.
                    </p>
                  )}
                </fieldset>
              )}

              <div>
                <label className="block font-semibold text-stone-800 mb-1">Your Full Name (नाम)</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  value={bookingDetails.name}
                  onChange={e => setBookingDetails({...bookingDetails, name: e.target.value})}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">WhatsApp Mobile Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="10-digit mobile number"
                  value={bookingDetails.phone}
                  onChange={e => setBookingDetails({...bookingDetails, phone: e.target.value})}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Puja/Delivery Date</label>
                  <input 
                    type="date" 
                    required
                    value={bookingDetails.date}
                    onChange={e => setBookingDetails({...bookingDetails, date: e.target.value})}
                    className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Time Slot</label>
                  <select 
                    value={bookingDetails.timeSlot}
                    onChange={e => setBookingDetails({...bookingDetails, timeSlot: e.target.value})}
                    className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                  >
                    <option>07:00 AM - 09:30 AM</option>
                    <option>09:30 AM - 12:00 PM</option>
                    <option>02:00 PM - 04:30 PM</option>
                    <option>05:00 PM - 07:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">Pandit Language Preference</label>
                <select 
                  value={bookingDetails.language}
                  onChange={e => setBookingDetails({...bookingDetails, language: e.target.value})}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                >
                  <option>Hindi (हिंदी)</option>
                  <option>Sanskrit (संस्कृत)</option>
                  <option>Bhojpuri (भोजपुरी)</option>
                  <option>Punjabi (पंजाबी)</option>
                </select>
              </div>

              {bookingDetails.pujaMode === 'online' ? (
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Your City / Country (for local time)</label>
                  <input
                    type="text"
                    required
                    placeholder="City, Country (e.g., Dubai, UAE)"
                    value={bookingDetails.city}
                    onChange={e => setBookingDetails({ ...bookingDetails, city: e.target.value })}
                    className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                  />
                </div>
              ) : (
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Complete Address / City</label>
                  <textarea
                    required
                    rows="2"
                    placeholder="House No, Colony, City (Bareilly/NCR/Lucknow...)"
                    value={bookingDetails.address}
                    onChange={e => setBookingDetails({ ...bookingDetails, address: e.target.value })}
                    className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                  />
                </div>
              )}

              <div>
                <label className="block font-semibold text-stone-800 mb-1">Payment Method</label>
                <div className={`grid gap-2 font-medium ${bookingDetails.pujaMode === 'online' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-amber-300 cursor-pointer">
                    <input type="radio" name="pay" checked={bookingDetails.paymentMode === 'upi'} onChange={() => setBookingDetails({...bookingDetails, paymentMode: 'upi'})} />
                    <span>UPI / QR Scan</span>
                  </label>

                  {bookingDetails.pujaMode !== 'online' && (
                    <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-amber-300 cursor-pointer">
                      <input type="radio" name="pay" checked={bookingDetails.paymentMode === 'cash'} onChange={() => setBookingDetails({...bookingDetails, paymentMode: 'cash'})} />
                      <span>Cash after Puja</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}

        {/* STEP 3: SUCCESS & WHATSAPP PREVIEW */}
        {checkoutStep === 'success' && confirmedOrder && (
          <div className="p-5 flex-1 overflow-y-auto space-y-5 text-xs">
            <div className="bg-emerald-100 border border-emerald-300 text-emerald-950 p-4 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold font-serif">Booking Request Received!</h4>
              <p className="text-xs">Order ID: <strong className="font-mono">{confirmedOrder.orderId}</strong></p>
            </div>

            {/* WhatsApp notification */}
            <div className="bg-emerald-900 text-emerald-100 p-4 rounded-2xl border border-emerald-400 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold border-b border-emerald-700 pb-2 text-amber-300">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  WhatsApp Booking Follow-up
                </span>
                <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded">Acharya Ankit Mishra</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                "Pranam <strong>{confirmedOrder.customer.name}</strong> ji, your {confirmedOrder.customer.pujaMode === 'online' ? 'E-Pooja online booking request' : 'puja booking request'} for <strong>{confirmedOrder.customer.date}</strong> at <strong>{confirmedOrder.customer.timeSlot}</strong> has been received. Our team will contact you at <strong>{confirmedOrder.customer.phone}</strong>{confirmedOrder.customer.pujaMode === 'online' ? ' with online joining details after confirming the booking.' : ' to confirm the booking details.'}"
              </p>
              <div className="text-[10px] text-emerald-300 font-semibold">
                Emergency Helpline: 9410202087 / 9997586355
              </div>
            </div>

            {/* Order Items Summary */}
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-2">
              <span className="font-bold text-stone-800 text-xs block">Order Summary:</span>
              {confirmedOrder.items.map((it, i) => (
                <div key={i} className="flex justify-between text-xs text-stone-700">
                  <span>{it.name}</span>
                  <span className="font-bold font-serif">₹{it.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-stone-200 pt-2 flex justify-between font-bold text-rose-950 text-sm">
                <span>Total Amount</span>
                <span>₹{confirmedOrder.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Drawer Footer Actions */}
        <div className="p-4 bg-white border-t border-amber-200 flex items-center justify-between gap-3">
          {checkoutStep === 'cart' && (
            <>
              <div>
                <span className="text-[10px] text-stone-500 uppercase block font-semibold">Subtotal</span>
                <span className="text-xl font-bold font-serif text-rose-950">₹{totalPrice.toLocaleString()}</span>
              </div>

              <button 
                disabled={cartItems.length === 0}
                onClick={() => setCheckoutStep('details')}
                className="btn-primary text-xs py-3 px-6 shadow-lg disabled:opacity-50"
              >
                <span>Proceed to Checkout</span>
              </button>
            </>
          )}

          {checkoutStep === 'details' && (
            <>
              <button 
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Back to Cart
              </button>

              <button 
                onClick={handlePlaceOrder}
                className="btn-gold text-xs py-3 px-6 shadow-lg"
              >
                <span>Confirm & Place Order</span>
              </button>
            </>
          )}

          {checkoutStep === 'success' && (
            <button 
              onClick={() => {
                onClearCart();
                setCheckoutStep('cart');
                onClose();
              }}
              className="w-full btn-primary justify-center py-3 text-xs"
            >
              <span>Done (Back to Store)</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
