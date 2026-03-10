const STATS = [
  { num: "500+", label: "Happy Clients" },
  { num: "80+", label: "Nail Colours" },
  { num: "5★", label: "Avg Rating" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: "#ffffff" }}>
      <div
        className="about-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              aspectRatio: "3/4",
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid #c8ddb0",
              boxShadow: "0 20px 60px rgba(92,125,45,0.15)",
            }}
          >
            <img
              src="/images/Amaka.jpeg"
              alt="Amaka - Nail Technician & Hair Specialist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              background: "#5C7D2D",
              color: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "0.85rem",
              lineHeight: 1.4,
              boxShadow: "0 8px 25px rgba(92,125,45,0.3)",
            }}
          >
            5+ Years
            <br />
            Experience
          </div>
        </div>

        <div>
          <p
            style={{
              color: "#333333",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontSize: "0.80rem",
              marginBottom: "1rem",
            }}
          >
            About The Artist
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#1a2e0d",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Where Craft Meets
            <span style={{ color: "#15270A", fontStyle: "italic" }}>
              {" "}
              Passion
            </span>
          </h2>

          <p
            style={{
              color: "#333333",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
              fontSize: "0.95rem",
            }}
          >
            Hi! I'm Amaka — a certified nail technician and hair braiding
            specialist and professional makeup artist based in Nigeria with over
            5 years of experience turning beauty visions into reality. I've
            trained under some of the best in the industry and am passionate
            about delivering results that make my clients feel completely
            themselves. Whether it's stunning nails, gorgeous protective styles
            or a flawless beat, I bring your beauty dreams to life.
          </p>

          <p
            style={{
              color: "#333333",
              lineHeight: 1.9,
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}
          >
            From intricate nail art to hours-long protective styles, I treat
            every client like royalty. Your comfort, hygiene, and satisfaction
            are always my top priorities.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              borderTop: "2px solid #e8f0e0",
              paddingTop: "2rem",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    color: "#5C7D2D",
                    fontWeight: 700,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    color: "rgba(26,46,13,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
