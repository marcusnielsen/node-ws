import express from 'express';
import http from 'http';
import ioInit from 'socket.io';
import morgan from 'morgan';
import Rx from 'rx';

debugger;

const app = express();
const server = http.createServer(app);
const io = ioInit(server);

app.use(morgan('dev'));
app.use('/client', express.static(__dirname + '/../../client'));

const event$ = Rx.Observable.interval(1000)
  .timeInterval()
  .map((value) => {
    return JSON.stringify(value);
  });

io.on('connection', (socket) => {
  process.stdout.write('a user connected: ' + socket);

  event$.subscribe((val) => {
    socket.emit('message', val);
  });
});

function init(done) {
  server.listen(process.env.PORT);
  process.stdout.write('Server listening on port: ' + process.env.PORT + '\n');

  if (done) {
    done(server);
  }
}

export default {
  init: init,
};
