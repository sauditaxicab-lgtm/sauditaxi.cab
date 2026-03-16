
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function upload() {
    const articlesDir = 'C:\\Users\\Latitude 7420\\.gemini\\antigravity\\brain\\879c94f3-9261-4a40-bc77-9bbf2812957b\\articles';
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && !f.includes('.resolved') && !f.includes('metadata'));

    const services = [
        { url: "/services/intercity-taxi", label: "Intercity Taxi Service" },
        { url: "/services/airport-transfers", label: "Airport Transfers" },
        { url: "/services/umrah-transfers", label: "Umrah Taxi Transfers" },
        { url: "/services/ziyarat-tours", label: "Ziyarat Tours Madinah & Makkah" },
        { url: "/services/family-travel", label: "Family Travel Packages" },
        { url: "/services/vip-transport", label: "VIP Chauffeur Service" }
    ];

    function mdToHtml(md) {
        let html = md
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
            .replace(/^- (.*$)/gim, '<li>$1</li>');

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
            if (trimmed.match(/^<(h1|h2|h3|ul|li|table|tr|p|br)/)) { resultRows.push(trimmed); }
            else { resultRows.push(`<p class="my-6 text-white/70 leading-relaxed">${trimmed}</p>`); }
        }
        if (inList) resultRows.push('</ul>');
        if (inTable) resultRows.push('</table>');
        return resultRows.join('\n');
    }

    const dates = [];
    for (let i = 0; i < 15; i++) dates.push(new Date(2026, 2, 16 - i, 12, 0, 0).toISOString());
    for (let i = 0; i < 15; i++) dates.push(new Date(2026, 1, 28 - i, 12, 0, 0).toISOString());

    const fleetModule = `
## Choosing the Right Vehicle for Your Group
When navigating the 450km stretch between the Holy Cities, choosing the right vehicle is paramount. Here is a breakdown of why pilgrims prefer specific models:
- **Toyota Camry**: Best for couples or business solo travelers. It handles the speed of Highway 15 with surprising stability.
- **Hyundai Staria**: Family favorite. The captain seats and large windows are perfect for children to view the desert vistas.
- **GMC Yukon XL**: VIP choice. Often used for large families carrying significant luggage (Zamzam water, multiple suitcases).
- **Toyota HiAce**: Essential for groups of 10+. Features high roofs for easy entry and exit.
`;

    const highwayModule = `
## Highway 15 vs Highway 5: Strategic Routing
The journey from Makkah to Madinah is traditionally done via **Highway 15**, also known as the **Al-Hijrah Highway**. 
- **The Direct Path (H15)**: A 4-hour sprint. World-class expressway with 4 to 5 lanes, monitored by Highway Patrol for safety.
- **The Coastal Scenic Path (H5)**: Traveling via Jeddah and Yanbu. Approximately 6-7 hours but offers stunning views of the Red Sea coast.
- **Special Routes**: During peak Umrah seasons, drivers may use specialized bypasses to avoid congestion, ensuring timely arrival.
`;

    const restStopModule = `
## Premium Rest Stops & Amenities
Safety regulations require drivers to rest. The stops along the Makkah-Madinah road are elite:
- **Sasco Palm**: The gold standard. Fresh coffee, high-quality snacks, and clean air-conditioned prayer halls.
- **Petromin Stations**: Quick service and reliable restrooms.
- **Local Highlights**: Stops like **Alyutamah** feature stalls selling fresh dates, traditional Saudi tea, and local honey.
- **24/7 Safety**: Every station is well-lit and equipped with emergency services.
`;

    const posts = [];
    files.forEach((file, index) => {
        let content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
        
        // Inject deep modules to increase word count and quality
        if (index % 3 === 0) content += fleetModule;
        if (index % 3 === 1) content += highwayModule;
        if (index % 3 === 2) content += restStopModule;

        const titleMatch = content.match(/^# (.*)/);
        const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
        const slug = file.replace('.md', '');
        const paragraphs = content.split('\n\n');
        const excerpt = paragraphs[1] ? paragraphs[1].substring(0, 160).replace(/[#\*\[\]\(\)]/g, '') + '...' : '';

        const linkCount = (content.match(/\[.*?\]\(\/services\/.*?\)/g) || []).length;
        if (linkCount < 2) {
            let addedCount = 0;
            let linksStr = "\n\n### Related Services\n";
            for (const svc of services) {
                if (!content.includes(svc.url)) {
                    linksStr += `- [${svc.label}](${svc.url})\n`;
                    addedCount++;
                }
                if (addedCount >= 2 - linkCount) break;
            }
            content += linksStr;
        }

        // Add FAQs to each article with distinct markers for the frontend to pick up
        const faqs = [
            { 
                question: `How can I book a taxi from ${title.includes('Jeddah') ? 'Jeddah' : (title.includes('Makkah') ? 'Makkah' : 'the Airport')}?`, 
                answer: "You can book via our website or WhatsApp. For family groups, we recommend booking at least 24 hours in advance to secure your preferred vehicle. Our dispatch team is available 24/7."
            },
            { 
                question: "What are the seating and luggage capacities?", 
                answer: "Toyota Camry: 4 Pax (3 Bags), Hyundai Staria: 7 Pax (7 Bags), GMC Yukon XL: 7 Pax (7 Bags), Toyota HiAce: 11 Pax (10 Bags), and Toyota Coaster: Up to 17-21 Pax. Always consider vehicle size for comfort during long journeys."
            },
            { 
                question: "Is the service available for Umrah pilgrims?", 
                answer: "Yes, we specialize in Umrah transfers, Ziyarat tours, and airport pick-ups for pilgrims. Our drivers are familiar with all Miqat locations and holy sites."
            },
            { 
                question: "Do you provide child seats for family travel?", 
                answer: "Yes, child seats are available upon request for a safe and comfortable journey for your little ones. Please let us know the age of your child during booking."
            },
            {
                question: "Which highway is used for Makkah to Madinah?",
                answer: "The primary route is Highway 15, also known as the Al Hijrah Highway. It is a well-maintained multi-lane road with numerous rest stops like Alyutamah and Wadi Al Fora."
            }
        ];

        const faqHtml = `<div id="faq-section-data" style="display:none;">${JSON.stringify(faqs)}</div>`;
        content += "\n\n" + faqHtml;

        posts.push({
            title,
            slug,
            content: mdToHtml(content),
            excerpt,
            published: true,
            cover_image: `/blog/${slug}.jpg`,
            created_at: dates[index] || dates[dates.length - 1]
        });
    });

    console.log(`Prepared ${posts.length} posts with FAQs. Attempting update (upsert)...`);

    const { data, error } = await supabase
        .from('posts')
        .upsert(posts, { onConflict: 'slug' });

    if (error) {
        console.error('Error uploading posts:', error.message);
    } else {
        console.log('Successfully uploaded 30 articles to Supabase!');
    }
}

upload();
