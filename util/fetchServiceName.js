var getServiceName = (buffer) => {
  var s_index = buffer.indexOf('service');
  return buffer.substring(s_index + 8, buffer.indexOf('{', s_index)).trim();
};

module.exports = {getServiceName};
