var getPackageName = (buffer) => {
  var p_index = buffer.indexOf('package');
  return buffer.substring(p_index + 8, buffer.indexOf(';', p_index)).trim();
};

module.exports = {getPackageName};
