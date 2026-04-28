import { useState, useEffect } from "react";
import logo from "../../assets/logoSoundZone.png";
import { useCartContext } from "../../contexts/CartContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useOpener } from "../../hooks/useOpener";
import { usePlaylistContext } from "../../contexts/PlaylistContext";

const Header = () => {
  // cart
  const { toggle } = useCartContext();
  // theme
  const { changeTheme, themes } = useThemeContext();
  const { toggle: switcher, close, isOpen } = useOpener();
  // playlist
  const { open } = usePlaylistContext();
  // burger menu móvil
  const [menuOpen, setMenuOpen] = useState(false);

  function closeTabAndChangeTheme(themeName) {
    changeTheme(themeName);
    close();
  }

  /* Bloquea scroll cuando el panel está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Cierra panel con Escape */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      {/* ─────────────────────────────────────────
          NAVBAR
      ───────────────────────────────────────── */}
      <nav className="flex items-center justify-between w-full h-[5em] bg-amber-300 mx-auto z-30 py-5 px-6 lg:px-20 2xl:px-0">
        {/* Logo */}
        <a href="/" onClick={closeMenu}>
          <img src={logo} alt="logo libroteca" style={{ width: "100px", height: "50px" }} />
        </a>

        {/* ── Acciones escritorio (lg+) ── */}
        <div className="hidden lg:flex gap-1">
          <div className="flex gap-4">
            {/* Dropdown Theme */}
            <div className="relative h-fit w-fit">
              <button
                className="relative text-white cursor-pointer p-2 rounded-md hover:bg-white hover:text-black"
                onClick={switcher}
              >
                Theme
              </button>
              <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out" />

              <div className={`absolute left-1/2 top-12 bg-white text-black -translate-x-1/2 ${isOpen ? "" : "hidden"}`}>
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <div className="size-28 bg-white p-2 shadow-xl overflow-y-scroll">
                  <ul className="w-full">
                    {Object.keys(themes).map((themeName) => (
                      <li
                        key={themeName}
                        className="cursor-pointer mt-2 px-2 text-white bg-red-400 dark:bg-gray-900 elegance:bg-elegance-400 rounded-md"
                        onClick={() => closeTabAndChangeTheme(themeName)}
                      >
                        {themes[themeName]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Carrito */}
            <button
              className="border-4 py-2 px-4 border-white text-white bg-amber-500 cursor-pointer rounded-full lg:rounded-3xl
                hover:text-amber-500 hover:bg-white dark:text-black dark:bg-white dark:border-gray-500
                dark:hover:text-white dark:hover:bg-gray-500 elegance:bg-elegance-500 elegance:hover:text-elegance-500"
              onClick={toggle}
            >
              <i className="bi bi-cart4" />
              <span className="hidden lg:inline"> Carrito</span>
            </button>
          </div>

          {/* Playlist */}
          <div>
            <button
              className="border-4 py-2 px-3 border-white text-white bg-amber-500 cursor-pointer rounded-3xl
                hover:text-amber-500 hover:bg-white"
              onClick={() => open()}
            >
              <span className="hidden lg:inline">View</span> Playlist
            </button>
          </div>
        </div>

        {/* ── Lado derecho móvil: carrito + burger ── */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Carrito visible en móvil */}
          <button
            className="border-4 py-2 px-3 border-white text-white bg-amber-500 cursor-pointer rounded-full
              hover:text-amber-500 hover:bg-white dark:text-black dark:bg-white dark:border-gray-500
              dark:hover:text-white dark:hover:bg-gray-500"
            onClick={toggle}
            aria-label="Carrito"
          >
            <i className="bi bi-cart4" />
          </button>

          {/* Botón Burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="border-4 border-white bg-amber-500 hover:bg-white
              transition-colors duration-200 rounded-full w-11 h-11
              flex flex-col justify-center items-center gap-[5px] group focus:outline-none"
          >
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 origin-center bg-white group-hover:bg-amber-500
                ${menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 bg-white group-hover:bg-amber-500
                ${menuOpen ? "w-0 opacity-0" : "w-3 group-hover:w-5"}`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 origin-center bg-white group-hover:bg-amber-500
                ${menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`}
            />
          </button>
        </div>
      </nav>

      {/* ─────────────────────────────────────────
          OVERLAY
      ───────────────────────────────────────── */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ─────────────────────────────────────────
          PANEL LATERAL MÓVIL
      ───────────────────────────────────────── */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-amber-300 border-l-4 border-white
          flex flex-col gap-6 px-7 pt-24 pb-10
          transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Selector de Tema */}
        <div
          style={{ transitionDelay: menuOpen ? "100ms" : "0ms" }}
          className={`transition-all duration-300 ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">Tema</p>
          <div className="flex flex-col gap-1 max-h-44 overflow-y-auto">
            {Object.keys(themes).map((themeName) => (
              <button
                key={themeName}
                onClick={() => { closeTabAndChangeTheme(themeName); closeMenu(); }}
                className="w-full text-left px-3 py-2 text-white bg-amber-500 border-2 border-white rounded-lg
                  hover:bg-white hover:text-amber-500 transition-colors duration-200 text-sm font-medium cursor-pointer
                  dark:bg-gray-900 elegance:bg-elegance-400"
              >
                {themes[themeName]}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-white/40" />

        {/* Botón Playlist */}
        <div
          style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
          className={`transition-all duration-300 ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <button
            className="w-full border-4 py-3 px-4 border-white text-white bg-amber-500 cursor-pointer rounded-3xl
              hover:text-amber-500 hover:bg-white transition-colors duration-200 font-semibold text-base"
            onClick={() => { open(); closeMenu(); }}
          >
            View Playlist
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <div
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
            className={`transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <hr className="border-white/40 mb-4" />
            <p className="text-white/50 text-xs tracking-widest uppercase text-center">
              SoundZone &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
