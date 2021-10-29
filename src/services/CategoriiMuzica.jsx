export function getCategoriesMuzicaJson() {
  const categories = [
    {
      id: 1,
      name: 'muzicaCorala',
      stil: 'Muzică corală',
      items: ['corMixt', 'corDeFemei', 'corDeBarbati', 'corPentruVociEgale'],
    },
    {
      id: 2,
      name: 'muzicaVocala',
      stil: 'Muzică vocală',
      items: ['soprana', 'mezzoSoprana', 'alto', 'tenor', 'bass', 'bariton'],
    },
    {
      id: 3,
      name: 'muzicaDeCamera',
      stil: 'Muzică de cameră',
      items: ['duo', 'trio', 'cvartet', 'cvintet', 'sextet', 'septet', 'octet'],
    },
    {
      id: 4,
      name: 'altele',
      stil: '',
      items: [
        'Muzică simfonică',
        'Muzică vocal-simfonică',
        'Muzică concertantă',
        'Operă / Teatru / Operete',
      ],
    },
  ];

  return categories;
}
