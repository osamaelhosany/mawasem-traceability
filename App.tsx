import React, { useEffect, useState } from "react";
import Admin, { title as AdminTitle } from "./pages/Admin";
import HomeIM, { title as HomeIMTitle } from "./pages/HomeIM";
import HomeQM, { title as HomeQMTitle } from "./pages/HomeQM";
import Lot, { title as LotTitle } from "./pages/Lot";
import LotBatch, { title as LotBatchTitle } from "./pages/LotBatch";
import LotBlend, { title as LotBlendTitle } from "./pages/LotBlend";
import LotFinished, { title as LotFinishedTitle } from "./pages/LotFinished";
import Production, { title as ProductionTitle } from "./pages/Production";
import Receive, { title as ReceiveTitle } from "./pages/Receive";
import Reports, { title as ReportsTitle } from "./pages/Reports";
import Shipments, { title as ShipmentsTitle } from "./pages/Shipments";
import Stock, { title as StockTitle } from "./pages/Stock";
import Supplier, { title as SupplierTitle } from "./pages/Supplier";
import Trace, { title as TraceTitle } from "./pages/Trace";
import TraceReport, { title as TraceReportTitle } from "./pages/TraceReport";

const PAGES: Record<string, { C: any; title: string }> = {
  Admin: { C: Admin, title: AdminTitle },
  HomeIM: { C: HomeIM, title: HomeIMTitle },
  HomeQM: { C: HomeQM, title: HomeQMTitle },
  Lot: { C: Lot, title: LotTitle },
  LotBatch: { C: LotBatch, title: LotBatchTitle },
  LotBlend: { C: LotBlend, title: LotBlendTitle },
  LotFinished: { C: LotFinished, title: LotFinishedTitle },
  Production: { C: Production, title: ProductionTitle },
  Receive: { C: Receive, title: ReceiveTitle },
  Reports: { C: Reports, title: ReportsTitle },
  Shipments: { C: Shipments, title: ShipmentsTitle },
  Stock: { C: Stock, title: StockTitle },
  Supplier: { C: Supplier, title: SupplierTitle },
  Trace: { C: Trace, title: TraceTitle },
  TraceReport: { C: TraceReport, title: TraceReportTitle },
};
const DEFAULT = "HomeIM";
const current = () => {
  const k = (window.location.hash || "").replace(/^#\/?/, "").split(/[?#]/)[0];
  return PAGES[k] ? k : DEFAULT;
};

export default function App() {
  const [page, setPage] = useState(current());
  useEffect(() => {
    const on = () => { setPage(current()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const P = PAGES[page];
  useEffect(() => { document.title = P.title + " · Mawasem"; }, [P]);
  return <P.C key={page} />;
}
