"use client"
import { useEffect } from "react";

const Form = ({ translation }: { translation: any }) => {
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    const existingScript = document.querySelector("#respondi_src");

    if (!existingScript && bodyElement) {
      const script = document.createElement("script");
      script.async = true;
      script.id = "respondi_src";
      script.src = "https://embed.respondi.app/embed.js";
      bodyElement.appendChild(script);
    }
  }, []);

  return (
    <div
      data-respondi-container=""
      data-respondi-mode="regular"
      data-respondi-src={translation.formLink}
      data-respondi-width="100%"
      data-respondi-height="100%"
    ></div>
  );
};

export default Form;
