export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "130px 24px 80px",
        background: "#080c09",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#bbf244",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          CONTACT
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Let&apos;s build something great together.
        </h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "700px",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          Have a Shopify, e-commerce or web development project in mind?
          Send me the details and I&apos;ll get back to you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.7fr",
            gap: "24px",
          }}
        >
          <form
            action="https://formsubmit.co/musawarkahloon991@gmail.com"
            method="POST"
            style={{
              padding: "32px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Enquiry"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="service"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#111711",
                  color: "white",
                }}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Shopify Development</option>
                <option>Website Development</option>
                <option>E-commerce Development</option>
                <option>Website Redesign</option>
                <option>Bug Fixing</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="budget"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Budget
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#111711",
                  color: "white",
                }}
              >
                <option value="" disabled>
                  Select budget
                </option>
                <option>Under $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $2,500</option>
                <option>$2,500+</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                minHeight: "54px",
                border: "none",
                borderRadius: "14px",
                background: "#bbf244",
                color: "#080c09",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Send Project Enquiry
            </button>
          </form>

          <aside
            style={{
              padding: "32px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
              height: "fit-content",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "16px",
              }}
            >
              Contact Musawar
            </h2>

            <p
              style={{
                color: "#9ca3af",
                lineHeight: 1.7,
                marginBottom: "26px",
              }}
            >
              You can also contact me directly through email, WhatsApp or
              Instagram.
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              <a
                href="mailto:musawarkahloon991@gmail.com"
                style={{
                  padding: "15px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Email
              </a>

              <a
                href="https://wa.me/92332728620"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "15px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(187,242,68,0.25)",
                  color: "#bbf244",
                }}
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/musawar__kahloon?exln=ejdpeWxwd2hldjFm&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "15px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Instagram
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
