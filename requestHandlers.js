function start() {
   console.log("request handler for 'start' is called");
}

function upload(){
   console.log("request handler for 'upload' is called");
}

exports.start = start;
exports.upload = upload;