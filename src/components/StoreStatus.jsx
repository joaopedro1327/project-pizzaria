// StoreStatus.jsx
import { useEffect, useState } from "react";
import "../css/StoreStatus.css";

// ---- Horário de funcionamento: quarta a domingo, 19h às 23h ----
const OPEN_HOUR = 19;
const CLOSE_HOUR = 23;
// getDay(): 0=domingo, 1=segunda, 2=terça, 3=quarta, 4=quinta, 5=sexta, 6=sábado
const OPEN_DAYS = [3, 4, 5, 6, 0]; // quarta, quinta, sexta, sábado, domingo
const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

function getStoreStatus(now = new Date()) {
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpenDay = OPEN_DAYS.includes(day);

  // está aberto agora
  if (isOpenDay && hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    return { open: true, message: "Encerramos às 23h" };
  }

  // hoje é dia de funcionamento, mas ainda não abriu
  if (isOpenDay && hour < OPEN_HOUR) {
    return { open: false, message: "Abre hoje às 19h" };
  }

  // fechado — procura o próximo dia de funcionamento
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    if (OPEN_DAYS.includes(nextDay)) {
      const label = i === 1 ? "amanhã" : DAY_NAMES[nextDay];
      return { open: false, message: `Abrimos ${label} às 19h` };
    }
  }

  return { open: false, message: "Confira nosso horário" };
}

export default function StoreStatus() {
  const [status, setStatus] = useState(() => getStoreStatus());

  useEffect(() => {
    // recalcula a cada minuto, pra virar "Aberto"/"Fechado" sozinho sem precisar dar F5
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`store-status ${status.open ? "open" : "closed"}`}>
      <span className="store-status-dot" />
      <span className="store-status-label">{status.open ? "Aberto" : "Fechado"}</span>
      <span className="store-status-sep">·</span>
      <span className="store-status-message">{status.message}</span>
    </div>
  );
}
