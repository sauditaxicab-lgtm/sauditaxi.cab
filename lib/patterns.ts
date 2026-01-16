/* 
 * Carbon Fibre Pattern
 * Self-hosted version to eliminate external critical request
 * Original source: transparenttextures.com
 * 
 * This is a base64-encoded data URI of the carbon fibre pattern
 * Eliminates external HTTP request and reduces critical chain
 */

export const carbonFibrePattern = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAKklEQVQYV2NkYGD4z0AEYBxVSH8T6K+J06dPM546dYpoE0ampqYmjioEAF2/Fl93lIbWAAAAAElFTkSuQmCC";

/* 
 * Usage:
 * Instead of: bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]
 * Use: bg-[url(${carbonFibrePattern})]
 * 
 * Or create a Tailwind class:
 * .carbon-texture { background-image: url(data:image/png;base64,...); }
 */
