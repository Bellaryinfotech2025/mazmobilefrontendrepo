import { useEffect, useMemo, useState } from "react";
import {
  Search, Smartphone, Clock, CheckCircle2, Loader2, Truck, AlertTriangle,
  ChevronLeft, ChevronRight, RefreshCw, Phone, Mail, MapPin, Calendar,
} from "lucide-react";
import logo from "../assets/logo2.png";

const API_BASE = "https://mozbackend.bellaryinfotech.com";
const PAGE_SIZE = 8;

const COLORS = {
  red: "#C41E3A",
  brown: "#8B6F47",
  dark: "#2C3E50",
  cream: "#F5F1E8",
  white: "#FFFFFF",
  border: "#EAE2D3",
};

const STATUS_OPTIONS = ["Pending", "In Progress", "In Journey", "Completed"];

const STATUS_STYLE = {
  Pending:       { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B", icon: AlertTriangle },
  "In Progress": { bg: "#DBEAFE", text: "#1E40AF", dot: "#3B82F6", icon: Loader2 },
  "In Journey":  { bg: "#EDE9FE", text: "#5B21B6", dot: "#8B5CF6", icon: Truck },
  Completed:     { bg: "#D1FAE5", text: "#065F46", dot: "#10B981", icon: CheckCircle2 },
};

function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function getGreeting(hour) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function ServiceRequestsPortal() {
  const now = useLiveClock();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [savingId, setSavingId] = useState(null);

  const loadIssues = () => {
    setLoading(true);
    setError("");
    fetch(`${API_BASE}/api/issues`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => setIssues(Array.isArray(data) ? data : []))
      .catch(() => setError("Couldn't load service requests. Is the backend running on port 2585?"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadIssues(); }, []);

  const handleStatusChange = async (issue, newStatus) => {
    const prevIssues = issues;
    setIssues((prev) => prev.map((it) => (it.id === issue.id ? { ...it, status: newStatus } : it)));
    setSavingId(issue.id);
    try {
      const res = await fetch(`${API_BASE}/api/issues/${issue.id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      setIssues((prev) => prev.map((it) => (it.id === issue.id ? updated : it)));
    } catch {
      setIssues(prevIssues); // revert on failure
    } finally {
      setSavingId(null);
    }
  };

  const stats = useMemo(() => ({
    total: issues.length,
    pending: issues.filter((i) => i.status === "Pending").length,
    inProgress: issues.filter((i) => i.status === "In Progress" || i.status === "In Journey").length,
    completed: issues.filter((i) => i.status === "Completed").length,
  }), [issues]);

  const filtered = useMemo(() => {
    return issues.filter((i) => {
      if (statusFilter !== "ALL" && i.status !== statusFilter) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const hay = `${i.name || ""} ${i.trackingId || ""} ${i.phone || ""} ${i.mobileBrand || ""} ${i.mobileModel || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [issues, search, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (p) => {
    setPage(p);
    document.getElementById("mrp-scroll-top")?.scrollIntoView({ behavior: "smooth" });
  };

  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div style={{ minHeight: "100vh", background: COLORS.cream, fontFamily: "'Poppins', -apple-system, sans-serif", scrollBehavior: "smooth" }}>
      <div id="mrp-scroll-top" />

      {/* Header */}
      <div style={{ background: COLORS.white, borderBottom: `1px solid ${COLORS.border}`, position: "sticky", top: 0, zIndex: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.brown}, ${COLORS.red})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
              <img src={logo} alt="Azhar's Mobile Cafe" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.brown})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.1 }}>
                Azhar's Mobile Cafe
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.brown, fontWeight: 600, marginTop: 1 }}>Service Requests Portal</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={loadIssues} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9, border: `1.5px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.dark, fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>
              <RefreshCw size={13} className={loading ? "mrp-spin" : ""} /> Refresh
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "22px 20px 60px" }}>

        {/* Greeting + live clock */}
        <div style={{ background: `linear-gradient(120deg, ${COLORS.dark} 0%, #3d5568 100%)`, borderRadius: 18, padding: "22px 26px", marginBottom: 20, color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, boxShadow: "0 8px 24px rgba(44,62,80,0.18)" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{getGreeting(now.getHours())}! 👋</div>
            <div style={{ fontSize: 13, color: "#CBD5E1", marginTop: 4 }}>{dateStr}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 26, fontWeight: 800, fontVariantNumeric: "tabular-nums", letterSpacing: 0.5 }}>{timeStr}</div>
            <div style={{ fontSize: 11.5, color: "#CBD5E1", marginTop: 2 }}>{stats.total} total requests · {stats.pending} pending</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Total Requests", value: stats.total, icon: Smartphone, color: COLORS.dark, bg: "#EEF2F7" },
            { label: "Pending", value: stats.pending, icon: AlertTriangle, color: "#92400E", bg: STATUS_STYLE.Pending.bg },
            { label: "In Progress", value: stats.inProgress, icon: Truck, color: "#5B21B6", bg: STATUS_STYLE["In Journey"].bg },
            { label: "Completed", value: stats.completed, icon: CheckCircle2, color: "#065F46", bg: STATUS_STYLE.Completed.bg },
          ].map((s) => (
            <div key={s.label} style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: "14px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 10.5, fontWeight: 800, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 0.4 }}>{s.label}</span>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={14} color={s.color} />
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 1, minWidth: 220, maxWidth: 320 }}>
            <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search name, phone, tracking ID..."
              style={{ width: "100%", padding: "9px 12px 9px 34px", borderRadius: 10, border: `1.5px solid ${COLORS.border}`, fontSize: 12.5, outline: "none", boxSizing: "border-box", background: COLORS.white }}
            />
          </div>
          <div style={{ display: "flex", gap: 4, background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 4 }}>
            {["ALL", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => { setStatusFilter(s); setPage(1); }}
                style={{
                  padding: "7px 12px", borderRadius: 7, border: "none", cursor: "pointer",
                  background: statusFilter === s ? COLORS.dark : "transparent",
                  color: statusFilter === s ? "#fff" : "#64748B",
                  fontSize: 11.5, fontWeight: 700,
                }}
              >
                {s === "ALL" ? "All" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          {loading ? (
            <div style={{ padding: 60, textAlign: "center" }}>
              <Loader2 size={26} className="mrp-spin" color="#94A3B8" />
            </div>
          ) : error ? (
            <div style={{ padding: 40, textAlign: "center", color: COLORS.red, fontSize: 13, fontWeight: 600 }}>{error}</div>
          ) : pageRows.length === 0 ? (
            <div style={{ padding: 60, textAlign: "center" }}>
              <Smartphone size={30} color="#CBD5E1" style={{ margin: "0 auto 10px" }} />
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.dark }}>No service requests found</div>
              <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 4 }}>Try a different search or filter.</div>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                <thead>
                  <tr style={{ background: "#FAFAF7", borderBottom: `1px solid ${COLORS.border}` }}>
                    {["Tracking ID", "Customer", "Device", "Issue", "Progress", "Status", "Submitted"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "11px 14px", fontSize: 10.5, fontWeight: 800, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 0.4, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((issue) => {
                    const st = STATUS_STYLE[issue.status] || STATUS_STYLE.Pending;
                    return (
                      <tr key={issue.id} style={{ borderBottom: `1px solid #F3EFE5` }}>
                        <td style={{ padding: "12px 14px", fontFamily: "monospace", fontSize: 11.5, fontWeight: 700, color: COLORS.dark }}>{issue.trackingId}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <div style={{ fontWeight: 700, color: COLORS.dark }}>{issue.name}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94A3B8", marginTop: 2 }}>
                            <Phone size={10} /> {issue.phone}
                          </div>
                        </td>
                        <td style={{ padding: "12px 14px", color: "#475569" }}>
                          <div>{issue.mobileBrand}</div>
                          <div style={{ fontSize: 11, color: "#94A3B8" }}>{issue.mobileModel}</div>
                        </td>
                        <td style={{ padding: "12px 14px", color: "#475569", maxWidth: 160 }}>
                          {issue.issueType}
                          {issue.customIssue && <div style={{ fontSize: 10.5, color: "#94A3B8", marginTop: 2 }}>{issue.customIssue}</div>}
                        </td>
                        <td style={{ padding: "12px 14px", minWidth: 100 }}>
                          <div style={{ width: "100%", height: 6, background: "#F1EFE9", borderRadius: 999, overflow: "hidden" }}>
                            <div style={{ width: `${issue.progress || 0}%`, height: "100%", background: st.dot, borderRadius: 999, transition: "width 0.3s ease" }} />
                          </div>
                          <div style={{ fontSize: 10.5, color: "#94A3B8", marginTop: 3, fontWeight: 700 }}>{issue.progress || 0}%</div>
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <StatusDropdown
                            value={issue.status}
                            saving={savingId === issue.id}
                            style={st}
                            onChange={(newStatus) => handleStatusChange(issue, newStatus)}
                          />
                        </td>
                        <td style={{ padding: "12px 14px", color: "#94A3B8", fontSize: 11.5, whiteSpace: "nowrap" }}>
                          {issue.createdDate ? new Date(issue.createdDate).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && filtered.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 16px", borderTop: `1px solid ${COLORS.border}`, flexWrap: "wrap", gap: 10 }}>
              <span style={{ fontSize: 12, color: "#94A3B8" }}>
                Showing <strong style={{ color: COLORS.dark }}>{(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)}</strong> of <strong style={{ color: COLORS.dark }}>{filtered.length}</strong>
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, border: `1.5px solid ${COLORS.border}`, background: COLORS.white, fontSize: 12, fontWeight: 700, color: page === 1 ? "#CBD5E1" : COLORS.dark, cursor: page === 1 ? "not-allowed" : "pointer" }}
                >
                  <ChevronLeft size={13} /> Previous
                </button>
                <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 700, minWidth: 60, textAlign: "center" }}>{page} / {totalPages}</span>
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, border: `1.5px solid ${COLORS.border}`, background: COLORS.white, fontSize: 12, fontWeight: 700, color: page === totalPages ? "#CBD5E1" : COLORS.dark, cursor: page === totalPages ? "not-allowed" : "pointer" }}
                >
                  Next <ChevronRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes mrp-spin { to { transform: rotate(360deg); } }
        .mrp-spin { animation: mrp-spin 0.8s linear infinite; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

function StatusDropdown({ value, saving, style, onChange }) {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <span style={{ position: "absolute", left: 10, width: 6, height: 6, borderRadius: "50%", background: style.dot, pointerEvents: "none" }} />
      <select
        value={value}
        disabled={saving}
        onChange={(e) => onChange(e.target.value)}
        style={{
          appearance: "none", WebkitAppearance: "none",
          padding: "6px 26px 6px 22px", borderRadius: 999,
          border: "1px solid transparent", background: style.bg, color: style.text,
          fontSize: 11.5, fontWeight: 800, cursor: saving ? "wait" : "pointer",
          opacity: saving ? 0.6 : 1, outline: "none",
        }}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      {saving && (
        <Loader2 size={11} className="mrp-spin" style={{ position: "absolute", right: 7, color: style.text }} />
      )}
    </div>
  );
}
