import React, { useId } from "react";

export default function Input({ title }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={`field_${id}`}>{title}</label>
      <input type="text" id="field_id" placeholder={` ${title} ...`} />
    </div>
  );
}
