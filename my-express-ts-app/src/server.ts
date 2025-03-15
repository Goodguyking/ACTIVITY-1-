import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


//Informational Responses (100 – 199)
app.use('/100', (req, res) => {
    res.writeContinue(); // Sends a 100 Continue response
    res.end();
});

app.get('/101', (req, res) => {
    res.status(101).send('Switching Protocols');
});

app.get('/102', (req, res) => {
    res.status(102).send('Processing...');
});

app.get('/103', (req, res) => {
    res.status(103).set('Link', '</style.css>; rel=preload').send('Early Hints');
});

app.get('/199', (req, res) => {
    res.status(199).send('Miscellaneous Informational Response');
});


//Successful Responses (200 – 299)


app.get('/200', (req, res) => {
    res.status(200).send('OK - Request Successful');
});

app.post('/201', (req, res) => {
    res.status(201).send('Resource Created');
});

app.get('/202', (req, res) => {
    res.status(202).send('Request Accepted for Processing');
});

app.delete('/204', (req, res) => {
    res.status(204).send(); // No content response
});

app.get('/206', (req, res) => {
    res.status(206).send('Partial Content Sent');
});




//Redirection Messages (300 – 399)

app.get('/301', (req, res) => {
    res.redirect(301, 'https://example.com/new-location');
});

app.get('/302', (req, res) => {
    res.redirect(302, 'https://example.com/temporary-location');
});

app.get('/304', (req, res) => {
    res.status(304).send(); // Not Modified (useful for caching)
});

app.get('/307', (req, res) => {
    res.redirect(307, 'https://example.com/same-method');
});

app.get('/308', (req, res) => {
    res.redirect(308, 'https://example.com/permanent-method');
});



//Client Error Responses (400 – 499)


app.get('/400', (req, res) => {
    res.status(400).send('Bad Request - Invalid input');
});

app.get('/401', (req, res) => {
    res.status(401).send('Unauthorized - Please log in');
});

app.get('/403', (req, res) => {
    res.status(403).send('Forbidden - You do not have access');
});

app.get('/404', (req, res) => {
    res.status(404).send('Not Found - This page does not exist');
});

app.get('/429', (req, res) => {
    res.status(429).send('Too Many Requests - Slow down!');
});




//Server Error Responses (500 – 599)

app.get('/500', (req, res) => {
    res.status(500).send('Internal Server Error');
});

app.get('/501', (req, res) => {
    res.status(501).send('Not Implemented - Feature not available');
});

app.get('/502', (req, res) => {
    res.status(502).send('Bad Gateway - Invalid response from upstream');
});

app.get('/503', (req, res) => {
    res.status(503).send('Service Unavailable - Try again later');
});

app.get('/504', (req, res) => {
    res.status(504).send('Gateway Timeout - Server took too long to respond');
});







// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
