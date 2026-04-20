/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  CircleDashed, 
  Eye, 
  Triangle, 
  Smile, 
  Ear, 
  User, 
  Printer, 
  ChevronLeft, 
  Clock, 
  Target, 
  Lightbulb, 
  BookOpen, 
  Download,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WORKSHOP_DATA, Module, WorkshopClass, Exercise } from "./data";

const ICON_MAP: Record<string, any> = {
  CircleDashed,
  Eye,
  Triangle,
  Smile,
  Ear,
  User
};

export default function App({ onLogout }: { onLogout: () => void }) {
  const [view, setView] = useState<"dashboard" | "module" | "schedule">("dashboard");
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const selectedModule = WORKSHOP_DATA.find(m => m.id === selectedModuleId);

  // Auto-scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedModuleId]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = (pdfUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-clay/20">
      {/* Navigation / Header - Natural Tones Style */}
      <header className="no-print sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border-soft px-8 py-8 flex flex-col md:flex-row items-start md:items-end justify-between transition-all">
        <div 
          className="cursor-pointer group flex items-start gap-5" 
          onClick={() => setView("dashboard")}
        >
          <img 
            src="/logo.png" 
            alt="Gveva Logo" 
            className="w-16 h-16 object-contain"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div>
            <p className="text-[0.75rem] text-olive font-bold uppercase tracking-[0.1em] mb-2 leading-none">Manual del Estudiante</p>
            <h1 className="font-serif text-[2.8rem] font-normal tracking-tight leading-none group-hover:text-clay transition-colors">Taller de Retrato</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-10 mt-8 md:mt-0">
          <div className="hidden sm:flex gap-8 text-right">
            <div className="flex flex-col">
              <span className="text-[0.7rem] uppercase text-ink/60 font-medium tracking-wider mb-1">Duración</span>
              <strong className="font-serif text-2xl font-normal leading-none">10 Sesiones</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.7rem] uppercase text-ink/60 font-medium tracking-wider mb-1">Intensidad</span>
              <strong className="font-serif text-2xl font-normal leading-none">20 Horas Totales</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setView("schedule")}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${view === 'schedule' ? 'bg-clay text-white shadow-lg shadow-clay/20' : 'bg-white border border-border-soft hover:border-clay hover:text-clay'}`}
            >
              Cronograma
            </button>
            
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-clay text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-clay/90 transition-all shadow-lg shadow-clay/20"
            >
              <Download size={14} />
              <span className="hidden sm:inline">PDF</span>
            </button>
            
            {/* Botón de Cerrar Sesión - AGREGADO */}
            <button 
              onClick={onLogout}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-white border border-red-300 text-red-500 hover:bg-red-50"
            >
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 no-print">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="font-serif text-4xl sm:text-5xl font-bold italic tracking-tight">Bienvenido al Taller</h2>
                <p className="text-xl text-ink/60 font-light max-w-2xl leading-relaxed">
                  Una guía estructurada de 10 clases para dominar el retrato humano y la figura humana desde la base geométrica hasta el detalle artístico.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WORKSHOP_DATA.map((module, index) => {
                  return (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setSelectedModuleId(module.id);
                        setView("module");
                      }}
                      className="group relative bg-white border border-border-soft p-8 rounded-xl hover:border-clay hover:shadow-xl hover:shadow-clay/5 transition-all cursor-pointer flex flex-col justify-between min-h-[240px]"
                    >
                      <span className="tag absolute top-6 right-8 text-[10px] font-bold bg-paper px-2 py-1 rounded-sm border border-border-soft text-ink/40 uppercase">
                        Clase {index * 2 + 1}
                        {module.classes.length > 1 ? `-${index * 2 + module.classes.length}` : ""}
                      </span>
                      
                      <div>
                        <div className="font-serif italic text-sm text-clay mb-2 tracking-wide">Módulo {["I", "II", "III", "IV", "V", "VI"][index]}</div>
                        <h3 className="font-serif text-[1.6rem] font-normal mb-3 group-hover:text-clay transition-colors">{module.title}</h3>
                        <p className="text-ink/60 text-[0.85rem] leading-relaxed pr-8">{module.description}</p>
                      </div>
                      
                      <div className="mt-8 flex items-center gap-2 text-clay text-[0.7rem] font-bold uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity">
                        Estudiar contenido <ChevronLeft size={12} className="rotate-180" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {view === "module" && selectedModule && (
            <motion.div
              key={selectedModule.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <button 
                onClick={() => setView("dashboard")}
                className="flex items-center gap-2 text-olive font-bold text-xs uppercase tracking-widest hover:text-clay transition-colors"
              >
                <ChevronLeft size={16} /> Volver al catálogo
              </button>

              <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="inline-block border-b border-border-soft pb-2">
                       <h2 className="font-serif text-5xl font-normal tracking-tight">{selectedModule.title}</h2>
                    </div>
                    <p className="text-xl text-ink/60 leading-relaxed font-light max-w-2xl">{selectedModule.description}</p>
                  </div>

                  <section className="space-y-8">
                    <h4 className="font-serif text-xl font-normal border-b border-border-soft pb-4 flex items-center gap-3">
                      <Calendar size={20} className="text-olive" /> Programa Académico
                    </h4>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      {selectedModule.classes.map((c) => (
                        <div key={c.number} className="bg-white border border-border-soft rounded-xl p-8 hover:border-olive transition-colors group flex flex-col">
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-bold text-olive bg-paper px-2 py-0.5 rounded border border-border-soft tracking-wider uppercase">Sesión {c.number}</span>
                            <span className="text-[10px] text-ink/40 font-mono font-bold tracking-tighter italic">{c.duration}</span>
                          </div>
                          <h5 className="font-serif text-2xl font-normal mb-4 group-hover:text-olive transition-colors">{c.title}</h5>
                          <p className="text-[0.8rem] text-ink/50 leading-relaxed flex-1">
                            <Target size={14} className="inline mr-1 mb-0.5 text-clay" /> {c.objective}
                          </p>
                          
                          {/* Botones de PDF para la clase */}
                          {c.pdfUrl && (
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-soft">
                              {Array.isArray(c.pdfUrl) ? (
                                c.pdfUrl.map((pdf, pdfIdx) => (
                                  <div key={pdfIdx} className="flex gap-1">
                                    <button
                                      onClick={() => handleViewPdf(pdf)}
                                      className="flex items-center gap-1 px-3 py-1.5 bg-olive/10 text-olive rounded-lg text-xs font-medium hover:bg-olive/20 transition-colors"
                                    >
                                      <Eye size={12} /> Ver PDF {pdfIdx + 1}
                                    </button>
                                    <button
                                      onClick={() => handleDownloadPdf(pdf, `${c.title} - PDF ${pdfIdx + 1}`)}
                                      className="flex items-center gap-1 px-3 py-1.5 bg-clay/10 text-clay rounded-lg text-xs font-medium hover:bg-clay/20 transition-colors"
                                    >
                                      <Download size={12} /> Descargar
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleViewPdf(c.pdfUrl as string)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-olive/10 text-olive rounded-lg text-xs font-medium hover:bg-olive/20 transition-colors"
                                  >
                                    <Eye size={12} /> Ver material
                                  </button>
                                  <button
                                    onClick={() => handleDownloadPdf(c.pdfUrl as string, c.title)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-clay/10 text-clay rounded-lg text-xs font-medium hover:bg-clay/20 transition-colors"
                                  >
                                    <Download size={12} /> Descargar
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="bg-white border border-border-soft rounded-2xl p-8 sticky top-32 flex flex-col h-fit lg:max-h-[calc(100vh-160px)]">
                  <h4 className="font-serif text-xl font-normal border-b border-border-soft pb-4 mb-8">Ejercicios: {selectedModule.title}</h4>
                  
                  <div className="flex-1 overflow-y-auto pr-2 space-y-10 scrollbar-hide">
                    {selectedModule.exercises.map((ex, idx) => (
                      <div key={ex.id} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <strong className="text-[0.95rem] font-bold text-ink">{idx + 1}. {ex.title}</strong>
                          <span className="text-[9px] font-mono font-bold text-olive uppercase tracking-widest">{ex.duration}</span>
                        </div>
                        <p className="text-[0.85rem] text-ink/60 leading-relaxed">{ex.description}</p>
                        <div className="text-[9px] uppercase font-bold text-clay tracking-widest flex items-center gap-1">
                          <Target size={10} /> Meta: {ex.objective}
                        </div>
                        
                        {/* Botones de PDF para ejercicios */}
                        {ex.pdfUrl && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {Array.isArray(ex.pdfUrl) ? (
                              ex.pdfUrl.map((pdf, pdfIdx) => (
                                <div key={pdfIdx} className="flex gap-1">
                                  <button
                                    onClick={() => handleViewPdf(pdf)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-olive/10 text-olive rounded-lg text-xs font-medium hover:bg-olive/20 transition-colors"
                                  >
                                    <Eye size={12} /> Ver PDF {pdfIdx + 1}
                                  </button>
                                  <button
                                    onClick={() => handleDownloadPdf(pdf, `${ex.title} - PDF ${pdfIdx + 1}`)}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-clay/10 text-clay rounded-lg text-xs font-medium hover:bg-clay/20 transition-colors"
                                  >
                                    <Download size={12} /> Descargar
                                  </button>
                                </div>
                              ))
                            ) : (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleViewPdf(ex.pdfUrl as string)}
                                  className="flex items-center gap-1 px-3 py-1.5 bg-olive/10 text-olive rounded-lg text-xs font-medium hover:bg-olive/20 transition-colors"
                                >
                                  <Eye size={12} /> Ver ejercicio
                                </button>
                                <button
                                  onClick={() => handleDownloadPdf(ex.pdfUrl as string, ex.title)}
                                  className="flex items-center gap-1 px-3 py-1.5 bg-clay/10 text-clay rounded-lg text-xs font-medium hover:bg-clay/20 transition-colors"
                                >
                                  <Download size={12} /> Descargar PDF
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="bg-paper border border-border-soft p-6 rounded-xl space-y-4">
                      <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-olive">
                        <Lightbulb size={14} className="text-clay" /> Recomendaciones
                      </h5>
                      <ul className="space-y-3">
                        {selectedModule.tips.map((tip, i) => (
                          <li key={i} className="text-[11px] text-ink/70 leading-relaxed flex gap-2">
                            <span className="text-clay font-bold font-serif italic text-xs leading-none">0{i+1}</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border-soft space-y-3 no-print">
                    <button 
                      onClick={handlePrint}
                      className="w-full h-12 flex items-center justify-center gap-2 bg-clay text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-clay/90 transition-all shadow-lg shadow-clay/20"
                    >
                      Descargar Guía (PDF)
                    </button>
                    <button 
                      onClick={handlePrint}
                      className="w-full h-12 flex items-center justify-center gap-2 border border-clay text-clay rounded-full text-xs font-bold uppercase tracking-widest hover:bg-clay/5 transition-all"
                    >
                      Imprimir Módulo
                    </button>
                  </div>
                </aside>
              </div>
            </motion.div>
          )}

          {view === "schedule" && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-12"
            >
              <div className="text-center space-y-2 max-w-2xl mx-auto">
                <p className="text-xs font-bold text-olive uppercase tracking-[0.2em] mb-2">Plan Maestro</p>
                <h2 className="font-serif text-5xl font-normal tracking-tight">Cronograma de Sesiones</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 gap-1">
                  {WORKSHOP_DATA.flatMap(m => m.classes).sort((a,b) => a.number - b.number).map((c, i) => {
                    const m = WORKSHOP_DATA.find(mod => mod.classes.some(cl => cl.number === c.number));
                    return (
                      <div key={c.number} className="group bg-white border border-border-soft p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-paper transition-colors rounded-none first:rounded-t-2xl last:rounded-b-2xl">
                         <div className="flex items-start gap-10">
                            <div className="flex flex-col items-center">
                              <span className="font-serif italic text-lg text-clay leading-none">#{c.number}</span>
                              <div className="w-px h-10 bg-border-soft my-2" />
                            </div>
                            <div>
                               <div className="flex items-center gap-3 mb-2">
                                  <span className="text-[10px] font-bold text-olive uppercase tracking-widest">{m?.title}</span>
                                  <span className="text-[9px] font-mono text-ink/30 italic">{c.duration}</span>
                               </div>
                               <h4 className="font-serif text-3xl font-normal tracking-tight group-hover:text-clay transition-colors">{c.title}</h4>
                               <p className="text-xs text-ink/40 font-light mt-1">{c.objective}</p>
                            </div>
                         </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Print View (Only visible when printing) */}
      <div className="print-only p-8 text-black bg-white">
        <div className="text-center border-b-2 border-black pb-8 mb-12">
          <img src="/logo.png" alt="" className="w-32 h-32 mx-auto mb-6 object-contain" />
          <h1 className="text-5xl font-serif font-black uppercase mb-4">Guía del Taller de Dibujo</h1>
          <p className="text-xl italic">Un programa estructurado de 10 clases / 20 horas</p>
        </div>

        {WORKSHOP_DATA.map((module) => (
          <div key={module.id} className="print-page-break mb-16">
            <h2 className="text-4xl font-serif font-bold border-b border-black pb-2 mb-6">Módulo: {module.title}</h2>
            <p className="text-xl mb-8">{module.description}</p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contenido de las Clases</h3>
                {module.classes.map(c => (
                  <div key={c.number} className="mb-4">
                    <p className="font-bold">Clase {c.number}: {c.title} ({c.duration})</p>
                    <p className="text-sm">Objetivo: {c.objective}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Consejos Rápidos</h3>
                <ul className="list-disc pl-5">
                  {module.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 italic underline">Ejercicios de Práctica</h3>
              <div className="space-y-8">
                {module.exercises.map(ex => (
                  <div key={ex.id} className="border-l-4 border-black pl-4">
                    <p className="text-xl font-bold uppercase">{ex.title} <span className="text-sm normal-case font-normal ml-2">-- {ex.duration}</span></p>
                    <p className="mt-2 text-lg font-medium">Instrucción:</p>
                    <p>{ex.description}</p>
                    <p className="mt-1 font-bold text-sm">Objetivo: {ex.objective}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 border-t border-dashed border-gray-400 pt-8">
              <p className="text-sm text-gray-400 italic">Espacio para notas del alumno</p>
              <div className="h-40 border border-gray-200 mt-4 rounded"></div>
            </div>
          </div>
        ))}

        <div className="text-center pt-8 border-t border-black">
          <p className="font-serif italic font-bold text-xl">"Dibuja lo que ves, no lo que crees que ves."</p>
        </div>
      </div>

      <footer className="no-print mt-auto py-12 border-t border-border-soft text-center bg-white/50 flex flex-col items-center gap-4">
        <img 
          src="/logo.png" 
          alt="Gveva Logo" 
          className="w-12 h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <p className="text-ink/40 text-[10px] font-bold uppercase tracking-[0.4em]">
          Gveva Capacitaciones • Manual de Retrato y Figura Humana • 2026
        </p>
      </footer>

      {/* Modal visor de PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border-soft">
              <h3 className="font-serif text-xl">Ejercicio</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="text-ink/60 hover:text-clay transition-colors text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded-lg"
                title="Visor de PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}