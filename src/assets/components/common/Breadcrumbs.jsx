
import { COLORS } from "../../../data/constants";

export const Breadcrumbs = ({ activePage, setActivePage }) => {
  const breadcrumbItems = {
    Home: ["Home"],
    Products: ["Home", "Products"],
    About: ["Home", "About"],
    Contact: ["Home", "Contact"],
  };

  const currentItems = breadcrumbItems[activePage] || ["Home"];

  const handleNavigate = (item, index) => {
    if (item === "Home") {
      setActivePage("Home");
    }
  };

  return (
    <div style={{
      padding: "12px 5vw",
      background: "rgba(255,255,255,0.95)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      position: "sticky",
      top: 72,
      zIndex: 99,
      backdropFilter: "blur(10px)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
        fontSize: 13,
      }}>
        {currentItems.map((item, index) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {index > 0 && (
              <span style={{ color: COLORS.muted, fontSize: 12 }}>/</span>
            )}
            {index === currentItems.length - 1 ? (
              <span style={{
                color: COLORS.primaryRed,
                fontWeight: 600,
                fontSize: 13,
              }}>
                {item}
              </span>
            ) : (
              <button
                onClick={() => handleNavigate(item, index)}
                style={{
                  background: "none",
                  border: "none",
                  color: COLORS.muted,
                  cursor: "pointer",
                  fontSize: 13,
                  padding: 0,
                  fontFamily: "'Poppins', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primaryRed}
                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.muted}
              >
                {item}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};