const { exec } = require('child_process');
const youtubeRTMP = 'rtmp://saopaulo.restream.io/live/re_5298008_eventea30e103693c438bb9b12ac963aba8c7';

// Comando FFmpeg para transmitir um vídeo em loop
const cmd = `
  ffmpeg -stream_loop -1 -i "https://mapimhome.wordpress.com/wp-content/uploads/2025/06/vinheta-video-introducao-contagem-regressiva-youtube.gif" \
  -c:v libx264 -preset ultrafast -tune zerolatency \
  -pix_fmt yuv420p -f flv ${youtubeRTMP}
`;

exec(cmd, (error, stdout, stderr) => {
  if (error) console.error('Erro ao transmitir:', error);
  else console.log('Transmissão ao vivo iniciada!');
});
