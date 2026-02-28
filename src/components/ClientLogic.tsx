'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLogic() {
    const pathname = usePathname();

    useEffect(() => {
        // Smooth scroll is in CSS, this handles the interactions

        /** Navbar compact */
        const topbar = document.getElementById("topbar");
        let lastY = 0;
        const scrollListener = () => {
            const y = window.scrollY || 0;
            if (topbar) {
                if (y > 18) topbar.classList.add("is-compact");
                else topbar.classList.remove("is-compact");
            }
            lastY = y;
        };
        window.addEventListener("scroll", scrollListener, { passive: true });

        /** Parallax hero (glow + image) */
        function clamp(n: number, a: number, b: number) { return Math.max(a, Math.min(b, n)); }

        function parallaxTick() {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduce) return;

            const shell = document.querySelector(".heroShell");
            const heroGlow = document.getElementById("heroGlow");
            const heroImg = document.getElementById("heroImg");

            if (!shell) return;
            // Removed strict checks for heroGlow and heroImg since they might be removed/altered

            const r = shell.getBoundingClientRect();
            const vh = window.innerHeight || 1;

            // progress: -1..1 around viewport center
            const center = r.top + r.height / 2;
            const t = (center - vh / 2) / (vh / 2);
            const p = clamp(t, -1.2, 1.2);

            // glow slight move, image slight opposite move
            if (heroGlow) heroGlow.style.transform = `translate3d(${p * -10}px, ${p * 18}px, 0)`;
            if (heroImg) heroImg.style.transform = `translate3d(0, ${p * -10}px, 0) scale(1.08)`;
        }

        const parallaxListener = () => requestAnimationFrame(parallaxTick);
        window.addEventListener("scroll", parallaxListener, { passive: true });
        window.addEventListener("resize", parallaxListener);
        requestAnimationFrame(parallaxTick);

        /** Reveal on scroll */
        const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add("is-in");
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => io.observe(el));

        /** Button ripple micro-interaction */
        const clickListener = (ev: MouseEvent) => {
            const target = ev.target as HTMLElement;
            const btn = target.closest("[data-ripple]") as HTMLElement;
            if (!btn) return;
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduce) return;

            const rect = btn.getBoundingClientRect();
            const x = ev.clientX - rect.left;
            const y = ev.clientY - rect.top;

            const s = document.createElement("span");
            s.className = "ripple";
            s.style.left = x + "px";
            s.style.top = y + "px";
            btn.appendChild(s);
            s.addEventListener("animationend", () => s.remove());
        };
        document.addEventListener("click", clickListener);

        /** Dropdown Click Logic (Mobile/Accessibility) */
        const dropdowns = document.querySelectorAll('.dropdown');
        const handleDropdownClick = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            const dd = btn.closest('.dropdown');
            if (dd) {
                e.preventDefault();
                dd.classList.toggle('is-open');
            }
        };

        dropdowns.forEach(dd => {
            const toggleBtn = dd.querySelector('a');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', handleDropdownClick);
            }
        });

        const closeDropdownsOnClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.dropdown')) {
                dropdowns.forEach(dd => dd.classList.remove('is-open'));
            }
        };
        document.addEventListener('click', closeDropdownsOnClickOutside);

        // Force a scroll event to trigger compact navbar and reveals immediately
        setTimeout(() => window.dispatchEvent(new Event("scroll")), 100);

        return () => {
            window.removeEventListener("scroll", scrollListener);
            window.removeEventListener("scroll", parallaxListener);
            window.removeEventListener("resize", parallaxListener);
            document.removeEventListener("click", clickListener);
            document.removeEventListener("click", closeDropdownsOnClickOutside);
            dropdowns.forEach(dd => {
                const toggleBtn = dd.querySelector('a');
                if (toggleBtn) {
                    toggleBtn.removeEventListener('click', handleDropdownClick);
                }
            });
            io.disconnect();
        };
    }, [pathname]);

    return null;
}
