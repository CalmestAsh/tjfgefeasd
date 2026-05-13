import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    width: 800,
                    height: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.15,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <>
                {/* Background Gradients/Glows */}
                <div className="fixed inset-0 -z-20 bg-[var(--color-background)] overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
                    <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[120px]" />
                </div>

                {/* Particles */}
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="fixed inset-0 -z-10"
                />
            </>
        );
    }

    return (
        <div className="fixed inset-0 -z-20 bg-[var(--color-background)] overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
            <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[120px]" />
        </div>
    );
};
