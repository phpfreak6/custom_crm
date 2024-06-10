const mimeTypes = [
  { mime_type: 'audio/aac', ext: '.aac' },
  { mime_type: 'application/x-abiword', ext: '.abw' },
  { mime_type: 'application/x-freearc', ext: '.arc' },
  { mime_type: 'image/avif', ext: '.avif' },
  { mime_type: 'video/x-msvideo', ext: '.avi' },
  { mime_type: 'application/vnd.amazon.ebook', ext: '.azw' },
  { mime_type: 'application/octet-stream', ext: '.bin' },
  { mime_type: 'image/bmp', ext: '.bmp' },
  { mime_type: 'application/x-bzip', ext: '.bz' },
  { mime_type: 'application/x-bzip2', ext: '.bz2' },
  { mime_type: 'application/x-cdf', ext: '.cda' },
  { mime_type: 'application/x-csh', ext: '.csh' },
  { mime_type: 'text/css', ext: '.css' },
  { mime_type: 'text/csv', ext: '.csv' },
  { mime_type: 'application/msword', ext: '.doc' },
  {
    mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ext: '.docx',
  },
  { mime_type: 'application/vnd.ms-fontobject', ext: '.eot' },
  { mime_type: 'application/epub+zip', ext: '.epub' },
  { mime_type: 'application/gzip', ext: '.gz' },
  { mime_type: 'image/gif', ext: '.gif' },
  { mime_type: 'text/html', ext: '.htm' },
  { mime_type: 'text/html', ext: '.html' },
  { mime_type: 'image/vnd.microsoft.icon', ext: '.ico' },
  { mime_type: 'text/calendar', ext: '.ics' },
  { mime_type: 'application/x-java-archive', ext: '.jar' },
  { mime_type: 'image/jpeg', ext: '.jpeg' },
  { mime_type: 'image/jpeg', ext: '.jpg' },
  { mime_type: 'text/javascript', ext: '.js' },
  { mime_type: 'application/json', ext: '.json' },
  { mime_type: 'application/ld+json', ext: '.jsonld' },
  { mime_type: 'audio/midi', ext: '.mid' },
  { mime_type: 'audio/midi', ext: '.midi' },
  { mime_type: 'text/javascript', ext: '.mjs' },
  { mime_type: 'audio/mpeg', ext: '.mp3' },
  { mime_type: 'video/mp4', ext: '.mp4' },
  { mime_type: 'video/mpeg', ext: '.mpeg' },
  { mime_type: 'application/vnd.apple.installer+xml', ext: '.mpkg' },
  { mime_type: 'application/vnd.oasis.opendocument.presentation', ext: '.odp' },
  { mime_type: 'application/vnd.oasis.opendocument.spreadsheet', ext: '.ods' },
  { mime_type: 'application/vnd.oasis.opendocument.text', ext: '.odt' },
  { mime_type: 'audio/ogg', ext: '.oga' },
  { mime_type: 'video/ogg', ext: '.ogv' },
  { mime_type: 'application/ogg', ext: '.ogx' },
  { mime_type: 'audio/opus', ext: '.opus' },
  { mime_type: 'application/vnd.oasis.opendocument.formula-template', ext: '.otf' },
  { mime_type: 'image/png', ext: '.png' },
  { mime_type: 'application/pdf', ext: '.pdf' },
  { mime_type: 'application/x-php', ext: '.php' },
  { mime_type: 'application/vnd.ms-powerpoint', ext: '.ppt' },
  {
    mime_type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ext: '.pptx',
  },
  { mime_type: 'application/vnd.rar', ext: '.rar' },
  { mime_type: 'application/rtf', ext: '.rtf' },
  { mime_type: 'application/x-shellscript', ext: '.sh' },
  { mime_type: 'image/svg+xml', ext: '.svg' },
  { mime_type: 'application/vnd.adobe.flash.movie', ext: '.swf' },
  { mime_type: 'application/x-tar', ext: '.tar' },
  { mime_type: 'image/tiff', ext: '.tif' },
  { mime_type: 'image/tiff', ext: '.tiff' },
  { mime_type: 'video/mp2t', ext: '.ts' },
  { mime_type: 'font/ttf', ext: '.ttf' },
  { mime_type: 'text/plain', ext: '.txt' },
  { mime_type: 'application/vnd.visio', ext: '.vsd' },
  { mime_type: 'audio/wav', ext: '.wav' },
  { mime_type: 'audio/webm', ext: '.weba' },
  { mime_type: 'video/webm', ext: '.webm' },
  { mime_type: 'image/webp', ext: '.webp' },
  { mime_type: 'font/woff', ext: '.woff' },
  { mime_type: 'font/woff2', ext: '.woff2' },
  { mime_type: 'application/xhtml+xml', ext: '.xhtml' },
  { mime_type: 'application/vnd.ms-excel', ext: '.xls' },
  { mime_type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', ext: '.xlsx' },
  { mime_type: 'application/xml', ext: '.xml' },
  { mime_type: 'application/vnd.mozilla.xul+xml', ext: '.xul' },
  { mime_type: 'application/zip', ext: '.zip' },
  { mime_type: 'video/3gpp', ext: '.3pg' },
  { mime_type: 'video/3gpp2', ext: '.3g2' },
  { mime_type: 'application/x-7z-compressed', ext: '.7z' },
];

export default mimeTypes;
