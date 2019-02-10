let child_process = require('child_process');

let config = {
  IMAGE_NAME: 'nginx-static',
  PATH_TO_DOCKERFILE: '.',
  CONTAINER_NAME: 'nginx-static-container',
  PORTS: '3300:80'
};

function buildApplication () {
  return executeCommand(
    'npm run build',
    'Start build application',
    'Finish build application',
    'Failed build application'
  );
}

function destroyNginxImage ({ IMAGE_NAME }) {
  return executeCommand(
    `docker image rm ${IMAGE_NAME}`,
    `Start to destroy nginx image (${IMAGE_NAME})`,
    `Finish to destroy nginx image (${IMAGE_NAME})`,
    `Failed to destroy nginx image (${IMAGE_NAME})`
  )
}

function buildNginxImage ({ IMAGE_NAME, PATH_TO_DOCKERFILE }) {
  return executeCommand(
    `docker build -t ${IMAGE_NAME} ${PATH_TO_DOCKERFILE}`,
    `Start build ${IMAGE_NAME} image`,
    `Finish build ${IMAGE_NAME} image`,
    `Failed build ${IMAGE_NAME} image`
  );
}

function destroyNginxContainer ({ CONTAINER_NAME }) {
  return executeCommand(`docker container kill ${CONTAINER_NAME}`)
    .then(() => executeCommand(
      `docker container rm ${CONTAINER_NAME}`,
      `Start to remove container ${CONTAINER_NAME}`,
      `Finish to remove container ${CONTAINER_NAME}`,
      `Fail to remove container ${CONTAINER_NAME}`
    ));
}

function buildNginxContainer ({ CONTAINER_NAME, PORTS, IMAGE_NAME }) {
  return executeCommand(
    `docker run -d --name ${CONTAINER_NAME} -p ${PORTS} ${IMAGE_NAME}`,
    'Start build nginx-static container',
    'Finish build nginx-static container',
    'Failed build nginx-static container'
  );
}

function executeCommand (cmd, msgbefore, msgSuccess, msgError) {
  if (msgbefore) {
    console.log(`\n${msgbefore}`);
  }

  return new Promise((resolve, reject) => {
    let worker = child_process.exec(cmd);
    worker.on('exit', code => {
      if (code !== 0) {
        if (msgError) {
          console.log(msgError);
        }
        return reject();
      }
      if (msgSuccess) {
        console.log(msgSuccess);
      }
      resolve();
    });
    worker.on('message', message => {
      console.log(message);
    });
  });
}

function checkCommad (cmd1, cmd2) {
  return cmd1.replace(/-/g, '') === cmd2;
}

async function run () {
  let argv = process.argv.slice(2);
  let needToRemove = argv.some(cmd1 => checkCommad(cmd1, 'clean'));

  try {
    if  (needToRemove) {
      await destroyNginxContainer(config);
      await destroyNginxImage(config);
    }
    await buildApplication();
    await buildNginxImage(config);
    await buildNginxContainer(config);
  } catch (e) {
    if (e) {
      console.error(e);
      console.log('Error happened');
    }
  }
}

if (module.parent) {
  module.exports = run;
} else {
  run();
}
