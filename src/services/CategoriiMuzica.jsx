export function getCategoriesMuzicaJson() {
  const categories = [
    {
      id: 1,
      name: 'Muzică corală',
      items: ['Cor Mixt', 'Cor de femei', 'Cor de barbati'],
    },
    {
      id: 2,
      name: 'Muzică simfonică',
      items: [
        'Orch. Simfonica',
        'Orch. de Camera',
        'Orch de coarde',
        'Concert Solo',
        'Vocal Simf',
      ],
    },
    {
      id: 3,
      name: 'Muzică de cameră',
      items: ['Duo', 'Trio', 'Cvartet', 'Sextet', 'Septet', 'Octet'],
    },
    {
      id: 4,
      name: 'Solo corzi',
      items: ['Pian', 'Vioara', 'Viola', 'Violoncel', 'Contrabass', 'Harpa'],
    },
    {
      id: 5,
      name: 'Solo Suflatori',
      items: [
        'Flaut',
        'Oboi',
        'Clarinet',
        'Fagot',
        'Corn',
        'Trompeta',
        'Trombon',
        'Tuba',
      ],
    },
  ];

  return categories;
}
