import React, { useState } from 'react';
import { FileText, Code2, CheckCircle2, ArrowRight, Download } from 'lucide-react';

export const BrdTddLab: React.FC = () => {
  const [docType, setDocType] = useState<'brd' | 'tdd'>('brd');
  const [customerReq, setCustomerReq] = useState<string>(
    "Our employees waste 4 hours daily manually copying invoice details into SAP. We need AI to automate entity extraction with 99% accuracy and auto-flag discrepancies."
  );

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <FileText className="w-4 h-4" />
            <span>ENTERPRISE DOCUMENTATION STUDIO</span>
          </div>
          <h3 className="text-xl font-bold text-white">BRD + TDD LAB</h3>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setDocType('brd')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${docType === 'brd' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
          >
            BUSINESS REQUIREMENT DOCUMENT (BRD)
          </button>
          <button
            onClick={() => setDocType('tdd')}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${docType === 'tdd' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
          >
            TECHNICAL DESIGN DOCUMENT (TDD)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
        
        {/* Input Customer Requirement */}
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <label className="text-xs font-mono text-cyan-400 font-bold block">
            RAW STAKEHOLDER REQUIREMENT
          </label>
          <textarea
            rows={6}
            value={customerReq}
            onChange={(e) => setCustomerReq(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* Generated Enterprise Document Output */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-emerald-400 font-bold">
              GENERATED SPECIFICATION ({docType.toUpperCase()})
            </span>
            <span className="text-slate-500">FORMAT: IEEE ENTERPRISE SPEC</span>
          </div>

          {docType === 'brd' ? (
            <div className="space-y-3 text-slate-300">
              <p><strong>1. BUSINESS OBJECTIVE:</strong> Reduce invoice processing cycle time from 4 hours to 30 seconds per document, yielding $380,000 annual operational savings.</p>
              <p><strong>2. FUNCTIONAL REQUIREMENTS:</strong> Automated PDF layout extraction, entity mapping (Vendor, Invoice ID, Line Items, Tax Total), SAP R/3 SOAP API integration.</p>
              <p><strong>3. NON-FUNCTIONAL REQUIREMENTS:</strong> Accuracy &gt;98.5%, End-to-end processing &lt;2.0s @ 95th percentile, SOC2 data privacy compliance.</p>
            </div>
          ) : (
            <div className="space-y-3 text-slate-300">
              <p><strong>1. SYSTEM ARCHITECTURE:</strong> FastAPI Gateway -&gt; Unstructured PDF Ingestion -&gt; Pydantic Schema Validator -&gt; SAP Adapter Worker Queue.</p>
              <p><strong>2. API CONTRACT:</strong> <code>POST /api/v1/invoices/parse</code> returning JSON payload matching <code>InvoiceSchema</code> V2.</p>
              <p><strong>3. FAILURE RECOVERY:</strong> Idempotent retries with exponential backoff on transient SAP HTTP 503 errors; DLQ alerting after 3 retries.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

