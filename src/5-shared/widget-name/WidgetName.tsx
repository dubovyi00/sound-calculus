import React from "react";

interface WidgetNameProps {
  // Label of widget
  label: string;
}

// Display for widget name
const WidgetName: React.FX<WidgetNameProps> = ({ label }: WidgetNameProps) => (
  <div className="flex flex-row justify-around text-pale-sky text-2xl">
    {label}
  </div>
);

export default WidgetName;
