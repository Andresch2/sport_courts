import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center"> {/* Contenedor principal con alineación central del contenido */}
      <section className="relative h-64 bg-blue-500 flex items-center justify-center">
        {/* Sección del banner con una imagen de fondo */}
        <Image 
          src="/images/sports-banner.jpg" 
          alt="Banner deportes" 
          layout="fill" 
          objectFit="cover"
          className="opacity-80" // La imagen cubre todo el contenedor con una ligera opacidad.
        />
        <h1 className="text-4xl font-bold text-white z-10">Reserve Your Sports Court</h1>
        {/* Título sobre el banner */}
      </section>
      
      <section className="my-8">
        {/* Sección para mostrar deportes disponibles */}
        <h2 className="text-3xl font-bold mb-4">Which sport would you like to reserve?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {/* Usamos un grid para mostrar las opciones de deportes de forma responsive */}
 
          <div className="bg-white shadow-lg rounded-lg p-4">
            {/* Tarjeta de Fútbol */}
            <Image src="/images/futbol.jpg" alt="Fútbol" width={500} height={300} className="rounded-lg" />
            <h3 className="text-2xl font-bold my-2">Football</h3>
            <p>Reserve a football field.</p>
            <Link href="/reserva?deporte=Football" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Reserve Now {/* Botón para reservar */}
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src="/images/tenis.jpg" alt="Tenis" width={500} height={300} className="rounded-lg" />
            <h3 className="text-2xl font-bold my-2">Tennis</h3>
            <p>Find the perfect tennis court for your next match.</p>
            <Link href="/reserva?deporte=Tennis" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Reserve Now
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src="/images/baloncesto.jpg" alt="Baloncesto" width={500} height={300} className="rounded-lg" />
            <h3 className="text-2xl font-bold my-2">Basketball</h3>
            <p>Play on one of our equipped basketball courts.</p>
            <Link href="/reserva?deporte=Basketball" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>

      <section className="my-12 bg-blue-500 text-white py-8">
        {/* Sección para realizar una reserva rápida */}
        <h2 className="text-3xl font-bold mb-4">Quick Reservation</h2>
        <p className="mb-4">Select your favorite sport and reserve in just a few clicks.</p>
        <Link href="/reserva" className="bg-white text-blue-500 py-2 px-6 rounded-lg font-bold hover:bg-gray-200">
          Reserve Now
        </Link>
      </section>
    </div>
  );
}