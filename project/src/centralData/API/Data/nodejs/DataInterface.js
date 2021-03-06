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


var ttypes = require('./data_types');
//HELPER FUNCTIONS AND STRUCTURES

var DataInterface_GetGameData_args = function(args) {
  this.jsonData = null;
  if (args) {
    if (args.jsonData !== undefined && args.jsonData !== null) {
      this.jsonData = args.jsonData;
    }
  }
};
DataInterface_GetGameData_args.prototype = {};
DataInterface_GetGameData_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.jsonData = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetGameData_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetGameData_args');
  if (this.jsonData !== null && this.jsonData !== undefined) {
    output.writeFieldBegin('jsonData', Thrift.Type.STRING, 1);
    output.writeString(this.jsonData);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_GetGameData_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
DataInterface_GetGameData_result.prototype = {};
DataInterface_GetGameData_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetGameData_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetGameData_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_ExecuteTest_args = function(args) {
  this.testNumber = null;
  if (args) {
    if (args.testNumber !== undefined && args.testNumber !== null) {
      this.testNumber = args.testNumber;
    }
  }
};
DataInterface_ExecuteTest_args.prototype = {};
DataInterface_ExecuteTest_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.testNumber = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_ExecuteTest_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_ExecuteTest_args');
  if (this.testNumber !== null && this.testNumber !== undefined) {
    output.writeFieldBegin('testNumber', Thrift.Type.I32, 1);
    output.writeI32(this.testNumber);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_ExecuteTest_result = function(args) {
};
DataInterface_ExecuteTest_result.prototype = {};
DataInterface_ExecuteTest_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_ExecuteTest_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_ExecuteTest_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_ExecuteTests_args = function(args) {
};
DataInterface_ExecuteTests_args.prototype = {};
DataInterface_ExecuteTests_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_ExecuteTests_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_ExecuteTests_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_ExecuteTests_result = function(args) {
};
DataInterface_ExecuteTests_result.prototype = {};
DataInterface_ExecuteTests_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_ExecuteTests_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_ExecuteTests_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_RestartServer_args = function(args) {
};
DataInterface_RestartServer_args.prototype = {};
DataInterface_RestartServer_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_RestartServer_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_RestartServer_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_RestartServer_result = function(args) {
};
DataInterface_RestartServer_result.prototype = {};
DataInterface_RestartServer_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_RestartServer_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_RestartServer_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_GetTestCases_args = function(args) {
};
DataInterface_GetTestCases_args.prototype = {};
DataInterface_GetTestCases_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetTestCases_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetTestCases_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_GetTestCases_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
DataInterface_GetTestCases_result.prototype = {};
DataInterface_GetTestCases_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetTestCases_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetTestCases_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_GetTestResults_args = function(args) {
};
DataInterface_GetTestResults_args.prototype = {};
DataInterface_GetTestResults_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetTestResults_args.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetTestResults_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterface_GetTestResults_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
DataInterface_GetTestResults_result.prototype = {};
DataInterface_GetTestResults_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataInterface_GetTestResults_result.prototype.write = function(output) {
  output.writeStructBegin('DataInterface_GetTestResults_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DataInterfaceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
DataInterfaceClient.prototype = {};
DataInterfaceClient.prototype.seqid = function() { return this._seqid; };
DataInterfaceClient.prototype.new_seqid = function() { return this._seqid += 1; };

DataInterfaceClient.prototype.GetGameData = function(jsonData, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetGameData(jsonData);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetGameData(jsonData);
  }
};

DataInterfaceClient.prototype.send_GetGameData = function(jsonData) {
  var output = new this.pClass(this.output);
  var params = {
    jsonData: jsonData
  };
  var args = new DataInterface_GetGameData_args(params);
  try {
    output.writeMessageBegin('GetGameData', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_GetGameData = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_GetGameData_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetGameData failed: unknown result');
};

DataInterfaceClient.prototype.ExecuteTest = function(testNumber, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ExecuteTest(testNumber);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ExecuteTest(testNumber);
  }
};

DataInterfaceClient.prototype.send_ExecuteTest = function(testNumber) {
  var output = new this.pClass(this.output);
  var params = {
    testNumber: testNumber
  };
  var args = new DataInterface_ExecuteTest_args(params);
  try {
    output.writeMessageBegin('ExecuteTest', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_ExecuteTest = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_ExecuteTest_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

DataInterfaceClient.prototype.ExecuteTests = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ExecuteTests();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ExecuteTests();
  }
};

DataInterfaceClient.prototype.send_ExecuteTests = function() {
  var output = new this.pClass(this.output);
  var args = new DataInterface_ExecuteTests_args();
  try {
    output.writeMessageBegin('ExecuteTests', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_ExecuteTests = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_ExecuteTests_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

DataInterfaceClient.prototype.RestartServer = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_RestartServer();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_RestartServer();
  }
};

DataInterfaceClient.prototype.send_RestartServer = function() {
  var output = new this.pClass(this.output);
  var args = new DataInterface_RestartServer_args();
  try {
    output.writeMessageBegin('RestartServer', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_RestartServer = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_RestartServer_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

DataInterfaceClient.prototype.GetTestCases = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetTestCases();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetTestCases();
  }
};

DataInterfaceClient.prototype.send_GetTestCases = function() {
  var output = new this.pClass(this.output);
  var args = new DataInterface_GetTestCases_args();
  try {
    output.writeMessageBegin('GetTestCases', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_GetTestCases = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_GetTestCases_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetTestCases failed: unknown result');
};

DataInterfaceClient.prototype.GetTestResults = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_GetTestResults();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetTestResults();
  }
};

DataInterfaceClient.prototype.send_GetTestResults = function() {
  var output = new this.pClass(this.output);
  var args = new DataInterface_GetTestResults_args();
  try {
    output.writeMessageBegin('GetTestResults', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

DataInterfaceClient.prototype.recv_GetTestResults = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DataInterface_GetTestResults_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetTestResults failed: unknown result');
};
var DataInterfaceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
DataInterfaceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
DataInterfaceProcessor.prototype.process_GetGameData = function(seqid, input, output) {
  var args = new DataInterface_GetGameData_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetGameData.length === 1) {
    Q.fcall(this._handler.GetGameData.bind(this._handler),
      args.jsonData
    ).then(function(result) {
      var result_obj = new DataInterface_GetGameData_result({success: result});
      output.writeMessageBegin("GetGameData", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("GetGameData", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.GetGameData(args.jsonData, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_GetGameData_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetGameData", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetGameData", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DataInterfaceProcessor.prototype.process_ExecuteTest = function(seqid, input, output) {
  var args = new DataInterface_ExecuteTest_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ExecuteTest.length === 1) {
    Q.fcall(this._handler.ExecuteTest.bind(this._handler),
      args.testNumber
    ).then(function(result) {
      var result_obj = new DataInterface_ExecuteTest_result({success: result});
      output.writeMessageBegin("ExecuteTest", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("ExecuteTest", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.ExecuteTest(args.testNumber, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_ExecuteTest_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("ExecuteTest", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ExecuteTest", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DataInterfaceProcessor.prototype.process_ExecuteTests = function(seqid, input, output) {
  var args = new DataInterface_ExecuteTests_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ExecuteTests.length === 0) {
    Q.fcall(this._handler.ExecuteTests.bind(this._handler)
    ).then(function(result) {
      var result_obj = new DataInterface_ExecuteTests_result({success: result});
      output.writeMessageBegin("ExecuteTests", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("ExecuteTests", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.ExecuteTests(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_ExecuteTests_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("ExecuteTests", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ExecuteTests", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DataInterfaceProcessor.prototype.process_RestartServer = function(seqid, input, output) {
  var args = new DataInterface_RestartServer_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.RestartServer.length === 0) {
    Q.fcall(this._handler.RestartServer.bind(this._handler)
    ).then(function(result) {
      var result_obj = new DataInterface_RestartServer_result({success: result});
      output.writeMessageBegin("RestartServer", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("RestartServer", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.RestartServer(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_RestartServer_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("RestartServer", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("RestartServer", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DataInterfaceProcessor.prototype.process_GetTestCases = function(seqid, input, output) {
  var args = new DataInterface_GetTestCases_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetTestCases.length === 0) {
    Q.fcall(this._handler.GetTestCases.bind(this._handler)
    ).then(function(result) {
      var result_obj = new DataInterface_GetTestCases_result({success: result});
      output.writeMessageBegin("GetTestCases", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("GetTestCases", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.GetTestCases(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_GetTestCases_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetTestCases", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetTestCases", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DataInterfaceProcessor.prototype.process_GetTestResults = function(seqid, input, output) {
  var args = new DataInterface_GetTestResults_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetTestResults.length === 0) {
    Q.fcall(this._handler.GetTestResults.bind(this._handler)
    ).then(function(result) {
      var result_obj = new DataInterface_GetTestResults_result({success: result});
      output.writeMessageBegin("GetTestResults", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("GetTestResults", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.GetTestResults(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new DataInterface_GetTestResults_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetTestResults", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetTestResults", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
