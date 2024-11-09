// src/components/layout/Footer.tsx
import React from 'react';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 border-t bg-background/95 backdrop-blur">
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-muted-foreground">
          © 2024 Admin Dashboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;