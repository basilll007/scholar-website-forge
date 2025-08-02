import { useState, useEffect } from 'react';

interface AnalyticsData {
  visitCount: number;
  sessionStartTime: number;
  sessionDuration: number;
  totalTimeSpent: number;
}

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    visitCount: 0,
    sessionStartTime: Date.now(),
    sessionDuration: 0,
    totalTimeSpent: 0
  });

  useEffect(() => {
    // Initialize analytics on component mount
    const initAnalytics = () => {
      const stored = localStorage.getItem('portfolioAnalytics');
      const sessionStart = Date.now();
      
      if (stored) {
        const data = JSON.parse(stored);
        const newData = {
          ...data,
          visitCount: data.visitCount + 1,
          sessionStartTime: sessionStart,
          sessionDuration: 0
        };
        setAnalytics(newData);
        localStorage.setItem('portfolioAnalytics', JSON.stringify(newData));
      } else {
        const newData = {
          visitCount: 1,
          sessionStartTime: sessionStart,
          sessionDuration: 0,
          totalTimeSpent: 0
        };
        setAnalytics(newData);
        localStorage.setItem('portfolioAnalytics', JSON.stringify(newData));
      }
    };

    initAnalytics();

    // Update session duration every second
    const interval = setInterval(() => {
      setAnalytics(prev => {
        const currentDuration = Math.floor((Date.now() - prev.sessionStartTime) / 1000);
        const updatedData = {
          ...prev,
          sessionDuration: currentDuration
        };
        
        // Update localStorage every 10 seconds to avoid too frequent writes
        if (currentDuration % 10 === 0) {
          const stored = localStorage.getItem('portfolioAnalytics');
          if (stored) {
            const data = JSON.parse(stored);
            const newData = {
              ...data,
              totalTimeSpent: data.totalTimeSpent + 10
            };
            localStorage.setItem('portfolioAnalytics', JSON.stringify(newData));
          }
        }
        
        return updatedData;
      });
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      // Save final session duration
      const stored = localStorage.getItem('portfolioAnalytics');
      if (stored) {
        const data = JSON.parse(stored);
        const finalDuration = Math.floor((Date.now() - analytics.sessionStartTime) / 1000);
        const newData = {
          ...data,
          totalTimeSpent: data.totalTimeSpent + finalDuration
        };
        localStorage.setItem('portfolioAnalytics', JSON.stringify(newData));
      }
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  const resetAnalytics = () => {
    localStorage.removeItem('portfolioAnalytics');
    setAnalytics({
      visitCount: 1,
      sessionStartTime: Date.now(),
      sessionDuration: 0,
      totalTimeSpent: 0
    });
  };

  return {
    analytics,
    formatTime,
    resetAnalytics
  };
};