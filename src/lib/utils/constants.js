export const METATAGS = [
  { tag: '[intro]', description: 'Marks the introduction section of the song' },
  { tag: '[verse]', description: 'Indicates a verse section' },
  { tag: '[chorus]', description: 'Marks the chorus/refrain section' },
  { tag: '[bridge]', description: 'Indicates a bridge section' },
  { tag: '[instrumental]', description: 'Creates an instrumental section without vocals' },
  { tag: '[break]', description: 'Creates a musical break or pause' },
  { tag: '[outro]', description: 'Marks the ending section of the song' }
];

export const MUSIC_GENRES = [
  '90s', 'metal', 'electronic', 'house', 'rock', 'pop', 'ambient',
  'jazz', 'classical', 'folk', 'blues', 'reggae', 'hip-hop',
  'techno', 'trance', 'drum-and-bass', 'synthwave', 'lo-fi'
];

export const USAGE_EXAMPLES = [
  {
    title: 'Basic Song Structure',
    code: '[intro]\n[verse]\n[chorus]\n[verse]\n[chorus]\n[outro]',
    description: 'A typical song structure using section metatags'
  },
  {
    title: 'Instrumental Break',
    code: '[verse]\n[break]\n[chorus]',
    description: 'Adding an instrumental break between sections'
  },
  {
    title: 'Style Mixing',
    code: 'style: electronic, ambient, synthwave',
    description: 'Combining multiple genres for a unique sound'
  }
];