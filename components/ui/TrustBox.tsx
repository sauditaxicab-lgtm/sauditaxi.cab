"use client";

import { useEffect, useRef } from "react";

export function TrustBox() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If window.Trustpilot is available, it means the script has loaded.
        // We can manually trigger the widget load.
        // @ts-ignore
        if (typeof window !== "undefined" && window.Trustpilot) {
            // @ts-ignore
            window.Trustpilot.loadFromElement(ref.current, true);
        }
    }, []);

    return (
        <div className="w-full max-w-[280px] md:max-w-full">
            {/* @ts-ignore */}
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="6971b93b2eea6a13179570e8"
                data-style-height="52px"
                data-style-width="100%"
                data-token="45036274-679d-4814-bf9f-7e6802e53cec"
            >
                <a
                    href="https://www.trustpilot.com/review/sauditaxi.cab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Trustpilot
                </a>
            </div>
        </div>
    );
}
