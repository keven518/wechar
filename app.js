'use strict'

var Koa = require('koa');
var path = require('path');
var wechat = require('./common/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');

var config = {
  wechat: {
    appID: 'wx457a7364ab4c771a',
    appSecret: '0eda981ae9f59f7abc2d8f17873e6b18',
    token: 'kezijin520',
    getAccessToken: function() {
      return util.readFileAsync(wechat_file);
    },
    saveAccessToken: function(data) {
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file, data);
    }
  }
};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(8083);
console.log('listening: 8083')