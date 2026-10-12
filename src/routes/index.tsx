import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Heart, ShoppingBag, X, Minus, Plus, Flame, Waves, Feather, Check, ShieldCheck, Menu, Truck, Package, Star, MessageCircleHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero from '@/assets/belt_editorial.jpg';
import detail from '@/assets/belt_detail.jpg';
import lifestyle from '@/assets/belt_lifestyle_home.jpg';
import painStanding from '@/assets/belt_lifestyle_pause.jpg';
import painBed from '@/assets/belt_lifestyle_pause2.jpg';
import truck from '@/assets/delivery_truck.jpg';
import { reviews, averageRating } from '@/lib/reviews';
import { money, productTotal, PRODUCT_PRICE_MXN } from '@/lib/product';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
 { title: 'Lunara · Cinturón térmico menstrual | $200 MXN' },
 { name: 'description', content: 'Un momento de cuidado para ti. Cinturón térmico con calor ajustable y vibración por $200 MXN.' },
 { property: 'og:title', content: 'Lunara · Cinturón térmico menstrual' },
 { property: 'og:description', content: 'Un abrazo de calor para tus días. Descubre tu cinturón térmico por $200 MXN.' },
 { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Store,
});
const faqs = [
 ['¿Qué hace el cinturón térmico?', 'Combina calor ajustable y vibración para acompañarte durante las molestias de tu periodo. Es un producto de confort y no sustituye la atención médica.'],
 ['¿Puedo ajustar el calor y la vibración?', 'Sí. La información del fabricante indica 3 niveles de temperatura, 9 intensidades de vibración y 6 modos. Consulta el manual antes de usarlo.'],
 ['¿Cómo se coloca?', 'Ajusta la correa alrededor de tu cintura, sobre una capa de ropa, siguiendo las instrucciones del fabricante.'],
 ['¿Cuánto cuesta y qué pasa con el envío?', 'El cinturón cuesta $200 MXN. Los costos de envío, zonas de entrega y plazos se confirmarán antes de habilitar la compra.'],
 ['¿Qué cuidados debo tener?', 'Empieza por el nivel de calor más bajo. No lo uses mientras duermes ni sobre piel irritada. Si el dolor es intenso o persistente, consulta a un profesional de salud.'],
];
function Store() {
 const [cart, setCart] = useState(false);
 const [quantity, setQuantity] = useState(1);
 const [menu, setMenu] = useState(false);
 const [image, setImage] = useState(detail);
 useEffect(() => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return () => observer.disconnect();
 }, []);
 useEffect(() => {
  if (!cart) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setCart(false); };
  window.addEventListener('keydown', close);
  return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', close); };
 }, [cart]);
 const buy = () => setCart(true);
 return <div className="store">
  <div className="announcement">Un poquito de calor. Mucho amor por ti. <Heart size={12}/></div>
  <header className="site-header">
   <a href="#" className="brand" aria-label="Lunara inicio">lunara<span>✳</span></a>
   <nav className="desktop-nav"><a href="#producto">Tu cinturón</a><a href="#bienestar">El ritual Lunara</a><a href="#preguntas">Preguntas frecuentes</a></nav>
   <div className="header-actions"><span className="header-note">Hecho para tus días ♡</span><Button variant="ghost" size="icon" aria-label="Abrir bolsa de compra" onClick={buy}><ShoppingBag/></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label="Abrir menú" onClick={() => setMenu(!menu)}><Menu/></Button></div>
  </header>
  {menu && <nav className="mobile-nav">{[['#producto','Tu cinturón'],['#bienestar','El ritual Lunara'],['#preguntas','Preguntas frecuentes']].map(([href,label]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}<ArrowUpRight size={16}/></a>)}</nav>}
  <main>
   <section className="editorial-hero">
    <img src={hero} alt="Cinturón térmico rosa sobre tela suave, con correa ajustable" className="hero-photo" fetchPriority="high"/>
    <div className="hero-copy"><div className="eyebrow"><span/> TU PERIODO, CON MÁS CALMA</div><h1>Cinturón térmico<br/><em>Un abrazo</em><br/><em>para tus días.</em></h1><p>Cuando tu cuerpo pide una pausa, escúchalo.<br className="desktop-break"/> Calor y masaje para acompañarte, a tu ritmo.</p><Button variant="shop" size="shop" onClick={buy}>Quiero mi Lunara <ArrowUpRight/></Button><div className="hero-price">Tu momento de cuidado por <strong>$200 MXN</strong></div></div>
    <div className="hero-stamp"><Heart size={23} strokeWidth={1}/><span>Un gesto de<br/>amor propio</span></div>
    <div className="hero-foot"><span>PEQUEÑOS RITUALES, GRANDES MOMENTOS</span><a href="#bienestar">Descubre Lunara <ArrowRight size={15}/></a></div>
   </section>
   <div className="benefit-strip"><span><Flame/> Calor a tu medida</span><span><Waves/> Masaje por vibración</span><span><Feather/> Ligero y ajustable</span><span><Heart/> Cuidado sin complicaciones</span></div>
   <section className="pain-section section-width reveal">
    <div className="pain-copy"><div className="eyebrow">¿TE SUENA FAMILIAR?</div><h2>Cuando el cólico<br/><em>no te deja seguir.</em></h2><p>Ese dolor que llega sin avisar y te obliga a detenerte. En la oficina, en casa, cuando tenías planes. Lo conocemos, y sabemos lo pesado que puede ser.</p><ul><li><span/>Te cuesta concentrarte o seguir con tu día.</li><li><span/>Solo quieres acurrucarte y que pase pronto.</li><li><span/>Buscas algo que te acompañe, sin complicarte.</li></ul><p className="pain-turn">Para esos momentos creamos Lunara: calor y vibración que te abrazan mientras te das una pausa.</p></div>
    <div className="pain-photos"><figure><img src={painStanding} alt="Mujer con molestias abdominales durante su periodo" loading="lazy"/><figcaption>A mitad del día</figcaption></figure><figure><img src={painBed} alt="Mujer sentada en su cama con dolor menstrual" loading="lazy"/><figcaption>Al despertar</figcaption></figure></div>
   </section>
   <section id="bienestar" className="intro-section reveal"><div className="eyebrow">TU BIENESTAR NO ES UN LUJO</div><h2>Esos días también<br/>pueden sentirse <em>más tuyos.</em></h2><p>No necesitas poder con todo. Regálate una pausa, una taza de té<br className="desktop-break"/> y ese calorcito que te invita a bajar el ritmo.</p><div className="intro-flower">✳</div></section>
   <section id="producto" className="product-section section-width reveal">
    <div className="product-gallery"><div className="product-main"><img src={image} alt={image === lifestyle ? "Mujer usando el cinturón térmico Lunara sentada en su cama" : "Detalle del cinturón térmico Lunara rosa"} loading="lazy"/><span className="photo-label">TU NUEVO RITUAL DE CUIDADO</span></div><div className="thumbnails">{[detail,lifestyle,hero].map((src,i) => <Button key={src} variant="photo" className={image === src ? 'selected' : ''} onClick={() => setImage(src)} aria-label={`Ver foto ${i+1}`}><img src={src} alt={i === 1 ? 'Mujer usando el cinturón Lunara en casa' : `Cinturón rosa, vista ${i+1}`}/></Button>)}<span>Los detalles hacen la diferencia.</span></div></div>
    <div className="product-copy"><div className="eyebrow">CONOCE TU LUNARA</div><h2>Calorcito que<br/><em>va contigo.</em></h2><p>Tu cinturón térmico menstrual. Un compañero suave para esos momentos en los que necesitas cuidarte un poquito más.</p><div className="product-price">{money(PRODUCT_PRICE_MXN)} <span>MXN</span></div><div className="color-selector"><span>Color: <strong>Rosa suave</strong></span><span className="pink-swatch" aria-label="Rosa suave seleccionado"><Check size={13}/></span></div><ul className="feature-list"><li><Check/> 3 niveles de calor para encontrar tu comodidad</li><li><Check/> 9 intensidades de vibración y 6 modos</li><li><Check/> Correa ajustable para acompañar tu movimiento</li><li><Check/> Pantalla digital de fácil lectura</li></ul><Button variant="shop" size="shop" className="w-full" onClick={buy}>Lo quiero en mi vida <ShoppingBag/></Button><p className="product-small"><ShieldCheck size={15}/> Precio en pesos mexicanos. Envío por confirmar.</p><p className="manufacturer-note">Características según la información del fabricante.</p></div>
   </section>
   <section className="ritual-band reveal"><div className="section-width ritual-layout"><figure className="ritual-photo"><img src={lifestyle} alt="Mujer descansando en su cama con el cinturón Lunara puesto" loading="lazy"/><figcaption>Así de fácil: póntelo y date un respiro.</figcaption></figure><div><div className="ritual-heading"><div><div className="eyebrow">BAJA EL RITMO. VUELVE A TI.</div><h2>Tu pausa, <em>en tres pasos.</em></h2></div><Heart size={44} strokeWidth={1}/></div><div className="ritual-grid">{[['01','Hazte cómoda','Tu rincón favorito, ropa suave y un momento solo para ti.'],['02','Encuentra tu calorcito','Coloca tu cinturón y ajusta el calor según el manual.'],['03','Date permiso de parar','Respira. Descansa. No tienes que hacer nada más.']].map(([n,title,text]) => <div className="ritual-item" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></div></section>
   <section className="community-section section-width reveal"><div className="eyebrow">HABLEMOS DE LO QUE SENTIMOS</div><h2>No estás sola.<br/><em>Tu bienestar importa.</em></h2><div className="community-grid">{[[Flame,'Calor que acompaña','Un momento de confort para tu abdomen.'],[Feather,'A tu propio ritmo','Una correa ajustable que se adapta a ti.'],[Heart,'Cuidarte también cuenta','Pequeños gestos para escucharte más.']].map(([Icon,title,text]) => { const C = Icon as typeof Heart; return <div className="community-item" key={String(title)}><C size={27} strokeWidth={1.4}/><h3>{String(title)}</h3><p>{String(text)}</p></div>; })}</div></section>
   <ReviewsSection/>
   <section id="envios" className="shipping-section section-width reveal"><div className="shipping-photo"><img src={truck} alt="Camioncito rosa llevando cajas de regalo con el cinturón Lunara" loading="lazy"/></div><div className="shipping-copy"><div className="eyebrow">DE NUESTRAS MANOS A TU PUERTA</div><h2>Tu Lunara viaja<br/><em>envuelta en cariño.</em></h2><p>Preparamos cada pedido con calma y cuidado, como un regalo para ti. Solo tienes que esperarlo.</p><ul><li><Package/> Empacado con cuidado para que llegue perfecto</li><li><Truck/> Te compartimos tu número de guía para seguirlo</li><li><ShieldCheck/> Costo y tiempo de envío confirmados antes de pagar</li></ul></div></section>
   <section id="preguntas" className="faq-section section-width reveal"><div><div className="eyebrow">SIN DUDAS, CON CALMA</div><h2>Quizá te estés<br/><em>preguntando…</em></h2><p>Lo que necesitas saber antes<br/>de hacer espacio para Lunara.</p></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<Plus size={18}/></summary><p>{a}</p></details>)}</div></section>
   <section className="closing-section reveal"><span className="closing-flower">✳</span><div className="eyebrow">HOY, ELÍGETE A TI</div><h2>Un poquito de calor.<br/><em>Un montón de cariño.</em></h2><p>Tu nuevo ritual empieza con un pequeño sí.</p><Button variant="shop" size="shop" onClick={buy}>Mi Lunara por $200 MXN <ArrowUpRight/></Button></section>
  </main>
  <footer className="site-footer"><div className="footer-top"><a href="#" className="brand">lunara<span>✳</span></a><span>Un abrazo de calor, un momento para ti.</span><a href="#preguntas">¿Tienes dudas? <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© 2026 Lunara · Con amor, para ti.</span><span>Producto de confort. No sustituye una consulta médica.</span></div></footer>
  <div className="mobile-buy"><div><strong>Lunara</strong><span>$200 MXN</span></div><Button variant="shop" onClick={buy}>Lo quiero <ShoppingBag/></Button></div>
  {cart && <div className="cart-overlay"><div className="cart-backdrop" onClick={() => setCart(false)}/><section className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title"><div className="cart-header"><h2 id="cart-title">Tu bolsa de cuidado</h2><Button variant="ghost" size="icon" onClick={() => setCart(false)} aria-label="Cerrar bolsa" autoFocus><X/></Button></div><div className="cart-product"><img src={detail} alt="Cinturón térmico rosa"/><div><h3>Cinturón térmico Lunara</h3><p>Rosa suave</p><strong>$200 MXN</strong><div className="quantity-control"><Button variant="ghost" size="icon" aria-label="Disminuir cantidad" disabled={quantity === 1} onClick={() => setQuantity(q => q - 1)}><Minus/></Button><span aria-live="polite">{quantity}</span><Button variant="ghost" size="icon" aria-label="Aumentar cantidad" onClick={() => setQuantity(q => q + 1)}><Plus/></Button></div></div></div><div className="cart-total"><span>Subtotal</span><strong>{money(productTotal(quantity))} MXN</strong></div><p className="cart-shipping">Envío por confirmar.</p><div className="checkout-notice"><ShieldCheck/><div><strong>La tienda está preparándose para recibirte.</strong><p>El pago en línea todavía no está habilitado. No se realizará ningún cobro.</p></div></div><Button variant="shop" size="shop" disabled className="w-full">Pago disponible próximamente</Button><Button variant="link" onClick={() => setCart(false)}>Seguir descubriendo Lunara <ArrowRight/></Button></section></div>}
 </div>;
}
function Stars({ value, size = 16 }: { value: number; size?: number }) {
 return <span className="stars" aria-label={`${value} de 5 estrellas`}>{[1,2,3,4,5].map(n => { const fill = Math.max(0, Math.min(1, value - (n - 1))); return <span key={n} className="star"><Star size={size} className="star-empty"/><span className="star-fill" style={{ width: `${fill * 100}%` }}><Star size={size}/></span></span>; })}</span>;
}
function ReviewsSection() {
 const avg = averageRating(reviews);
 return <section id="resenas" className="reviews-section section-width reveal">
  <div className="eyebrow">LO QUE DICEN DE LUNARA</div>
  {reviews.length === 0
   ? <div className="reviews-note"><MessageCircleHeart size={20}/><div><strong>Historias reales, próximamente.</strong><p>Aún no tenemos reseñas verificadas. Cuando recibas tu Lunara, nos encantará saber cómo te fue.</p></div></div>
   : <>
    <div className="reviews-summary"><strong>{avg.toFixed(1)}</strong><div><Stars value={avg} size={20}/><span>{reviews.length} {reviews.length === 1 ? 'reseña' : 'reseñas'} de compradoras</span></div></div>
    <div className="reviews-grid">{reviews.map((r, i) => <article className="review-card" key={i}><Stars value={r.rating} size={14}/><p>“{r.text}”</p><footer><strong>{r.name}</strong>{r.city && <span>{r.city}</span>}</footer></article>)}</div>
   </>}
 </section>;
}
