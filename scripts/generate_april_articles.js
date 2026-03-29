const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadAprilArticles() {
    console.log("Starting to generate and upload 15 new articles for April 1 to April 15...");

    function mdToHtml(md) {
        let html = md
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
            .replace(/^- (.*$)/gim, '<li>$1</li>')
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

        const lines = html.split('\n');
        let inList = false;
        let inTable = false;
        let resultRows = [];

        for (let line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('|')) {
                if (!inTable) { resultRows.push('<table class="w-full border-collapse border border-white/10 my-6">'); inTable = true; }
                if (trimmed.includes('---')) continue;
                const parts = trimmed.split('|').slice(1, -1).map(p => p.trim());
                const tag = resultRows[resultRows.length - 1].includes('<thead>') || resultRows.some(r => r.includes('<table') && !r.includes('<tbody>')) ? 'th' : 'td';
                let rowHtml = '<tr class="border-b border-white/10">';
                parts.forEach(p => { rowHtml += `<${tag} class="p-4 text-left border-r border-white/10 text-white/80 font-medium">${p}</${tag}>`; });
                rowHtml += '</tr>';
                resultRows.push(rowHtml);
                continue;
            } else if (inTable) { resultRows.push('</table>'); inTable = false; }
            const isLi = trimmed.startsWith('<li>');
            if (isLi && !inList) { resultRows.push('<ul class="list-disc pl-6 space-y-3 my-6 text-white/80">'); inList = true; }
            else if (!isLi && inList && trimmed !== '') { resultRows.push('</ul>'); inList = false; }
            if (!trimmed) { if (inList) { resultRows.push('</ul>'); inList = false; } resultRows.push(''); continue; }
            
            if (trimmed.match(/^<(h1|h2|h3|ul|li|table|tr|p|br|div|a|section|blockquote)/)) { resultRows.push(trimmed); }
            else { resultRows.push(`<p class="my-6 text-white/70 leading-relaxed">${trimmed}</p>`); }
        }
        if (inList) resultRows.push('</ul>');
        if (inTable) resultRows.push('</table>');
        return resultRows.join('\n');
    }

    const infrastructureModule = (title) => `\n## Vision 2030: The Revolution of Saudi Transportation\nAs part of the **Saudi Vision 2030 initiative**, the transportation sector has seen a $100 billion investment. This article explores how these changes affect your ${title}:\n- **Smart Roads**: Deployment of AI-managed traffic flow systems on the Jeddah-Makkah corridor.\n- **The Haramain Connection**: While the high-speed rail exists, private transport remains the preferred choice for those seeking door-to-door privacy and luggage flexibility.\n- **Eco-Sectors**: We are gradually introducing hybrid SUVs into our fleet to align with the Kingdom's "Green Initiative."\n`;
    const safetyProtocolModule = (title) => `\n## Safety & Legal Compliance in 2026\nYour safety is non-negotiable. Every trip we provide adheres to the latest Saudi Public Transport Authority (TGA) regulations:\n- **Driver Certification**: All chauffeurs undergo rigorous background checks and are certified in defensive driving for desert conditions.\n- **Insurance Coverage**: Comprehensive passenger insurance is included in every booking for total peace of mind.\n- **Real-Time Monitoring**: Vehicles are equipped with GPS tracking systems and SOS buttons, monitored by our 24/7 central dispatch center.\n`;
    const howToModule = `\n## Step-by-Step Guide to a Flawless Booking\nTo ensure your Saudi travel experience is seamless, follow these easy steps:\n1. **Identify Your Needs**: Count your passengers and luggage (including Zamzam bottles).\n2. **Select Your Route**: Confirm your pickup location (Jeddah Airport, Makkah Hotel, etc.).\n3. **Contact via WhatsApp**: Share your flight details or hotel location for immediate vehicle assignment.\n4. **Monitor Your Chauffeur**: Receive live tracking and chauffeur contact details 1 hour before pickup.\n5. **Relax & Travel**: Enjoy premium amenities, Wi-Fi, and cold mineral water on board.\n`;
    const proTipModule = `\n<div class="bg-white/5 border border-luxury-gold/30 p-8 rounded-2xl my-12 relative overflow-hidden">\n    <div class="absolute top-0 right-0 bg-luxury-gold text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">Pro Tip</div>\n    <h3 class="text-luxury-gold mt-0 mb-4">Golden Hour Travel</h3>\n    <p class="text-white/80 italic leading-relaxed m-0">\n        Planning your transfer during the <strong>"Golden Hour"</strong> (typically 3:00 AM) is the best way to bypass the heavy logistical truck traffic between Jeddah and Madinah. Our chauffeurs highly recommend this window for those traveling with elderly pilgrims or young children who need undisturbed sleep.\n    </p>\n</div>\n`;

    function applyInternalLinking(content) {
        const links = [
            { keyword: "Makkah to Madinah taxi", url: "/services/intercity-taxi" },
            { keyword: "Jeddah Airport taxi", url: "/services/airport-transfers" },
            { keyword: "Umrah taxi service", url: "/services/umrah-transfers" },
            { keyword: "Ziyarat tours", url: "/services/ziyarat-tours" },
            { keyword: "family travel", url: "/services/family-travel" },
            { keyword: "VIP chauffeur", url: "/services/vip-transport" }
        ];

        let linkedContent = content;
        links.forEach(link => {
            const regex = new RegExp(`(${link.keyword})`, 'i');
            if (!linkedContent.includes(`href="${link.url}"`)) {
                linkedContent = linkedContent.replace(regex, `<a href="${link.url}" class="text-luxury-gold hover:underline font-medium">$1</a>`);
            }
        });
        return linkedContent;
    }

    const rawArticles = [
        {
            title: "Traveling from Jeddah to AlUla: The Ultimate Road Trip Guide",
            slug: "jeddah-to-alula-road-trip-guide",
            date: "2026-04-01T10:00:00Z",
            body: `AlUla, with its breathtaking desert landscapes and ancient Nabatean tombs, is rapidly becoming the crown jewel of Saudi tourism. For travelers seeking a reliable and luxurious transfer from Jeddah, our intercity transport is the perfect solution.\n\nThe journey to AlUla is a long, highly visual drive that stretches over 700 kilometers. Booking a VIP Staria or GMC Yukon ensures that everyone travels comfortably. Private luxury transfers also allow for quick stops along the beautiful coastal highway.`
        },
        {
            title: "The History of Masjid al-Haram: A Pilgrim's Reflection",
            slug: "history-masjid-al-haram-pilgrims-reflection",
            date: "2026-04-02T10:00:00Z",
            body: `Understanding the vast architectural and spiritual evolution of Al-Masjid al-Haram enhances every pilgrim's experience. From the ancient foundational walls built by Prophet Abraham (AS) and Ishmael (AS) to the modern monumental King Abdullah Expansion, the Haram tells a story of devotion.\n\nWhile inside, reflect upon the generations of Muslims who made their difficult land journeys here. Today, pilgrims have the ease of booking an Umrah taxi directly from Jeddah Airport to arrive refreshed.`
        },
        {
            title: "VIP Transport Services in Saudi Arabia: What to Expect",
            slug: "vip-transport-services-saudi-arabia",
            date: "2026-04-03T10:00:00Z",
            body: `When standard logistics don't cut it, VIP transport offers a premium edge. What does it mean to hire a VIP chauffeur for your Umrah or business travel?\n\nFirst, the vehicle is vastly upgraded—often a latest model GMC Yukon XL or luxury Mercedes. You receive complimentary high-speed Wi-Fi, premium bottled water, and an unmatched level of privacy and silent operation by our elite chauffeurs.`
        },
        {
            title: "Top 5 High-End Hotels in Madinah for a Luxurious Stay",
            slug: "top-high-end-hotels-madinah",
            date: "2026-04-04T10:00:00Z",
            body: `For those looking for comfort and proximity to Al-Masjid an-Nabawi, Madinah offers world-class hospitality. Here are the top 5 high-end hotels and the best ways to reach them:\n\n### 1. The Oberoi, Madinah\nRenowned for its unparalleled service and direct views of the Prophet's Mosque.\n\n### 2. Dar Al Taqwa Hotel\nSituated directly facing the main gates, this hotel offers supreme convenience.\n\nEnsure a stress-free arrival to these exquisite locations by relying on our reliable Jeddah Airport to Madinah transfers.`
        },
        {
            title: "A Guide to Yanbu: The Pearl of the Red Sea",
            slug: "guide-yanbu-pearl-red-sea",
            date: "2026-04-05T10:00:00Z",
            body: `Yanbu offers beautiful pristine beaches, incredible scuba diving opportunities, and a relaxed atmosphere compared to Jeddah. Located just an hour's transfer down the coast, it is an excellent weekend getaway.\n\nOur intercity taxi service frequently travels the Jeddah-Yanbu route, making it extremely easy to plan your Red Sea diving trip without worrying about navigation.`
        },
        {
            title: "How to Navigate King Abdulaziz Airport (Jeddah) Like a Pro",
            slug: "navigate-king-abdulaziz-airport-jeddah",
            date: "2026-04-06T10:00:00Z",
            body: `King Abdulaziz International Airport (KAIA) is a massive hub. The sheer scale, especially the specialized Hajj Terminal, can be intimidating.\n\nIf you have an Umrah taxi service pre-booked, our chauffeurs monitor your flight down to the minute. Once you claim your bags and exit, your private vehicle will be directly outside the terminal, eliminating the need to haggle with local airport taxis.`
        },
        {
            title: "The Spiritual Significance of Walking Between Safa and Marwah",
            slug: "spiritual-significance-safa-marwah",
            date: "2026-04-07T10:00:00Z",
            body: `The ritual of Sa'i, walking between the hills of Safa and Marwah, commemorates the desperate search for water by Hajar (AS). It is a profound test of trust in divine provision.\n\nAs pilgrims perform this physically demanding part of Umrah, taking ample rest afterward is crucial. That's why your transport back to Jeddah or Madinah should be entirely stress-free and handled by Saudi Taxi.`
        },
        {
            title: "Exploring the Caves of Makkah: Hira and Thawr",
            slug: "exploring-caves-makkah-hira-thawr",
            date: "2026-04-08T10:00:00Z",
            body: `Engaging in Ziyarat tours to the spiritually significant Jabal al-Nour (Cave of Hira) and Jabal Thawr brings the history of the Seerah to life. Both mountains require rigorous hikes, normally taking a few hours in the early morning.\n\nOur expert Ziyarat tours manage your pickup, provide you with hydration, and ensure your chauffeur is waiting to safely return you to your hotel after your hike.`
        },
        {
            title: "Cultural Etiquette When Traveling in Saudi Arabia",
            slug: "cultural-etiquette-traveling-saudi-arabia",
            date: "2026-04-09T10:00:00Z",
            body: `As Saudi Arabia opens its doors to global tourists, understanding local customs is more important than ever. From greeting locals sincerely to understanding prayer times (when many shops temporarily close), cultural etiquette paves the way for a smooth trip.\n\nRespectful dressing, particularly for women avoiding revealing attire, remains the norm. Whether booking family travel packages or a simple airport transfer, our drivers can provide great local advice.`
        },
        {
            title: "Why the GMC Yukon XL is the Best Choice for Large Families",
            slug: "why-gmc-yukon-xl-best-choice-large-families",
            date: "2026-04-10T10:00:00Z",
            body: `When transporting up to 7 passengers, plus luggage for a two-week religious vacation, standard sedans inevitably fail. The GMC Yukon XL stands tall as the definitive vehicle for long-haul Saudi travel.\n\nWith expansive third-row seating and enormous trunk space perfect for oversized luggage and protected Zamzam, it’s the most requested vehicle in our VIP chauffeur fleet.`
        },
        {
            title: "A Pilgrim's Guide to Zamzam Water",
            slug: "pilgrims-guide-zamzam-water",
            date: "2026-04-11T10:00:00Z",
            body: `The blessed water of Zamzam is deeply revered. After completing your Umrah, bringing home 5-liter sealed bottles is a priority for many families.\n\nRemember that only officially sealed bottles from the King Abdullah Zamzam Water Project are permitted on international flights. When arranging an airport transfer with us, we ensure your Zamzam water is carefully loaded and secured in the spacious trunks of our vehicles.`
        },
        {
            title: "Shopping and Dining at the Makkah Clock Royal Tower",
            slug: "shopping-dining-makkah-clock-royal-tower",
            date: "2026-04-12T10:00:00Z",
            body: `The Abraj Al-Bait Complex is not just a stunning architectural feat; it is a global shopping and culinary hotspot. Inside, pilgrims can find world-class perfume houses like Abdul Samad Al Qurashi (perfect for rich Oud) and extensive gold souqs.\n\nAfter days of shopping and worship, transferring between Makkah and your next destination (like Madinah) with all your purchases is easily managed with our high-capacity intercity taxi service.`
        },
        {
            title: "The Best Times of Day for Ziyarat Tours",
            slug: "best-times-day-ziyarat-tours",
            date: "2026-04-13T10:00:00Z",
            body: `Timing your Ziyarat tours correctly can be the difference between a crowded, exhausting trip and a deeply moving spiritual experience. The earliest hours of the morning, just after Fajr, are definitively the best.\n\nThe air is cool, and sites like Masjid Quba or Mount Uhud are significantly less crowded. By pre-booking your Ziyarat tours driver, you ensure a prompt pickup exactly at dawn.`
        },
        {
            title: "A Brief History of the Zamzam Well",
            slug: "brief-history-zamzam-well",
            date: "2026-04-14T10:00:00Z",
            body: `The Zamzam Well, miraculously springing forth in the barren valley of Makkah millennia ago, has nourished countless generations. From its initial discovery by Hajar (AS) to the modern pumping and filtering systems put in place by the Saudi government, it remains an eternal miracle.\n\nAs you collect this blessed water, trust our umrah transfer services to transport your precious cargo securely to King Abdulaziz Airport.`
        },
        {
            title: "Top Tips for Staying Healthy and Hydrated During Umrah",
            slug: "top-tips-staying-healthy-hydrated-umrah",
            date: "2026-04-15T10:00:00Z",
            body: `Performing Tawaf and Sa'i repeatedly can lead to severe dehydration if not adequately prepared. Staying healthy is paramount for completing your religious duties.\n\nAlways travel with a reusable water bottle, consume small regular sips of Zamzam, and use sunscreen on your face and arms if performing Tawaf during peak daylight. For long transit routes, our family travel vehicles arrive pre-stocked with chilled water and robust air conditioning.`
        }
    ];

    const posts = rawArticles.map((article) => {
        const introduction = `\n<div class="bg-zinc-900 border-l-4 border-luxury-gold p-10 rounded-r-3xl my-10 italic text-xl leading-relaxed shadow-2xl">\n    Understanding <strong>${article.title.split(':')[0]}</strong> is essential for a great trip. Booking a premium chauffeur service like Saudi Taxi ensures a seamless and professional transfer. Our 24/7 dispatch provides private door-to-door transportation.\n</div>\n`;
        const quickFacts = `\n<div class="bg-luxury-gold/5 border border-luxury-gold/20 p-8 rounded-3xl my-12">\n    <h3 class="text-luxury-gold mb-6 mt-0 text-2xl font-serif tracking-tight">Trip Essential Brief</h3>\n    <table class="w-full text-base">\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Core Service</td><td class="py-4 text-white">Private Chauffeur & VIP Taxi</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Wait Time</td><td class="py-4 text-white">Zero (Pre-booked)</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Fleet Options</td><td class="py-4 text-white">GMC Yukon, VIP Staria, HiAce</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Wifi & Water</td><td class="py-4 text-white">Included/Free</td></tr>\n    </table>\n</div>\n`;
        const conclusion = `\n## Conclusion: Why Professionalism Matters in Saudi Travel\nChoosing the right transport is not just about the vehicle, it is about the peace of mind that comes with professional drivers and 24/7 reliability. Prioritize safety and comfort on your journey.\n\n**Book your premium journey today and experience the gold standard of Saudi transportation.**\n`;

        const assembledContent = introduction + quickFacts + article.body + howToModule + infrastructureModule(article.title) + safetyProtocolModule(article.title) + proTipModule + conclusion;

        const descriptionText = `Saudi Taxi Guide 2026: ${article.title}. Perfect for Umrah, Airport, and Intercity trips.`;
        const excerpt = descriptionText.substring(0, 155);

        const htmlBody = mdToHtml(assembledContent);
        const finalHtmlContent = applyInternalLinking(htmlBody);

        return {
            title: article.title,
            slug: article.slug,
            content: finalHtmlContent,
            excerpt: excerpt,
            published: true,
            cover_image: '',
            created_at: article.date
        };
    });

    console.log(`Prepared ${posts.length} new posts. Attempting update (upsert)...`);

    const { data, error } = await supabase
        .from('posts')
        .upsert(posts, { onConflict: 'slug' });

    if (error) {
        console.error('Error uploading posts:', error.message);
    } else {
        console.log('Successfully uploaded 15 exact articles for April 1 to April 15 to Supabase!');
    }
}

uploadAprilArticles();
