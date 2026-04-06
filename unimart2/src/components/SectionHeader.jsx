
import { FiArrowRight } from "react-icons/fi";
import "../styles/SectionHeader.css";

export default function SectionHeader({ tag, tagColor = "#3a7d1e", title, subtitle, cta }) {
  return (
    <div className="section-header">
      <div>
        {tag && (
          <span className="section-header-tag" style={{ background: tagColor }}>
            {tag}
          </span>
        )}
        <h2 className="section-header-title">{title}</h2>
        {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}