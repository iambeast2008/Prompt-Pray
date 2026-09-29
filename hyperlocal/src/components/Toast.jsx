import { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', isVisible, onClose, duration = 4000 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !show) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
  };

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]" role="alert" aria-live="polite">
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-lg transition-all duration-300 ${
          bgColors[type]
        } ${show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        {icons[type]}
        <p className="text-sm font-medium text-charcoal">{message}</p>
        <button
          onClick={() => { setShow(false); setTimeout(onClose, 300); }}
          className="ml-2 p-1 hover:bg-black/5 rounded-md transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4 text-gray" />
        </button>
      </div>
    </div>
  );
}
