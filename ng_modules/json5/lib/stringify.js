'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};exports.default=stringify;var _util=require('./util');var util=_interopRequireWildcard(_util);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function stringify(value,replacer,space){var stack=[];var indent='';var propertyList=void 0;var replacerFunc=void 0;var gap='';var quote=void 0;if(replacer!=null&&(typeof replacer==='undefined'?'undefined':_typeof(replacer))==='object'&&!Array.isArray(replacer)){space=replacer.space;quote=replacer.quote;replacer=replacer.replacer}if(typeof replacer==='function'){replacerFunc=replacer}else if(Array.isArray(replacer)){propertyList=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=replacer[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var v=_step.value;var item=void 0;if(typeof v==='string'){item=v}else if(typeof v==='number'||v instanceof String||v instanceof Number){item=String(v)}if(item!==undefined&&propertyList.indexOf(item)<0){propertyList.push(item)}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}if(space instanceof Number){space=Number(space)}else if(space instanceof String){space=String(space)}if(typeof space==='number'){if(space>0){space=Math.min(10,Math.floor(space));gap='          '.substr(0,space)}}else if(typeof space==='string'){gap=space.substr(0,10)}return serializeProperty('',{'':value});function serializeProperty(key,holder){var value=holder[key];if(value!=null){if(typeof value.toJSON5==='function'){value=value.toJSON5(key)}else if(typeof value.toJSON==='function'){value=value.toJSON(key)}}if(replacerFunc){value=replacerFunc.call(holder,key,value)}if(value instanceof Number){value=Number(value)}else if(value instanceof String){value=String(value)}else if(value instanceof Boolean){value=value.valueOf()}switch(value){case null:return'null';case true:return'true';case false:return'false';}if(typeof value==='string'){return quoteString(value,false)}if(typeof value==='number'){return String(value)}if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){return Array.isArray(value)?serializeArray(value):serializeObject(value)}return undefined}function quoteString(value){var quotes={'\'':0.1,'"':0.2};var replacements={'\'':'\\\'','"':'\\"','\\':'\\\\','\b':'\\b','\f':'\\f','\n':'\\n','\r':'\\r','\t':'\\t','\x0B':'\\v','\0':'\\0','\u2028':'\\u2028','\u2029':'\\u2029'};var product='';var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=value[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var c=_step2.value;switch(c){case'\'':case'"':quotes[c]++;product+=c;continue;}if(replacements[c]){product+=replacements[c];continue}if(c<' '){var hexString=c.charCodeAt(0).toString(16);product+='\\x'+('00'+hexString).substring(hexString.length);continue}product+=c}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}var quoteChar=quote||Object.keys(quotes).reduce(function(a,b){return quotes[a]<quotes[b]?a:b});product=product.replace(new RegExp(quoteChar,'g'),replacements[quoteChar]);return quoteChar+product+quoteChar}function serializeObject(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var keys=propertyList||Object.keys(value);var partial=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=keys[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var key=_step3.value;var propertyString=serializeProperty(key,value);if(propertyString!==undefined){var member=serializeKey(key)+':';if(gap!==''){member+=' '}member+=propertyString;partial.push(member)}}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}var final=void 0;if(partial.length===0){final='{}'}else{var properties=void 0;if(gap===''){properties=partial.join(',');final='{'+properties+'}'}else{var separator=',\n'+indent;properties=partial.join(separator);final='{\n'+indent+properties+',\n'+stepback+'}'}}stack.pop();indent=stepback;return final}function serializeKey(key){if(key.length===0){return quoteString(key,true)}var firstChar=String.fromCodePoint(key.codePointAt(0));if(!util.isIdStartChar(firstChar)){return quoteString(key,true)}for(var i=firstChar.length;i<key.length;i++){if(!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))){return quoteString(key,true)}}return key}function serializeArray(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var partial=[];for(var i=0;i<value.length;i++){var propertyString=serializeProperty(String(i),value);partial.push(propertyString!==undefined?propertyString:'null')}var final=void 0;if(partial.length===0){final='[]'}else{if(gap===''){var properties=partial.join(',');final='['+properties+']'}else{var separator=',\n'+indent;var _properties=partial.join(separator);final='[\n'+indent+_properties+',\n'+stepback+']'}}stack.pop();indent=stepback;return final}}module.exports=exports['default'];