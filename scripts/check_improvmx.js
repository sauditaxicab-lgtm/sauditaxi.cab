const https = require('https');
require('dotenv').config({ path: '.env.local', quiet: true });

const apiKey = process.env.IMPROVMX_API_KEY;

if (!apiKey) {
    console.error('Error: IMPROVMX_API_KEY is not defined in .env.local');
    process.exit(1);
}

const options = {
    hostname: 'api.improvmx.com',
    port: 443,
    path: '/v3/domains',
    method: 'GET',
    headers: {
        'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
                const parsedData = JSON.parse(data);
                console.log('--- ImprovMX Domains ---');
                console.log(JSON.stringify(parsedData, null, 2));
            } catch (e) {
                console.error('Error parsing JSON:', e);
                console.log('Raw response:', data);
            }
        } else {
            console.error(`Request failed with status: ${res.statusCode}`);
            console.log('Response:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
