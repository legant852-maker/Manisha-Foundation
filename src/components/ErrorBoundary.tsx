import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 text-slate-800 font-sans">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              !
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">
              काहीतरी त्रुटी आली आहे (An Error Occurred)
            </h1>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              वेबसाइट लोड करताना तांत्रिक त्रुटी आली. कृपया पृष्ठ पुन्हा लोड करा.
              <br />
              <span className="text-xs text-slate-400">
                (A technical error occurred while loading. Please reload the page.)
              </span>
            </p>
            {this.state.error?.message && (
              <div className="text-left bg-slate-100 p-3 rounded-lg text-xs font-mono text-red-700 mb-6 overflow-x-auto max-h-32">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition shadow-md hover:shadow-lg"
            >
              पृष्ठ पुन्हा लोड करा (Reload Page)
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
