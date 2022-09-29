import Input from "../components/Input";
import { useEffect, useState } from "react";

// "/api/hello"

export default function Database() {
  useEffect(() => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John Doe" }),
    })
      .then((response) => response.json())
      .then((dataObtenido) => {
        console.log(dataObtenido);
      });
  }, []);

  return <Input></Input>;
}
