import React, { useState } from 'react';
import { Eye, Clock, BarChart3, X } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Analytics: React.FC = () => {
  const { analytics, formatTime, resetAnalytics } = useAnalytics();
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-quantum/90 hover:bg-quantum text-white rounded-full p-3 shadow-lg"
          size="sm"
        >
          <BarChart3 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-quantum/20 min-w-[200px]">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-quantum flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Site Analytics
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0 hover:bg-gray-100"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Eye className="h-4 w-4 text-blue-500" />
            <span className="text-gray-600">Visits:</span>
            <span className="font-semibold text-quantum">{analytics.visitCount}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-gray-600">Session:</span>
            <span className="font-semibold text-quantum">
              {formatTime(analytics.sessionDuration)}
            </span>
          </div>

          {isExpanded && (
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-purple-500" />
                <span className="text-gray-600">Total Time:</span>
                <span className="font-semibold text-quantum">
                  {formatTime(analytics.totalTimeSpent + analytics.sessionDuration)}
                </span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={resetAnalytics}
                className="w-full text-xs h-7 border-quantum/30 text-quantum hover:bg-quantum/10"
              >
                Reset Data
              </Button>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-xs h-6 text-quantum hover:bg-quantum/10"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;