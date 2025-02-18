// vulnerable code

//https://example.com/data?url=https://example.com/data/countries.json
//https://example.com/data?url=https://example.com/data/states.json
//https://example.com/data?url=https://example.com/data/confidenctial.json
app.get('/api/data', async (req, res) => {
  const allowedURLs = [
    'https://example.com/data?url=https://example.com/data/countries.json',
    'https://example.com/data?url=https://example.com/data/states.json',
  ];

  const url = req.query.url;
  // only allowed urls
  try {
    if (!allowedURLs.includes(url)) {
      return res.status(400).json({ error: 'Bar URL' });
    }
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err.msg });
  }
});
