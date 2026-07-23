"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DevWidget() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [activeTab, setActiveTab] = useState<"ui" | "json">("ui");

  const handleFetch = () => {
    setStatus("loading");
    setTimeout(() => {
      // 80% chance of success to make it interesting
      if (Math.random() > 0.2) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const MOCK_DATA = {
    user: {
      id: "us_10294",
      name: "Paloma Amaral",
      role: "Desenvolvedora Frontend",
      skills: ["React", "Next.js", "Tailwind", "TypeScript"],
      status: "active"
    },
    metrics: {
      uptime: "99.9%",
      latency: "42ms"
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-0 gap-0">
      
      {/* ── Painel Esquerdo: Controles ── */}
      <div className="lg:w-[46%] flex flex-col gap-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-y-auto bg-[var(--bg)]">
        <div>
          <span className="font-mono text-[9px] text-[var(--accent)] uppercase tracking-[0.18em] block mb-2">Conceito Técnico</span>
          <h3 className="font-display font-semibold text-base mb-1">Simulador de API & Estado</h3>
          <p className="text-xs text-[var(--text-2)] leading-relaxed">
            O fluxo padrão do frontend moderno: fazer uma requisição assíncrona, tratar o estado de "loading" (esqueleto) e, em seguida, renderizar a UI com os dados.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[var(--bg-3)] border border-[var(--border)]">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-3)] mb-2">
            Endpoint Simulado
          </p>
          <div className="flex items-center gap-3 bg-[var(--bg-2)] p-2.5 rounded border border-[var(--border)] overflow-hidden">
            <span className="font-mono text-[10px] font-bold text-emerald-400">GET</span>
            <span className="font-mono text-[11px] text-[var(--text-1)] truncate">/api/v1/profile/developer</span>
          </div>

          <button
            onClick={handleFetch}
            disabled={status === "loading"}
            className="mt-4 w-full py-2.5 rounded bg-[var(--accent)] text-[var(--bg-1)] font-semibold text-[13px] transition-all hover:bg-[var(--accent-2)] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" && (
              <motion.span 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-3.5 h-3.5 border-2 border-[var(--bg-1)] border-t-transparent rounded-full"
              />
            )}
            {status === "loading" ? "Buscando dados..." : "Fazer Requisição"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          <span className={`px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wide border transition-colors ${status === "idle" ? "bg-[var(--text-3)] text-white border-transparent" : "bg-transparent border-[var(--border)] text-[var(--text-3)]"}`}>Idle</span>
          <span className={`px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wide border transition-colors ${status === "loading" ? "bg-blue-500 text-white border-transparent" : "bg-transparent border-[var(--border)] text-[var(--text-3)]"}`}>Pending</span>
          <span className={`px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wide border transition-colors ${status === "success" ? "bg-emerald-500 text-white border-transparent" : "bg-transparent border-[var(--border)] text-[var(--text-3)]"}`}>Resolved</span>
          <span className={`px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wide border transition-colors ${status === "error" ? "bg-red-500 text-white border-transparent" : "bg-transparent border-[var(--border)] text-[var(--text-3)]"}`}>Rejected</span>
        </div>
      </div>

      {/* ── Painel Direito: Visualizador ── */}
      <div className="flex-1 flex flex-col p-5 lg:p-6 gap-0 min-h-0 bg-[var(--bg)]">
        <div className="flex border-b border-[var(--border)] mb-4">
          <button 
            onClick={() => setActiveTab("ui")}
            className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors border-b-2 ${activeTab === "ui" ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--text-3)] hover:text-[var(--text-2)]"}`}
          >
            UI Renderizada
          </button>
          <button 
            onClick={() => setActiveTab("json")}
            className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors border-b-2 ${activeTab === "json" ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--text-3)] hover:text-[var(--text-2)]"}`}
          >
            Raw JSON
          </button>
        </div>

        <div className="flex-1 min-h-[220px] rounded-xl bg-[var(--bg-2)] p-6 relative overflow-hidden flex items-center justify-center border border-[var(--border)]">
          
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-[var(--text-3)] font-mono text-xs"
              >
                <p>Aguardando requisição...</p>
                <p className="mt-2 text-[9px] opacity-70">Clique em "Fazer Requisição" para iniciar.</p>
              </motion.div>
            )}

            {status === "loading" && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-sm space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--border)] animate-pulse" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3 bg-[var(--border)] rounded w-1/3 animate-pulse" />
                    <div className="h-2.5 bg-[var(--border)] rounded w-1/4 animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-2.5 bg-[var(--border)] rounded w-full animate-pulse delay-75" />
                  <div className="h-2.5 bg-[var(--border)] rounded w-5/6 animate-pulse delay-150" />
                  <div className="h-2.5 bg-[var(--border)] rounded w-4/6 animate-pulse delay-200" />
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <h4 className="font-semibold text-red-400 text-sm mb-1">500 - Internal Server Error</h4>
                <p className="text-[10px] text-[var(--text-3)] mb-3">Falha simulada na API. (Tente novamente)</p>
                <button onClick={handleFetch} className="text-[11px] font-mono text-[var(--accent)] hover:underline">Repetir Requisição</button>
              </motion.div>
            )}

            {status === "success" && activeTab === "ui" && (
              <motion.div 
                key="success-ui"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-sm bg-[var(--bg-1)] border border-[var(--border)] rounded-xl p-5 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[var(--accent)] to-purple-500 flex items-center justify-center text-white font-bold font-display text-xs">
                      PA
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-1)] text-sm">{MOCK_DATA.user.name}</h4>
                      <p className="text-[10px] text-[var(--text-3)] font-mono mt-0.5">{MOCK_DATA.user.role}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[9px] uppercase font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {MOCK_DATA.user.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {MOCK_DATA.user.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-3)] text-[10px] text-[var(--text-2)]">{s}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {status === "success" && activeTab === "json" && (
              <motion.div 
                key="success-json"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full text-left"
              >
                <pre className="font-mono text-[10px] text-[var(--text-2)] overflow-auto p-4 bg-[#0d1117] rounded-lg border border-[var(--border)] h-full w-full absolute inset-0">
                  <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(MOCK_DATA, null, 2)) }} />
                </pre>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

// Helper muito simples para colorir o JSON
function syntaxHighlight(json: string) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'text-blue-400';
    if (/^"/.test(match)) {
        if (/:$/.test(match)) {
            cls = 'text-purple-400';
        } else {
            cls = 'text-green-400';
        }
    } else if (/true|false/.test(match)) {
        cls = 'text-emerald-400';
    } else if (/null/.test(match)) {
        cls = 'text-gray-400';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}
