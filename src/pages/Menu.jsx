import "../css/Menu.css";
import { useState, useEffect, useRef } from "react";
import tamanhosBanner from "../assets/tamanhos-banner.png";

const tabs = [
  { id: "salgadas", label: "Pizzas Salgadas" },
  { id: "doces", label: "Pizzas Doces" },
  { id: "bebidas", label: "Bebidas" },
  { id: "bomboniere", label: "Bomboniere" }
];

const allSalgadas = [
  {
    nome: "Abobrinha",
    ingredientes: "molho, mussarela, abobrinha fatiada, parmesão e alho frito",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null
  },
  {
    nome: "Alho",
    ingredientes: "molho, mussarela e alho frito",
    precoGrande: 62,
    precoBroto: 37.0,
    aviso: null,
  },
  {
    nome: "Atum",
    ingredientes: "molho, mussarela, atum e cebola",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Atum Especial",
    ingredientes: "molho, catupiry, atum, tomate e cebola",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Bacon",
    ingredientes: "molho, mussarela e bacon",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Bauru",
    ingredientes: "molho, mussarela, presunto e tomate",
    precoGrande: 65,
    precoBroto: 39.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Brócolis",
    ingredientes: "molho, mussarela, brócolis, catupiry, bacon e alho frito",
    precoGrande: 71,
    precoBroto: 43.0
  },
  {
    nome: "Calabresa",
    ingredientes: "molho, mussarela, calabresa e cebola",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Calabresa Barbecue",
    ingredientes: "molho, mussarela, calabresa, molho barbecue e cebola",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Calabresa Especial",
    ingredientes: "molho, mussarela, calabresa e catupiry",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Champignon",
    ingredientes: "molho, mussarela, champignon e parmesão",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: "Vegetariano"
  },
  {
    nome: "Da Bahia",
    ingredientes: "molho, mussarela, calabresa, tomate, cebola e pimenta calabresa",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: "Apimentada"
  },
  {
    nome: "Da Rafaela",
    ingredientes: "molho, frango desfiado, catupiry, bacon e alho frito",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Da Vó Maria",
    ingredientes: "molho, mussarela, frango desfiado, milho, alho frito e cebola",
    precoGrande: 69,
    precoBroto: 41,
    aviso: null,
    badge: null
  },
  {
    nome: "Da Vó Vanda",
    ingredientes: "molho, mussarela, abobrinha fatiada, catupiry, alho, bacon e cebolinha",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Do Henrique",
    ingredientes: "molho, mussarela, milho, catupiry e bacon",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
   {
    nome: "Do Murilo",
    ingredientes: "molho, mussarela, parmesão, bacon e alho frito",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Estilo Hot Roll",
    ingredientes: "atum, cream cheese, tarê e cebolinha fresca picada",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: "novidade",
    badge: null
  },
  {
    nome: "Frango Catupiry",
    ingredientes: "molho, mussarela, frango desfiado e catupiry",
    precoGrande: 71,
    precoBroto: 43.0,
    badge: null
  },
  {
    nome: "Frango c/ Calabresa",
    ingredientes: "molho, mussarela, frango desfiado, calabresa e catupiry",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Frango c/ Cheddar",
    ingredientes: "molho, mussarela, frango desfiado e cheddar",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Frango c/ Milho",
    ingredientes: "molho, mussarela, frango desfiado, catupiry e milho",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Frango c/ Palmito",
    ingredientes: "molho, mussarela, frango desfiado, catupiry e palmito",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Lombo",
    ingredientes: "molho, mussarela, lombo canadense e cebola",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Lombo c/ Cheddar",
    ingredientes: "molho, mussarela, lombo canadense e cheddar",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Lorena",
    ingredientes: "molho, mussarela, champignon, lombo, catupiry e parmesão",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Marguerita",
    ingredientes: "molho, mussarela, parmesão, tomate e manjericão",
    precoGrande: 65,
    precoBroto: 39.0
  },
  {
    nome: "Mussarela",
    ingredientes: "molho, mussarela e tomate",
    precoGrande: 62,
    precoBroto: 37
  },
  {
    nome: "Napolitana",
    ingredientes: "molho, mussarela, tomate e parmesão",
    precoGrande: 63,
    precoBroto: 37,
    aviso: null
  },
  {
    nome: "Palmito",
    ingredientes: "molho, mussarela, palmito e parmesão",
    precoGrande: 71,
    precoBroto: 43.0
  },
  {
    nome: "Palmito c/ Catupiry",
    ingredientes: "molho, mussarela, palmito e catupiry",
    precoGrande: 72,
    precoBroto: 43.0
  },
  {
    nome: "Peito de Peru",
    ingredientes: "molho, mussarela, peito de peru ralado e tomate",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Peito de Peru c/ Catupiry",
    ingredientes: "molho, mussarela, peito de peru ralado e catupiry",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Pepperoni",
    ingredientes: "molho, mussarela e pepperoni",
    precoGrande: 75,
    precoBroto: 45.0,
    aviso: null,
    badge: "novo no cardápio"
  },
  {
    nome: "Portuguesa",
    ingredientes: "molho, mussarela, presunto, ovos e cebola",
    precoGrande: 70,
    precoBroto: 42.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Portuguesa Especial",
    ingredientes: "molho, mussarela, peito de peru ralado, ovos, palmito e cebola",
    precoGrande: 75,
    precoBroto: 45.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Ravi",
    ingredientes: "molho, mussarela, peito de peru ralado, catupiry, parmesão e cereja em calda",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Santa Cecília",
    ingredientes: "molho, mussarela, presunto, ovos e catupiry",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "Seleta",
    ingredientes: "molho, mussarela, champignon, palmito, brócolis, cebola e tomate",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: "Vegetariano"
  },
  {
    nome: "Tio Dimas",
    ingredientes: "molho, mussarela, presunto, ovos e bacon",
    precoGrande: 71,
    precoBroto: 43.0,
    aviso: null,
    badge: null
  },
  {
    nome: "3 Irmãos",
    ingredientes: "molho, mussarela, peito de peru ralado, cheddar, catupiry e parmesão",
    precoGrande: 73,
    precoBroto: 44.0,
    aviso: null,
    badge: null
  },
  {
    nome: "4 Queijos",
    ingredientes: "molho, mussarela, gorgonzola, catupiry e parmesão",
    precoGrande: 71,
    precoBroto: 43.0
  },
  {
    nome: "5 Queijos",
    ingredientes: "molho, mussarela, gorgonzola, catupiry, cheddar e parmesão",
    precoGrande: 73,
    precoBroto: 44.0
  },
  {
    nome: "6 Queijos",
    ingredientes: "molho, mussarela, gorgonzola, catupiry, cheddar, cream cheese e parmesão",
    precoGrande: 75,
    precoBroto: 45.0
  }
];

const allDoces = [
  {
    nome: "Brigadeiro",
    ingredientes: "Brigadeiro e granulado",
    precoGrande: 62,
    precoBroto: 37
  },
  {
    nome: "Churros",
    ingredientes: "Cream cheese, doce de leite e canela com açúcar",
    precoGrande: 70,
    precoBroto: 42.0,
  },
  {
    nome: "Dinho e Lina (Romeu e Julieta)",
    ingredientes: "Goiabada e catupiry",
    precoGrande: 60,
    precoBroto: 36.0,
  },
  {
    nome: "Floresta Negra",
    ingredientes: "Ganache de chocolate e cerejas em calda",
    precoGrande: 64,
    precoBroto: 39,
  },
  {
    nome: "Nutella",
    ingredientes: "Nutella e castanhas de caju",
    precoGrande: 62,
    precoBroto: 37,
  },
  {
    nome: "Nutella c/ Sonho de Valsa",
    ingredientes: "Nutella e Sonho de Valsa",
    precoGrande: 64,
    precoBroto: 39,
  },
  {
    nome: "Ouro Branco",
    ingredientes: "Ganache de chocolate branco e Ouro Branco",
    precoGrande: 62,
    precoBroto: 37,
  },
  {
    nome: "Sonho de Valsa",
    ingredientes: "Ganache de chocolate e Sonho de Valsa",
    precoGrande: 64,
    precoBroto: 39,
  },
];

const bebidas = [
  { nome: "Coca-Cola 2L", preco: 15.0, img: "https://fortatacadista.vteximg.com.br/arquivos/ids/299392-1000-1000/2301822_7894900027013_BEB-REFRIG.COCA-COLA-2L-PET..jpg?v=637764859239570000" },
  { nome: "Guaraná 2L", preco: 15.0, img: "https://zonasul.vtexassets.com/arquivos/ids/3559112-800-450?v=638561769723000000&width=800&height=450&aspect=true" },
  { nome: "Chopp de vinho 600ml", preco: 20.0, img: "https://www.confianca.com.br/ccstore/v1/images/?source=/file/v2108042989963007678/products/1631586.1.jpg&height=940&width=940" },
  { nome: "Heineken 600ml", preco: 18.0, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/193526100/7941234_1.jpg?v=638864688650200000" },
  { nome: "Água mineral 500ml", preco: 3.0, img: "https://cdn.awsli.com.br/800x800/1957/1957771/produto/1321019278ae373d6f1.jpg" },
  { nome: "Água com gás 500ml", preco: 4.0, img: "https://www.aguapassaquatro.com.br/site/img/produtos-agua-p4/detalhes/img-garrafa-com-gas-510ml.jpg" },
  { nome: "Coca-Cola zero 2L", preco: 15.0, img: "https://carrefourbr.vtexassets.com/arquivos/ids/182933017-848-848/image-0.jpg" },
  { nome: "Coca-Cola 600ml", preco: 8.0, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/18900724/coca-cola-600ml-1.jpg?v=637590176325700000" },
  { nome: "Coca-Cola zero 600ml", preco: 8.0, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vOjr2Ry11gbJiju97A_nNkoUtA5vCIAAnEwsQtkRWXLoj0vQ9Vzd3n_Ua8WfBYjSZXI&usqp=CAU" },
  { nome: "H2O limão 500ml", preco: 8.0, img: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/23738/medium/refrigerante-h2oh-limao-500ml_70378.png" },
  { nome: "H2O limoneto 500ml", preco: 8.0, img: "https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/300x300/9df78eab33525d08d6e5fb8d27136e95/h/2/h20h_500_ml.jpg" },
  { nome: "Guaraná 1L", preco: 10.0, img: "https://cdn.awsli.com.br/2610/2610989/produto/233534084/guarana-antarctica-pet-original-1l-ye8rcuexmh.png" },
  { nome: "Original 600ml", preco: 15.0, img: "https://cdn.formulaexpress.com.br/img/p/3/7/37.jpg" },
  { nome: "Coca-Cola lata", preco: 6.0, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/119765719/coca-cola-lata-350-ml-1.jpg?v=638224488171270000" },
  { nome: "Guaraná lata", preco: 6.0, img: "https://carrefourbrfood.vtexassets.com/arquivos/ids/8969235/refrigerante-guarana-antarctica-350ml-1.jpg?v=637364778200030000" }
];

const bomboniere = [
  { nome: "Bombom sonho de valsa", preco: 2.5, img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/dijosdoces/media/uploads/produtos/foto/vrfadymx/file.jpg" },
  { nome: "Bombom ouro branco", preco: 2.5, img: "https://www.hpplasticos.com.br/img/products/chocolate-lacta-bombom-ouro-branco-lacta_1_650.webp" },
  { nome: "Alfajor caseiro", preco: 10, img: "https://i0.wp.com/paraisodacozinha.com.br/wp-content/uploads/alfajor.jpg?resize=450%2C300" },
];

const formatPrice = (value) => `R$ ${value.toFixed(2).replace(".", ",")}`;

export default function Menu() {
  const [activeTab, setActiveTab] = useState("salgadas");
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);
  const itemsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  const getItems = () => {
    switch (activeTab) {
      case "salgadas": return allSalgadas;
      case "doces": return allDoces;
      case "bebidas": return bebidas;
      case "bomboniere": return bomboniere;
      default: return [];
    }
  };

  const items = getItems();
  const isPizza = activeTab === "salgadas" || activeTab === "doces";

  // Se for salgadas ou doces, aplicar paginação
  const pagedItems = isPizza
    ? items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : items;

  const totalPages = isPizza ? Math.ceil(items.length / itemsPerPage) : 1;

  return (
    <section className="menu-section" ref={topRef}>
      <div className="menu-container">
        {/* CABEÇALHO DA SEÇÃO */}
        <header className="menu-header">
          <h1>Nosso Cardápio</h1>
        </header>

        {/* BANNER DE TAMANHOS */}
        <img
          src={tamanhosBanner}
          alt="Tamanhos: Brotinho 4 pedaços, Grande 8 pedaços. Pizzas com 2 sabores será cobrado o valor da maior."
          className="sizes-banner"
        />

        {/* ABAS */}
        <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {isPizza && (
          <p className="price-legend">grande / broto</p>
        )}

        {isPizza && (
          <ul className="menu-list">
            {pagedItems.map((item) => {
              const key = `${activeTab}-${item.nome}`;
              const hasBroto = item.precoGrande && item.precoBroto;

              return (
                <li key={key} className="menu-item fade-in">
                  <div className="item-left">
                    <span className="item-name">
                      {item.nome}
                      {item.aviso && <span className="item-badge red">{item.aviso}</span>}
                      {item.badge && (
                        <span className={`item-badge ${item.badge === "Vegetariano" ? "green" : "red"}`}>
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.ingredientes && (
                      <span className="item-ingredients">{item.ingredientes}</span>
                    )}
                  </div>

                  <div className="item-right">
                    {hasBroto ? (
                      <span className="item-price">
                        R$ {Math.round(item.precoGrande)}
                        <span className="price-divider">|</span>
                        {Math.round(item.precoBroto)}
                      </span>
                    ) : (
                      <span className="item-price">R$ {Math.round(item.preco)}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {!isPizza && (
          <div className="compact-grid">
            {pagedItems.map((item, idx) => (
              <div key={idx} className="compact-card fade-in">
                {item.img && (
                  <div className="compact-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.nome}
                      className="compact-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="compact-info">
                  <span className="compact-name">{item.nome}</span>
                  <span className="compact-price">{formatPrice(item.preco)}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && isPizza && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
                aria-label={`Página ${i + 1}`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
