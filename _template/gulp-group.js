"use strict";function gulpGroup(e,r){var t=new Stream.Transform({objectMode:!0});return e=e||{},r=r||"js",t._transform=function(t,n,a){var u=new StringDecoder("utf8"),c=u.write(t.contents),o=["w","i","d","g","e","t"].join(""),f=e.name+"-wrap";if("js"===r){var s=e.tpl?fs.readFileSync(e.tpl,"utf8"):"";s=s.replace(/(\\f|\\n|\\r|\\t|\\v)+/g,"").replace(/\s+/g," "),s=s?"<"+o+' class="'+f+'">'+s+"</"+o+">":s,e.template=s,c=var2value(c,e),t.contents=new Buffer(c,"utf-8")}else c=o+"."+f+"{"+c+"}",t.contents=new Buffer(c,"utf-8");a(null,t)},t}function var2value(e,r){var t=e.match(/<\%\=\w+\%>/g);return t&&t.forEach(function(t){var n=t.replace(/^<\%\=|\%>$/g,""),a=r[n]||"",u=new RegExp("<\\%\\="+n+"\\%>","g");e=e.replace(u,a)}),e}var Stream=require("stream"),Path=require("path"),StringDecoder=require("string_decoder").StringDecoder,fs=require("fs");module.exports=gulpGroup;