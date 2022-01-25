import React, { useState } from 'react';

export default function Input() {
    const [name,setName]=useState("");
  return (
    <form>
        <label>Please Enter Your Name:
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
    </form>
    );
}
