import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Maria S.",
    text: "Pizza maravilhosa, massa leve e recheio muito bem servido. Atendimento excelente!",
    rating: 5,
  },
  {
    name: "João P.",
    text: "A melhor pizza da cidade! Entrega rápida e sempre quentinha.",
    rating: 5,
  },
  {
    name: "Ana C.",
    text: "Lugar aconchegante e pizzas deliciosas. Recomendo demais!",
    rating: 5,
  },
];

export default function GoogleReviews() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  // anima contador quando entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const target = 20; // total de avaliações
          const duration = 4000;
          const stepTime = Math.abs(Math.floor(duration / target));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
  }, []);

  return (
    <section className="reviews" ref={counterRef}>
      <header className="reviews-header">
        <p>⭐ 5.0 no Google</p>
        <div className="reviews-counter">
          mais de {count}.000 pedidos entregues
        </div>
      </header>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="review-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="review-stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar
                  key={i}
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>

            <p className="review-text">“{review.text}”</p>
            <span className="review-author">— {review.name}</span>
          </article>
        ))}
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Pizzaria+Rafaela"
        target="_blank"
        rel="noopener noreferrer"
        className="reviews-link"
      >
        Ver todas no Google
      </a>
    </section>
  );
}

