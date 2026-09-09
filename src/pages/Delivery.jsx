import "../css/Delivery.css";

export default function Delivery() {
  return (
    <section className="delivery">
      <div className="delivery-grid container">
        {/* TEXTO */}
        <div className="delivery-content">
          <span className="delivery-eyebrow">Delivery</span>

          <h1>
            Em desenvolvimento
          </h1>

          <p>
            Em breve, você poderá montar sua pizza do seu jeito e fazer seu pedido diretamente pelo nosso site.
            <br />Por enquanto, peça pelo WhatsApp.
          </p>

          {/* Barra de progresso */}
          <div className="progress-wrapper">
            <div className="progress-bar">
              <span className="progress-fill" />
            </div>
            <span className="delivery-status">Em desenvolvimento</span>
          </div>

          <div className="delivery-actions">
            <Link to="/Menu" className="btn-primary">
              Ver Cardápio
            </Link>
            <a
              href="https://wa.me/5512996090978"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Pedir pelo WhatsApp
            </a>
          </div>

        </div>

        {/* ILUSTRAÇÃO */}
        <div className="delivery-illustration" aria-hidden="true">
          <div className="hanging-wire wire-left" />
          <div className="hanging-wire wire-right" />
          <div className="hanging-bolt bolt-left" />
          <div className="hanging-bolt bolt-right" />

          <div className="construction-sign">
            <span>DELIVERY</span>
            <span>EM BREVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
