import Producto from './Producto'
import { productos } from '../data/productos'

export default function Inicio({ agregar }) {
  return (
    <>
      <section className="hero-banner">
        <div className="container hero-content">
          <p className="eyebrow">SUBE DE NIVEL</p>
          <h1>Tu mundo gamer, <span>sin límites.</span></h1>
          <p>Encuentra hardware, periféricos y accesorios para llevar tu experiencia de juego al siguiente nivel.</p>
          <a className="btn" href="/productos">Explorar productos</a>
        </div>
        <div className="hero-art"><img src="/imagenes/Imagen1.jpg" alt="Setup gamer iluminado" /></div>
      </section>
      <section className="container section">
        <div className="section-heading"><div><p className="eyebrow">SELECCIÓN ESPECIAL</p><h2>⚡ Ofertas destacadas</h2></div><a href="/productos">Ver todos →</a></div>
        <div className="product-grid">{productos.slice(0, 3).map(producto => <Producto key={producto.id} producto={producto} onAgregar={agregar} />)}</div>
      </section>
      <section className="brands"><div className="container"><p className="eyebrow">TRABAJAMOS CON GRANDES MARCAS</p><div className="brand-list"><span>LOGITECH</span><span>ASUS</span><span>AMD</span><span>NVIDIA</span><span>MSI</span></div></div></section>
    </>
  )
}
