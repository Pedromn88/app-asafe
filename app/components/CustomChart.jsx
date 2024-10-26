import { useState, useEffect } from "react";

export const useAttributeValues = (data) => {
  const [attributeValues, setAttributeValues] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const values = data.map((item) => item.attributes.values);
      setAttributeValues(values);
    }
  }, [data]);

  return attributeValues;
};

