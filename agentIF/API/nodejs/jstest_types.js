//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
var ButtonStates = module.exports.ButtonStates = function(args) {
  this.WDown = false;
  this.ADown = false;
  this.SDown = false;
  this.DDown = false;
  if (args) {
    if (args.WDown !== undefined && args.WDown !== null) {
      this.WDown = args.WDown;
    }
    if (args.ADown !== undefined && args.ADown !== null) {
      this.ADown = args.ADown;
    }
    if (args.SDown !== undefined && args.SDown !== null) {
      this.SDown = args.SDown;
    }
    if (args.DDown !== undefined && args.DDown !== null) {
      this.DDown = args.DDown;
    }
  }
};
ButtonStates.prototype = {};
ButtonStates.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.WDown = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.ADown = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.SDown = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.DDown = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ButtonStates.prototype.write = function(output) {
  output.writeStructBegin('ButtonStates');
  if (this.WDown !== null && this.WDown !== undefined) {
    output.writeFieldBegin('WDown', Thrift.Type.BOOL, 1);
    output.writeBool(this.WDown);
    output.writeFieldEnd();
  }
  if (this.ADown !== null && this.ADown !== undefined) {
    output.writeFieldBegin('ADown', Thrift.Type.BOOL, 2);
    output.writeBool(this.ADown);
    output.writeFieldEnd();
  }
  if (this.SDown !== null && this.SDown !== undefined) {
    output.writeFieldBegin('SDown', Thrift.Type.BOOL, 3);
    output.writeBool(this.SDown);
    output.writeFieldEnd();
  }
  if (this.DDown !== null && this.DDown !== undefined) {
    output.writeFieldBegin('DDown', Thrift.Type.BOOL, 4);
    output.writeBool(this.DDown);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Point = module.exports.Point = function(args) {
  this.x = null;
  this.y = null;
  this.z = null;
  if (args) {
    if (args.x !== undefined && args.x !== null) {
      this.x = args.x;
    }
    if (args.y !== undefined && args.y !== null) {
      this.y = args.y;
    }
    if (args.z !== undefined && args.z !== null) {
      this.z = args.z;
    }
  }
};
Point.prototype = {};
Point.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.DOUBLE) {
        this.x = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.y = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.z = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Point.prototype.write = function(output) {
  output.writeStructBegin('Point');
  if (this.x !== null && this.x !== undefined) {
    output.writeFieldBegin('x', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.x);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.y);
    output.writeFieldEnd();
  }
  if (this.z !== null && this.z !== undefined) {
    output.writeFieldBegin('z', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.z);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Pose = module.exports.Pose = function(args) {
  this.pos = null;
  this.ori = null;
  if (args) {
    if (args.pos !== undefined && args.pos !== null) {
      this.pos = new ttypes.Point(args.pos);
    }
    if (args.ori !== undefined && args.ori !== null) {
      this.ori = new ttypes.Point(args.ori);
    }
  }
};
Pose.prototype = {};
Pose.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.pos = new ttypes.Point();
        this.pos.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.ori = new ttypes.Point();
        this.ori.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Pose.prototype.write = function(output) {
  output.writeStructBegin('Pose');
  if (this.pos !== null && this.pos !== undefined) {
    output.writeFieldBegin('pos', Thrift.Type.STRUCT, 1);
    this.pos.write(output);
    output.writeFieldEnd();
  }
  if (this.ori !== null && this.ori !== undefined) {
    output.writeFieldBegin('ori', Thrift.Type.STRUCT, 2);
    this.ori.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

