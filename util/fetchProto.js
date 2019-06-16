var getProto = (protoDescriptor, package) => {
  var array = package.split(".");
  if (array.length == 1) {
    return protoDescriptor[`${array[0]}`];
  }else if (array.length == 2) {
    return protoDescriptor[`${array[0]}`][`${array[1]}`];
  }else if (array.length == 3) {
    return protoDescriptor[`${array[0]}`][`${array[1]}`][`${array[2]}`];
  }else if (array.length == 4) {
    return protoDescriptor[`${array[0]}`][`${array[1]}`][`${array[2]}`][`${array[3]}`];
  }else if (array.length == 5) {
    return protoDescriptor[`${array[0]}`][`${array[1]}`][`${array[2]}`][`${array[3]}`][`${array[4]}`];
  }else {
    return protoDescriptor[`${array[0]}`][`${array[1]}`][`${array[2]}`][`${array[3]}`][`${array[4]}`];
  }
};

module.exports = {getProto};
