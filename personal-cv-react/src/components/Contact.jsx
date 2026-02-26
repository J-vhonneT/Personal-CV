import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notify, setNotify] = useState({ text: "", type: "" }); // type: "error" | "success"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setNotify({ text: "Please fill in all required fields.", type: "error" });
      return;
    }

    // Show success
    setNotify({ text: "Form submitted successfully!", type: "success" });

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");

    // Auto-hide after 3s
    setTimeout(() => setNotify({ text: "", type: "" }), 3000);
  };

  return (
    <>
      {/* Top notification banner */}
      {notify.text && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            padding: "15px 0",
            textAlign: "center",
            zIndex: 1000,
            fontWeight: "bold",
            color: notify.type === "error" ? "#ff4d4d" : "#ff69b4",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          {notify.text}
        </div>
      )}

      <section className="card">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}

export default Contact;