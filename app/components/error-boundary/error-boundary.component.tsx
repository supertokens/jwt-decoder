import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorContainerStyled from "./error-boundary.styles";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return(
        <ErrorContainerStyled>
          <h1>Sorry, there was an error. Please reload the page and try again</h1>
        </ErrorContainerStyled>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
