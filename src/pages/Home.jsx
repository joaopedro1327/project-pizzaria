import "../css/Home.css";
import {
  FaUtensils,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import pizzaHotRoll from "../assets/pizza-hotroll.png";

// ícone customizado de caixa de pizza (não existe pronto nas libs de ícones usadas no projeto)
function PizzaBoxIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7 L12 3 L21 7 L12 11 Z" />
      <path d="M3 7 V17 L12 21 L21 17 V7" />
      <path d="M12 11 V21" />
      <path d="M7.2 12.6 L9.5 13.6" />
      <circle cx="10.4" cy="14.1" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

// mesma regra de horário usada no StoreStatus do header: quarta a domingo, 19h às 23h
const WEEK_SCHEDULE = [
  { dayIndex: 1, label: "Segunda", open: false },
  { dayIndex: 2, label: "Terça", open: false },
  { dayIndex: 3, label: "Quarta", open: true },
  { dayIndex: 4, label: "Quinta", open: true },
  { dayIndex: 5, label: "Sexta", open: true },
  { dayIndex: 6, label: "Sábado", open: true },
  { dayIndex: 0, label: "Domingo", open: true },
];

export default function Home() {
  const todayIndex = new Date().getDay();

  const now = new Date();
  const hour = now.getHours();
  const todaySchedule = WEEK_SCHEDULE.find((d) => d.dayIndex === todayIndex);
  const isOpenNow = todaySchedule?.open && hour >= 19 && hour < 23;

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-content">
            <span className="hero-badge">⭐5/5 avaliações no Google</span>

            <h1>
              Pizzaria Rafaela
            </h1>

            <span className="hero-underline" aria-hidden="true"></span>

            <p>
              Experimente o sabor da nossa pizza
              <br/>
              Venha até o nosso salão ou peça pelo delivery
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <FaUtensils />
                <span>Salão</span>
              </div>
              <div className="hero-feature">
                <PizzaBoxIcon />
                <span>Retirada no local</span>
              </div>
              <div className="hero-feature">
                <FaMotorcycle />
                <span>Delivery</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="/Menu" className="btn-primary">
                Ver Cardápio
              </a>

              <a
                href="https://wa.me/5512996090978"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Pedidos no WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={pizzaHotRoll} alt="Pizza artesanal da Pizzaria Rafaela" />
          </div>
        </div>
      </section>

      {/* ================= LOCALIZAÇÃO ================= */}
      <section className="location-premium container">
        <header className="location-header-elegant">
          <span className="location-eyebrow-accent">Onde estamos</span>
          <h2>Seu lugar para uma boa pizza</h2>
        </header>

        <div className="location-premium-grid">
          {/* MAPA */}
          <div className="map-frame-premium">
            <iframe
              title="Mapa Pizzaria Rafaela"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.+Min.+Nelson+Hungria,+62+-+Centro,+Santo+Ant%C3%B4nio+do+Pinhal+-+SP,+12450-000&z=17&output=embed"
            />
            <div className="map-pill-premium">
              <FaMapMarkerAlt />
              <span>Centro, Santo Antônio do Pinhal</span>
            </div>
          </div>

          {/* CARD GLASS */}
          <div className="detail-card-premium">
            <div className="status-row-premium">
              <span className={`status-dot-premium ${isOpenNow ? "open" : "closed"}`} />
              <span className={`status-text-premium ${isOpenNow ? "open" : "closed"}`}>
                {isOpenNow ? "Aberto agora" : "Fechado agora"}
              </span>
            </div>

            <div className="accent-divider" />

            <div className="premium-block">
              <div className="premium-block-title">
                <FaRegClock />
                <h4>Horário de Funcionamento</h4>
              </div>
              <ul className="hours-premium">
                {WEEK_SCHEDULE.map((day) => (
                  <li
                    key={day.dayIndex}
                    className={day.dayIndex === todayIndex ? "today" : ""}
                  >
                    <span className="hours-premium-day">{day.label}</span>
                    <span
                      className={`hours-premium-status ${day.open ? "open" : "closed"}`}
                    >
                      {day.open ? "19h às 23h" : "Fechado"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
