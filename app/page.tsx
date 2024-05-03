'use client';

import Link from 'next/link';
import Image from 'next/image';
import sendEmail from './lib/sendEmail';

export default function FormularioRegistro() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correoElectronico = (e.target as HTMLFormElement).correoElectronico.value;

    // Llamamos a la función sendEmail para enviar el correo electrónico
    sendEmail(correoElectronico);
  };

  return (
    <div className="font-[sans-serif] text-[#333] bg-white">
      <div className="min-h-screen flex fle-col items-center justify-center p-6">
        <div className="grid md:grid-cols-2 place-items-center gap-6 max-w-7xl w-full">
          <form className="md:max-w-md w-full" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-extrabold mb-10">Registro</h3>
            <div className="space-y-6">
              <div>
                <label className="text-sm mb-2 block">Nombre</label>
                <input name="nombre" type="text" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese nombre" />
              </div>
              <div>
                <label className="text-sm mb-2 block">Apellido</label>
                <input name="apellido" type="text" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese apellido" />
              </div>
              <div>
                <label className="text-sm mb-2 block">Identidad</label>
                <input
                  name="identidad"
                  type="text"
                  className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Ingrese identidad (Ej: 0101200400001)"
                />
              </div>
              <div> <label className="text-sm mb-2 block">Fecha de Nacimiento</label> <input name="fechaNacimiento" type="date" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese fecha de nacimiento" /> </div>
              <div>
                <label className="text-sm mb-2 block">Correo Electrónico</label>
                <input name="correoElectronico" type="email" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="ejemplo@correo.com" />
              </div>
              <div>
                <label className="text-sm mb-2 block">Foto de Perfil</label>
                <input name="fotoPerfil" type="file" accept="image/*" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" />
              </div>
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Acepto los <Link href="#" className="text-blue-500 font-semibold hover:underline ml-1">Términos y Condiciones</Link>
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="py-4 px-6 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                Crear cuenta
              </button>
            </div>
            <p className="text-sm mt-6">¿Ya tienes una cuenta? <Link href="#" className="text-blue-500 font-semibold hover:underline ml-1">Inicia sesión aquí</Link></p>
          </form>
          <div className="items-center max-md:mt-10">
            <Image src="/Spaceflight.jpeg" alt="Foto de Perfil" width={1280} height={720} priority={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
