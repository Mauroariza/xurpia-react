
import React from 'react';


interface MyComponentProps {
  title: string;
  subtitle?: string; 
}


const MyComponent: React.FC<MyComponentProps> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};


export default MyComponent;
