import os
import re

def audit_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Metadata extraction (supports " and ')
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    desc_match = re.search(r'description:\s*["\']([^"\']+)["\']', content)
    
    # H1 check
    h1_count = len(re.findall(r'<h1', content, re.IGNORECASE))
    
    # Alt tag check (simple regex)
    # Finding <img or <Image tags
    img_tags = re.findall(r'<(?:img|Image)[^>]+>', content, re.IGNORECASE)
    imgs_without_alt = [img for img in img_tags if 'alt=' not in img.lower() or 'alt=""' in img.lower()]

    results = {
        'file': file_path,
        'title': title_match.group(1) if title_match else None,
        'description': desc_match.group(1) if desc_match else None,
        'h1_count': h1_count,
        'imgs_total': len(img_tags),
        'imgs_missing_alt': len(imgs_without_alt)
    }
    return results

def main():
    app_path = r'd:\tehseen\saudi-taxi\app'
    components_path = r'd:\tehseen\saudi-taxi\components'
    
    report = []
    
    # Audit pages and layouts
    for root, dirs, files in os.walk(app_path):
        for file in files:
            if file.endswith('.tsx'):
                full_path = os.path.join(root, file)
                report.append(audit_file(full_path))
                
    # Audit components for images and H1s
    for root, dirs, files in os.walk(components_path):
        for file in files:
            if file.endswith('.tsx'):
                full_path = os.path.join(root, file)
                report.append(audit_file(full_path))

    print("\n--- SEO AUDIT REPORT ---\n")
    print(f"{'Relative Path':<70} | {'T.Len':<5} | {'D.Len':<5} | {'H1':<3} | {'Alt Err'}")
    print("-" * 105)
    
    for r in report:
        t_len = len(r['title']) if r['title'] else "-"
        d_len = len(r['description']) if r['description'] else "-"
        h1 = r['h1_count']
        alt_err = f"{r['imgs_missing_alt']}/{r['imgs_total']}" if r['imgs_total'] > 0 else "-"
        
        rel_path = os.path.relpath(r['file'], r'd:\tehseen\saudi-taxi')
        
        # Only show files that have metadata or H1 or Images
        if r['title'] or r['description'] or r['h1_count'] > 0 or r['imgs_total'] > 0:
            print(f"{rel_path[:70]:<70} | {str(t_len):<5} | {str(d_len):<5} | {str(h1):<3} | {alt_err}")
            
            # Warnings
            if isinstance(t_len, int):
                if t_len > 60: print(f"  [!] Title too long ({t_len}): {r['title']}")
                if t_len < 30: print(f"  [!] Title too short ({t_len}): {r['title']}")
            
            if isinstance(d_len, int):
                if d_len > 160: print(f"  [!] Desc too long ({d_len}): {r['description']}")
                if d_len < 120: print(f"  [!] Desc too short ({d_len}): {r['description']}")
            
            if h1 > 1:
                print(f"  [!] Multiple H1 tags found: {h1}")
            
            if r['imgs_missing_alt'] > 0:
                print(f"  [!] Missing alt tags on {r['imgs_missing_alt']} image(s)")

if __name__ == "__main__":
    main()
