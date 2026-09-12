export const SITE = {
  name: 'Friends of Nilo Forest',
  shortName: 'FONF',
  url: 'https://niloforest.com',
  email: 'ralf@niloforest.com',
  phone: '+41 79 681 21 06',
  phoneHref: 'tel:+41796812106',
  legalForm: 'Association under Swiss law, in formation (Art. 60 ff. Swiss Civil Code)',
  address: {
    street: 'Chilegässli 12A',
    postalCode: '8904',
    locality: 'Aesch ZH',
    country: 'Switzerland',
    countryCode: 'CH',
  },
  founders: [
    { name: 'Ralf Degenhardt', role: 'Founder, contact for placements' },
    { name: 'Benjamin Wagner', role: 'Co-founder' },
  ],
  lodgeUrl: 'https://www.niloforestlodge.com/',
  // Nutzerentscheidung 2026-09-12: Start ab sofort, laufende Aufnahme
  placementStart: 'now',
  applySubject: 'Application: Field placement Nilo Forest',
  tagline:
    'Swiss conservation association for the Nilo Nature Forest Reserve, East Usambara Mountains, Tanzania. Self-directed field placements for biology, environmental and forestry students.',
};

export const RESERVE = {
  name: 'Nilo Nature Forest Reserve',
  areaHa: '6,025',
  gazetted: '7 December 2007',
  peak: 'Nilo Peak, 1,506 m',
  rainfall: '1,200–2,200 mm, rain in every month',
  plants: 'c. 800 plant species, including Saintpaulia',
  birds: 'c. 100 bird species',
  catchment: 'water catchment for more than 30,000 people in 17 villages',
  manager: 'Tanzania Forest Service',
  // Approximate centre of the reserve (TODO: bestätigen)
  lat: -4.92,
  lng: 38.66,
};

export const NAV = [
  { href: '/field-placement/', label: 'Field placement' },
  { href: '/fauna/', label: 'Fauna' },
  { href: '/flora/', label: 'Flora' },
  { href: '/geology/', label: 'Geology' },
  { href: '/threats/', label: 'Threats' },
  { href: '/approach/', label: 'Approach' },
  { href: '/institutes/', label: 'For institutes' },
  { href: '/about/', label: 'About' },
];

export const APPLY_HREF = `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.applySubject)}`;
