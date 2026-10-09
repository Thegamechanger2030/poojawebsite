import React, { useState } from 'react';
import { X, UserCheck, ShieldCheck, Phone, MapPin, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PartnerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [role, setRole] = useState('pandit'); // 'pandit' | 'astrologer' | 'supplier'
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: 'Bareilly',
    experience: '5+ Years',
    specialization: 'Ved/Vastu'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-amber-50 text-stone-900 border-2 border-amber-400 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-in">
        
        {/* Header */}
        <div className="bg-rose-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold font-serif text-amber-300">Partner With Us</h3>
          </div>
          <button onClick={onClose} className="text-amber-200 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h4 className="text-xl font-bold font-serif text-stone-900">पंजीकरण आवेदन प्राप्त हुआ!</h4>
            <p className="text-xs text-stone-600">
              Acharya Ankit Mishra team will verify your credentials and contact you on <strong>{form.phone}</strong> within 24 working hours.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-primary w-full justify-center py-2.5 text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            
            {/* Role selector tabs */}
            <div>
              <label className="block font-semibold text-stone-800 mb-1.5">Select Role (आप क्या हैं?):</label>
              <div className="grid grid-cols-3 gap-2 text-center font-medium">
                <button
                  type="button"
                  onClick={() => setRole('pandit')}
                  className={`p-2 rounded-xl border text-[11px] transition ${
                    role === 'pandit' ? 'bg-rose-950 text-amber-300 border-rose-900 font-bold' : 'bg-white text-stone-700 border-amber-300'
                  }`}
                >
                  Pandit (कर्मकांडी)
                </button>
                <button
                  type="button"
                  onClick={() => setRole('astrologer')}
                  className={`p-2 rounded-xl border text-[11px] transition ${
                    role === 'astrologer' ? 'bg-rose-950 text-amber-300 border-rose-900 font-bold' : 'bg-white text-stone-700 border-amber-300'
                  }`}
                >
                  Astrologer (ज्योतिषी)
                </button>
                <button
                  type="button"
                  onClick={() => setRole('supplier')}
                  className={`p-2 rounded-xl border text-[11px] transition ${
                    role === 'supplier' ? 'bg-rose-950 text-amber-300 border-rose-900 font-bold' : 'bg-white text-stone-700 border-amber-300'
                  }`}
                >
                  Vendor / Supplier
                </button>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">Full Name (पूरा नाम)</label>
              <input 
                type="text"
                required
                placeholder="Enter your name"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-800 mb-1">Mobile / WhatsApp Number</label>
              <input 
                type="tel"
                required
                placeholder="10-digit number"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
                className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">City (शहर)</label>
                <input 
                  type="text"
                  required
                  placeholder="Bareilly, NCR, etc."
                  value={form.city}
                  onChange={e => setForm({...form, city: e.target.value})}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">Experience (अनुभव)</label>
                <select 
                  value={form.experience}
                  onChange={e => setForm({...form, experience: e.target.value})}
                  className="w-full bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs text-stone-900"
                >
                  <option>1 - 3 Years</option>
                  <option>3 - 5 Years</option>
                  <option>5 - 10 Years</option>
                  <option>10+ Years (Experienced)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full btn-gold justify-center py-3 text-xs mt-2 shadow-lg">
              Submit Partner Registration
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
