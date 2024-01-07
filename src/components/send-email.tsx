"use client";

import React, { useState } from "react";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <button onClick={callPost}>Send Email</button>
    </div>
  );
};

export default SendEmail;

async function callPost() {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "langlang1991@gmail.com",
      firstName: "Lang",
    }),
  });

  const data = await response.json();

  if (data.error) {
    console.error(data.error);
  } else {
    console.log(data);
  }
}
