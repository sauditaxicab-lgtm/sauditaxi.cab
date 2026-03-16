
const fs = require('fs');
const path = require('path');

const articlesDir = 'C:\\Users\\Latitude 7420\\.gemini\\antigravity\\brain\\879c94f3-9261-4a40-bc77-9bbf2812957b\\articles';
const outputSql = 'C:\\Users\\Latitude 7420\\.gemini\\antigravity\\brain\\879c94f3-9261-4a40-bc77-9bbf2812957b\\upload_posts.sql';

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
            if (!inTable) {
                resultRows.push('<table class="w-full border-collapse border border-white/10 my-6">');
                inTable = true;
            }
            if (trimmed.includes('---')) continue;
            
            const parts = trimmed.split('|').slice(1, -1).map(p => p.trim());
            const tag = resultRows[resultRows.length - 1].includes('<thead>') || resultRows.some(r => r.includes('<table') && !r.includes('<tbody>')) ? 'th' : 'td';
            
            let rowHtml = '<tr class="border-b border-white/10">';
            parts.forEach(p => {
                rowHtml += `<${tag} class="p-4 text-left border-r border-white/10 text-white/80">${p}</${tag}>`;
            });
            rowHtml += '</tr>';
            resultRows.push(rowHtml);
            continue;
        } else if (inTable) {
            resultRows.push('</table>');
            inTable = false;
        }

        const isLi = trimmed.startsWith('<li>');
        if (isLi && !inList) {
            resultRows.push('<ul class="list-disc pl-6 space-y-2 my-4 text-white/80">');
            inList = true;
        } else if (!isLi && inList && trimmed !== '') {
            resultRows.push('</ul>');
            inList = false;
        }

        if (!trimmed) {
            if (inList) {
                resultRows.push('</ul>');
                inList = false;
            }
            resultRows.push('');
            continue;
        }

        if (trimmed.match(/^<(h1|h2|h3|ul|li|table|tr|p|br)/)) {
            resultRows.push(trimmed);
        } else {
            resultRows.push(`<p class="my-4 text-white/70 leading-relaxed">${trimmed}</p>`);
        }
    }
    
    if (inList) resultRows.push('</ul>');
    if (inTable) resultRows.push('</table>');

    return resultRows.join('\n');
}

const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md') && !f.includes('.resolved') && !f.includes('metadata'));

// Date Generation Logic
const dates = [];
// 15 days in March (16 back to 2)
for (let i = 0; i < 15; i++) {
    const d = new Date(2026, 2, 16 - i, 12, 0, 0); // Month is 0-indexed (2 = March)
    dates.push(d.toISOString());
}
// 15 days in February (28 back to 14)
for (let i = 0; i < 15; i++) {
    const d = new Date(2026, 1, 28 - i, 12, 0, 0); // 1 = February
    dates.push(d.toISOString());
}

let sql = "INSERT INTO posts (title, slug, content, excerpt, published, cover_image, category, created_at) VALUES \n";
const values = [];

files.forEach((file, index) => {
    let content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
    
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

    const htmlContent = mdToHtml(content);
    const postDate = dates[index] || dates[dates.length - 1];

    const safeTitle = title.replace(/'/g, "''");
    const safeContent = htmlContent.replace(/'/g, "''");
    const safeExcerpt = excerpt.replace(/'/g, "''");

    values.push(`('${safeTitle}', '${slug}', '${safeContent}', '${safeExcerpt}', true, '/blog/placeholder.jpg', 'Travel Guide', '${postDate}')`);
});

sql += values.join(",\n") + ";";

fs.writeFileSync(outputSql, sql);
console.log(`Generated polished HTML SQL with specific dates for ${files.length} articles at ${outputSql}`);
