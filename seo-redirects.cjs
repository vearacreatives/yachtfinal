// Merge into existing next.config redirects. Case-only blog redirects are handled by the blog page, not here, to avoid loops.
module.exports = [
  {
    "source": "/our-blog/romantic-getaways-exploring-goa's-yacht-experiences-for-couples",
    "destination": "https://www.yachtclubgoa.com/our-blog/romantic-getaways-exploring-goas-yacht-experiences-for-couples",
    "permanent": true
  },
  {
    "source": "/:path*",
    "has": [
      {
        "type": "host",
        "value": "yachtclubgoa.com"
      }
    ],
    "destination": "https://www.yachtclubgoa.com/:path*",
    "permanent": true
  }
];
