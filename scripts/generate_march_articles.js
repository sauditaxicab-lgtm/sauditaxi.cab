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

async function uploadMarchArticles() {
    console.log("Starting to generate and upload 13 new articles from March 17 to March 29...");

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
            title: "Top 5 Must-Visit Ziyarat Sites in Makkah for Umrah Pilgrims",
            slug: "top-5-ziyarat-sites-makkah-umrah",
            date: "2026-03-17T10:00:00Z",
            body: `Makkah is not just the spiritual heart of Islam; it is a city deeply embedded in rich history and monumental events. For Umrah pilgrims, exploring the sacred Ziyarat sites is a deeply moving experience that completes the spiritual journey.\n\n### 1. Jabal al-Nour (The Mountain of Light)\nHome to the Cave of Hira, where Prophet Muhammad (PBUH) received the first revelations of the Quran. Visiting this mountain offers profound reflections on the origins of the Islamic faith.\n\n### 2. Jabal Thawr\nThis mountain houses the cave where the Prophet (PBUH) and Abu Bakr (RA) sought refuge during their migration (Hijrah) to Madinah. It stands as a symbol of faith and divine protection.\n\n### 3. Mount Arafat (Jabal al-Rahmah)\nKnown as the Mount of Mercy, it is the site where the Prophet delivered his Farewell Sermon. A critical site during Hajj, it remains an important reflective Ziyarat location year-round.\n\n### 4. Mina and Muzdalifah\nThough primarily active during Hajj, visiting these valley areas provides pilgrims with a deeper understanding of the grand pilgrimage's rituals and historical gravity.\n\n### 5. Jannat al-Mu'alla\nThe historical cemetery in Makkah where many of the Prophet's relatives and early companions are buried, offering a solemn space for prayers and remembrance.`
        },
        {
            title: "The Ultimate Packing List for Your 2026 Umrah Trip",
            slug: "ultimate-packing-list-umrah-2026",
            date: "2026-03-18T10:00:00Z",
            body: `Preparing for Umrah requires careful consideration of both spiritual readiness and practical necessities. To ensure your journey is smooth and comfortable, we've compiled the ultimate packing list for your 2026 pilgrimage.\n\n### Spiritual Essentials\n- **Ihram Garments**: Two pieces of unstitched white cloth for men, and comfortable, modest clothing for women.\n- **Prayer Mat (Sajjadah)**: A lightweight, foldable mat is highly recommended when praying outside the main areas.\n- **Pocket Quran & Dua Book**: Keep essential supplications close at hand.\n\n### Practical and Health Items\n- **Comfortable Walking Shoes**: You will do a lot of walking during Tawaf and Sa'i. Invest in supportive, breathable footwear.\n- **Unscented Toiletries**: Perfumed soaps and lotions are prohibited while in the state of Ihram.\n- **Basic First Aid & Medications**: Pain relievers, rehydration salts, and any personal prescriptions.\n\n### Document Checklist\n- **Passport & Visa (Nusuk App)**: Ensure your digital permits and physical documents are secure.\n- **Vaccination Certificates**: Carry proof of required immunizations for entry.`
        },
        {
            title: "Exploring Al Balad: A Historical Tour of Jeddah's Old Town",
            slug: "exploring-al-balad-historical-tour-jeddah",
            date: "2026-03-19T10:00:00Z",
            body: `Before heading to Makkah or before catching your return flight from Jeddah, devoting a few hours to Al Balad—Jeddah's historical district—is highly recommended. Recognized as a UNESCO World Heritage site, it offers a glimpse into Saudi Arabia's vibrant trading past.\n\n### The Architecture of the Hejaz\nAl Balad is famous for its uniquely designed buildings made of coral stone and wood, adorned with intricate rawashin (wooden window boxes). These structures were designed to catch the Red Sea breeze and provide natural cooling.\n\n### Key Highlights\n- **Naseef House**: A beautifully restored mansion that once hosted King Abdulaziz.\n- **Souq Al Alawi**: The heart of Old Jeddah's marketplace, perfect for buying authentic Arabian spices, dates, and textiles.\n- **Historical Mosques**: Visit ancient mosques that have stood for centuries, witnessing the passage of countless pilgrims.\n\nBooking a private chauffeur to guide you through the narrow streets and handle parking allows you to fully immerse yourself in the rich culture of Al Balad.`
        },
        {
            title: "Haramain High-Speed Railway vs. Private Taxi: Which is Better for Umrah?",
            slug: "haramain-railway-vs-private-taxi-umrah",
            date: "2026-03-20T10:00:00Z",
            body: `The introduction of the Haramain High-Speed Railway has transformed travel between Makkah and Madinah. However, for many pilgrims, private taxis remain the preferred choice. Here is a breakdown to help you decide.\n\n### Haramain High-Speed Railway\n- **Speed**: Covers the distance in roughly 2.5 hours.\n- **Pros**: Fast, modern, and air-conditioned.\n- **Cons**: Strict luggage restrictions (usually one piece per passenger), fixed schedules, and the need for secondary transport from the train station to your hotel.\n\n### Private VIP Taxi Service\n- **Convenience**: Door-to-door service directly from your hotel in Makkah to your hotel in Madinah.\n- **Luggage Capacity**: Ideal for families. An SUV like the GMC Yukon XL easily accommodates multiple large suitcases and Zamzam water bottles.\n- **Flexibility**: Travel at any time, including the recommended "Golden Hour" for avoiding traffic, and request stops for food or prayer whenever needed.\n\nFor large families or those carrying significant luggage, the private taxi offers unmatched peace of mind.`
        },
        {
            title: "A Complete Guide to Ziyarat in Madinah: Tracing Islamic History",
            slug: "complete-guide-ziyarat-madinah-islamic-history",
            date: "2026-03-21T10:00:00Z",
            body: `Madinah, the City of the Prophet (PBUH), radiates peace and tranquility. Beyond praying in Al-Masjid an-Nabawi and offering salutations at the Rawdah, engaging in a Ziyarat tour connects you deeply to the roots of Islam.\n\n### Essential Ziyarat Stops\n- **Masjid Quba**: The first mosque built in Islam. The Prophet (PBUH) promised that offering two Rakat here carries the reward of an Umrah.\n- **Mount Uhud and the Martyrs' Cemetery**: The site of the historic Battle of Uhud. It is a place of reflection on the sacrifices made by early Muslims, including Hamza (RA).\n- **Masjid al-Qiblatayn**: The mosque where the revelation to change the direction of prayer (Qibla) from Jerusalem to Makkah was received.\n- **The Seven Mosques (Al-Masjid As-Saba)**: Located at the site of the Battle of the Trench (Khandaq), representing a critical defensive triumph in Islamic history.\n\nOur Ziyarat tours offer knowledgeable drivers who ensure you visit these sites comfortably and with ample time for prayer.`
        },
        {
            title: "How to Choose the Best Transport for a Large Family Umrah Trip",
            slug: "choose-best-transport-large-family-umrah-trip",
            date: "2026-03-22T10:00:00Z",
            body: `Traveling with a large family for Umrah requires careful logistical planning, especially when transferring between airports, hotels, and the holy cities. Selecting the right vehicle ensures everyone remains comfortable and luggage is handled effortlessly.\n\n### Assessing Your Needs\nWhen choosing a vehicle, consider the total number of passengers, the amount of luggage (including strollers or wheelchairs), and the need for transporting Zamzam water on the return journey.\n\n### Recommended Fleet Options\n- **GMC Yukon XL (7-Seater)**: Offering premium VIP transport, it combines luxurious legroom with massive trunk space. Perfect for families wanting maximum comfort on the Makkah to Madinah highway.\n- **Hyundai Staria (7 to 9-Seater)**: A modern, spacious, and highly comfortable minivan that provides excellent value and smooth rides for medium-to-large families.\n- **Toyota HiAce (11-Seater)**: The ultimate choice for larger extended families or groups. It accommodates passengers comfortably while leaving unparalleled space for heavy luggage and Zamzam boxes.\n\nPre-booking the right vehicle guarantees a stress-free transit so your family can focus on their spiritual journey.`
        },
        {
            title: "Top 10 Things to Do in Taif: The City of Roses and Mountains",
            slug: "top-10-things-to-do-in-taif-city-of-roses",
            date: "2026-03-23T10:00:00Z",
            body: `Located just a short, scenic drive from Makkah, Taif offers a refreshing escape with its cooler mountain climate, rich agriculture, and deep historical roots. Here are the top experiences when visiting the City of Roses.\n\n### Highlight Experiences\n- **Taif Rose Farms**: Visit during spring (March/April) to witness the blooming of the famous Taif roses and see how luxurious rose water and perfumes are made.\n- **Al Hada Mountain and Cable Cars**: Experience the thrilling ride down the mountain from Al Hada resort, offering spectacular panoramic views of the winding roads.\n- **Shubra Palace**: Explore this historical museum reflecting stunning Hijazi architecture, once the summer residence of the Saudi Royal Family.\n- **Souq Okaz**: Although originally an ancient trading hub, the modernized cultural festival area brings pre-Islamic and early Islamic history to life.\n- **Local Cuisine**: Enjoy traditional Saleeg, a creamy rice and meat dish unique to the Taif region.\n\nBooking a round-trip intercity taxi ensures you can navigate the mountainous terrain of Taif safely and enjoyably.`
        },
        {
            title: "First-Timer’s Guide to Umrah: Step-by-Step Practical Advice",
            slug: "first-timers-guide-umrah-practical-advice",
            date: "2026-03-24T10:00:00Z",
            body: `Performing Umrah for the first time is a profound and overwhelming experience. Knowing the practical steps beforehand ensures you focus on your worship rather than logistics.\n\n### Preparation and Miqat\nBefore crossing the Miqat boundary, you must enter the state of Ihram. This involves physical purification, donning the Ihram garments, and making the formal intention (Niyyah). If arriving via Jeddah Airport, many pilgrims enter Ihram on the plane.\n\n### Tawaf and Sa'i\n- **Tawaf**: Circumambulating the Kaaba seven times counter-clockwise. Try to stay hydrated and avoid the absolute peak hours immediately following obligatory prayers.\n- **Sa'i**: Walking seven times between the hills of Safa and Marwah. The pathways are well air-conditioned, but comfortable footwear is crucial.\n\n### Concluding the Umrah\nMen conclude by shaving or trimming their hair (Halq or Taqsir), while women trim a small portion. Familiarize yourself with the Nusuk app to book your slot for the Rawdah in Madinah well in advance of your travels.`
        },
        {
            title: "Best Restaurants and Food Streets Near Masjid al-Haram in Makkah",
            slug: "best-restaurants-food-near-masjid-al-haram",
            date: "2026-03-25T10:00:00Z",
            body: `After engaging in continuous worship at Masjid al-Haram, replenishing your energy with good food is vital. Makkah offers an incredible variety of dining options catering to global palates, all within a short distance from the Haram.\n\n### Abraj Al Bait (Clock Tower) Food Court\nLocated steps from the mosque, this massive complex houses everything from international fast-food chains (like Al Baik, KFC, and McDonald's) to specialized Middle Eastern and Asian cuisines. It's the most convenient option for quick meals between prayers.\n\n### Traditional Saudi Cuisine\nFor an authentic taste of the Kingdom, visit local restaurants offering Kabsa, Mandi, and Shawarma. Ibrahim Al Khalil Street is bustling with smaller eateries offering robust, flavorful meals favored by locals.\n\n### Premium Dining\nMany of the five-star hotels surrounding the Haram (such as the Fairmont or Swissôtel) offer incredible buffet experiences featuring international spreads, perfect for a relaxed family dinner.`
        },
        {
            title: "Navigating Saudi Arabia’s Weather: Best Months for Hajj and Umrah",
            slug: "saudi-arabia-weather-best-months-hajj-umrah",
            date: "2026-03-26T10:00:00Z",
            body: `Saudi Arabia's desert climate means that temperatures can vary drastically depending on the season. Choosing the right time for your Umrah or Ziyarat tour can significantly impact your comfort.\n\n### Winter (November to February)\nThis is widely considered the best time to perform Umrah. The weather in Makkah and Madinah is mild, pleasant, and cool during the nights, making daytime Tawaf and outdoor Ziyarat very comfortable. However, expect larger crowds.\n\n### Spring and Autumn (March-April, October)\nTransitional months offer a great balance. The extreme heat has either not yet arrived or has begun to fade. This is also the ideal season to visit Taif to witness the blooming of the famous roses.\n\n### Summer (May to September)\nSummer months can see temperatures exceeding 45°C (113°F). However, the Haram is heavily air-conditioned. If traveling during these months, booking VIP transport with high-performance AC and planning outdoor activities strictly for the early morning or late evening is essential.`
        },
        {
            title: "Exploring the Dates Market in Madinah (Souq Al Tamoour)",
            slug: "exploring-dates-market-madinah-souq-al-tamoour",
            date: "2026-03-27T10:00:00Z",
            body: `No trip to Madinah is complete without visiting the Central Dates Market (Souq Al Tamoour). Located just south of Al-Masjid an-Nabawi, it is a bustling hub where the finest dates globally are traded.\n\n### Varieties to Look For\n- **Ajwa**: The most sought-after date, known for its dark color, soft texture, and significant religious importance.\n- **Safawi**: A dark, fleshy, sweet date known for its healing properties.\n- **Sukkari**: Golden, exceptionally sweet, and often described as melting in the mouth.\n- **Mabroom**: Chewy and naturally sweet, featuring a distinctive elongated shape.\n\n### Purchasing Tips\nAlways ask to taste before you buy. Stall owners are generous and expect you to try their produce. If you're buying in bulk to take home, merchants will securely box and seal the dates for air travel.`
        },
        {
            title: "Umrah with Elderly Passengers: Ensuring Safe and Comfortable Transport",
            slug: "umrah-elderly-passengers-safe-comfortable-transport",
            date: "2026-03-28T10:00:00Z",
            body: `Performing Umrah is a blessing for Muslims of all ages, but traveling with elderly family members requires special attention to comfort, mobility, and pacing. Proper logistics are the key to a safe and fulfilling experience.\n\n### Ground Transportation\nLong journeys between Jeddah, Makkah, and Madinah can be physically taxing. Hiring a private VIP chauffeur service allows for:\n- **Wheelchair Accessibility**: Vehicles like the GMC Yukon or Toyota HiAce offer ample room to stow bulky wheelchairs without disassembling them.\n- **Frequent Breaks**: Unlike public buses or trains, a private taxi can pull over at well-equipped rest stops for prayer, stretching, or restroom use whenever needed.\n- **Door-to-Door Service**: Avoid the physical strain of carrying luggage through train stations by being dropped off exactly at your hotel lobby.\n\nPlan Tawaf for cooler, less crowded hours, and always utilize the wheelchair-accessible ramps in the Haram to preserve their energy.`
        },
        {
            title: "Jeddah Corniche Guide: Relaxing by the Red Sea After Umrah",
            slug: "jeddah-corniche-guide-relaxing-red-sea-umrah",
            date: "2026-03-29T10:00:00Z",
            body: `After completing the rigorous spiritual activities of Umrah, many pilgrims choose to unwind in Jeddah before flying home. The modern Jeddah Corniche stretches for 30 kilometers along the Red Sea and offers the perfect environment for relaxation.\n\n### Key Attractions\n- **King Fahd's Fountain**: The tallest fountain in the world, best viewed at sunset when it is spectacularly illuminated.\n- **The Floating Mosque (Al Rahma Mosque)**: Built on pillars over the sea, it offers stunning views and a peaceful atmosphere for prayers.\n- **Jeddah Waterfront**: A newly developed area featuring modern walkways, sculptures, cafes, and safe play areas for children.\n\n### Dining by the Sea\nThe Corniche is lined with world-class restaurants offering fresh Red Sea seafood, traditional Saudi dishes, and international fare. Booking a reliable airport transfer after your seaside dinner ensures you reach your flight relaxed and on time.`
        }
    ];

    const posts = rawArticles.map((article, index) => {
        const introduction = `\n<div class="bg-zinc-900 border-l-4 border-luxury-gold p-10 rounded-r-3xl my-10 italic text-xl leading-relaxed shadow-2xl">\n    Planning your journey regarding <strong>${article.title.split(':')[0]}</strong>? The most trusted method is booking a premium chauffeur service like Saudi Taxi. Our 24/7 dispatch provides private door-to-door transfers with high-capacity vehicles starting from competitive rates. Experience a seamless transition with professional drivers who handle all checkpoint logistics.\n</div>\n\nFacing the complexity of Saudi Arabian travel can be daunting in 2026. Whether you are a pilgrim performing Umrah or a business professional arriving at Jeddah Airport, navigating the logistics requires expertise. In this comprehensive guide, we break down everything you need to know about this topic to ensure your journey is safe and comfortable.\n`;

        const quickFacts = `\n<div class="bg-luxury-gold/5 border border-luxury-gold/20 p-8 rounded-3xl my-12">\n    <h3 class="text-luxury-gold mb-6 mt-0 text-2xl font-serif tracking-tight">Trip Essential Brief</h3>\n    <table class="w-full text-base">\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Core Service</td><td class="py-4 text-white">Private Chauffeur & VIP Taxi</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Wait Time</td><td class="py-4 text-white">Zero (Pre-booked)</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Fleet Options</td><td class="py-4 text-white">GMC Yukon, VIP Staria, HiAce</td></tr>\n        <tr class="border-b border-luxury-gold/10"><td class="py-4 text-white/50 font-medium">Wifi & Water</td><td class="py-4 text-white">Included/Free</td></tr>\n    </table>\n</div>\n`;

        const conclusion = `\n## Conclusion: Why Professionalism Matters in Saudi Travel\nChoosing the right transport is not just about the vehicle—it is about the peace of mind that comes with professional roadside assistance, knowledgeable drivers, and 24/7 reliability. As you prepare for your journey, prioritize safety and comfort to make the most of your spiritual or business visit.\n\n### Key Takeaways for Travelers:\n- **Vehicle Match**: Select an XL SUV for luggage-heavy Umrah trips.\n- **Logistics**: Trust your driver with checkpoint documentation.\n- **Infrastructure**: Benefit from $100bn Saudi road investments.\n- **Booking**: WhatsApp remains the fastest communication channel.\n\n**Book your premium journey today and experience the gold standard of Saudi transportation.**\n`;

        const assembledContent = introduction + quickFacts + article.body + howToModule + infrastructureModule(article.title) + safetyProtocolModule(article.title) + proTipModule + conclusion;

        const descriptionText = `Saudi Taxi Guide 2026: ${article.title}. 24/7 expert chauffeurs, luxury GMC/Mercedes fleet, and fixed rates. Perfect for Umrah, Airport, and Intercity trips.`;
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
        console.log('Successfully uploaded 13 exact articles for March 17 to March 29 to Supabase!');
    }
}

uploadMarchArticles();
