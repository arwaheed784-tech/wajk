import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Calendar, Clock, Users } from 'lucide-react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop")' }}>
      <div className="absolute inset-0 bg-earth-900/60 dark:bg-black/70 backdrop-blur-[2px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-earth-50 dark:bg-earth-900 border-4 border-double border-earth-200 dark:border-earth-700 p-8 md:p-12 shadow-2xl rounded-sm transition-colors duration-300">
          <SectionTitle subtitle="Reserve Your Spot" title="Join Our Table" />

          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-italian-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-italian-green text-4xl">✓</span>
              </div>
              <h3 className="text-3xl font-serif text-earth-900 dark:text-earth-100 mb-4">Benvenuto!</h3>
              <p className="text-earth-600 dark:text-earth-300">Grazie, {formData.name}. Your table is confirmed for {formData.date} at {formData.time}.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-italian-red hover:text-italian-wood font-bold underline">Book another table</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group">
                    <label className="block text-earth-500 dark:text-earth-400 text-xs font-bold uppercase tracking-wider mb-2">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-italian-red" size={18} />
                        <input 
                            type="date" 
                            name="date"
                            required
                            className="w-full bg-white dark:bg-earth-800 border border-earth-300 dark:border-earth-700 text-earth-800 dark:text-earth-100 py-3 pl-10 pr-4 focus:outline-none focus:border-italian-green focus:ring-1 focus:ring-italian-green transition-colors rounded-sm"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="relative group">
                    <label className="block text-earth-500 dark:text-earth-400 text-xs font-bold uppercase tracking-wider mb-2">Time</label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-italian-red" size={18} />
                        <select 
                            name="time"
                            required
                            className="w-full bg-white dark:bg-earth-800 border border-earth-300 dark:border-earth-700 text-earth-800 dark:text-earth-100 py-3 pl-10 pr-4 focus:outline-none focus:border-italian-green focus:ring-1 focus:ring-italian-green transition-colors appearance-none rounded-sm"
                            onChange={handleChange}
                        >
                            <option value="">Select Time</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                    </div>
                </div>
                <div className="relative group">
                    <label className="block text-earth-500 dark:text-earth-400 text-xs font-bold uppercase tracking-wider mb-2">Guests</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-italian-red" size={18} />
                        <select 
                            name="guests"
                            className="w-full bg-white dark:bg-earth-800 border border-earth-300 dark:border-earth-700 text-earth-800 dark:text-earth-100 py-3 pl-10 pr-4 focus:outline-none focus:border-italian-green focus:ring-1 focus:ring-italian-green transition-colors appearance-none rounded-sm"
                            onChange={handleChange}
                            value={formData.guests}
                        >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5+ People</option>
                        </select>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-earth-500 dark:text-earth-400 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Giuseppe Verdi"
                        required
                        className="w-full bg-white dark:bg-earth-800 border border-earth-300 dark:border-earth-700 text-earth-800 dark:text-earth-100 py-3 px-4 focus:outline-none focus:border-italian-green focus:ring-1 focus:ring-italian-green transition-colors rounded-sm"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-earth-500 dark:text-earth-400 text-xs font-bold uppercase tracking-wider mb-2">Phone</label>
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full bg-white dark:bg-earth-800 border border-earth-300 dark:border-earth-700 text-earth-800 dark:text-earth-100 py-3 px-4 focus:outline-none focus:border-italian-green focus:ring-1 focus:ring-italian-green transition-colors rounded-sm"
                        onChange={handleChange}
                    />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-italian-red text-white font-bold py-4 uppercase tracking-widest hover:bg-italian-green transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg rounded-sm"
              >
                {status === 'submitting' ? 'Confirming...' : 'Confirm Reservation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;