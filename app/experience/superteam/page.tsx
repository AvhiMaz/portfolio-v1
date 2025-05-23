"use client";

import { Slide } from "@/components/animations/Slide";
import Particles from "@/components/particle";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Slide delay={0.5}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        <section className="relative z-10">
          <div className="prose prose-neutral dark:prose-invert">
            <p className="text-2xl font-medium tracking-tight">
              superteam ~ member ~ grant recipient (2x)
            </p>

            <div>
              <p>
                got the opportunity to become a Superteam member and 2x grant
                recipient. <br /> I’ve had the opportunity to work on innovative
                projects in the Solana ecosystem, receiving a total of{" "}
                <span className="inline-block blur-sm">$X,XXX</span> in grants
                for my contributions.
                <br />
              </p>
              <div className="h-50 lg:h-[365px]">
                {!showVideo ? (
                  <Skeleton className="h-44 lg:h-[380px] lg:w-[640px]" />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    width="720"
                    height="240"
                    preload="none"
                    className="rounded"
                  >
                    <source src="/projects/blink-arena.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              <p>
                1st grant: Superteam x Dialect Blinks Received support from
                Superteam x Dialect Blinks to build Blink Arena: a platform
                where user can either host or join gaming tournament via solana
                blinks. ~{" "}
                <Link
                  className=""
                  href="https://www.avhidotsol.xyz/proof-of-work/blink-arena"
                >
                  read more here
                </Link>
                <br />
              </p>

              <div className="h-50 lg:h-[365px]">
                {!showVideo ? (
                  <Skeleton className="h-44 lg:h-[380px] lg:w-[640px]" />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    width="720"
                    height="240"
                    preload="none"
                    className="rounded"
                  >
                    <source src="/projects/nestfolio.mp4" type="video/mp4" />
                  </video>
                )}
              </div>

              <p>
                2nd grant: Solana Foundation & CoinDCX Secured a second grant
                from Solana Foundation & CoinDCX for Nestfolio: an ai-powered
                dao governance. ~{" "}
                <Link
                  className=""
                  href="https://www.avhidotsol.xyz/proof-of-work/nestfolio"
                >
                  read more here
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
}
