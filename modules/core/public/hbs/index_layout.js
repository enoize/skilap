{"layout":{"p":"layout","tf":"function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};\n  var buffer = \"\", stack1, stack2, options, functionType=\"function\", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  return \"Core\";\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = \"\", stack1, stack2, options;\n  buffer += \"\\n            <ul class=\\\"nav nav-pills\\\">\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack1 = helpers.pageUserActive) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.pageUserActive; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.pageUserActive) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_me_view), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack2 = helpers.pageUsersActive) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.pageUsersActive; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.pageUsersActive) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_user_view), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack2 = helpers.pageSystemSettingsActive) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.pageSystemSettingsActive; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.pageSystemSettingsActive) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_sysadmin), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n\t\t\t  <li>\\n\t\t\t\t<a href=\\\"/logout?success=\";\n  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"</a>\\n\t\t\t  </li>\\n            </ul>\\n           \";\n  return buffer;\n  }\nfunction program4(depth0,data) {\n  \n  \n  return \"class=\\\"active\\\"\";\n  }\n\nfunction program6(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/user\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program7(depth0,data) {\n  \n  \n  return \"My account\";\n  }\n\nfunction program9(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/users\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program10(depth0,data) {\n  \n  \n  return \"Manage users\";\n  }\n\nfunction program12(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/sysset\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program13(depth0,data) {\n  \n  \n  return \"System settings\";\n  }\n\nfunction program15(depth0,data) {\n  \n  \n  return \"Logout\";\n  }\n\nfunction program17(depth0,data) {\n  \n  \n  return \"Copyright by PushOk Software\";\n  }\n\n  buffer += \"<!DOCTYPE HTML>\\n<html lang=\\\"en-us\\\">\\n<head>\\n\t<meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=utf-8\\\">\\n\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\t<title>\";\n  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</title>\t\\n\t <!-- Le styles -->\t\\n\t<link href=\\\"/core/css/bootstrap.css\\\" rel=\\\"stylesheet\\\"> \t\\n\t<link href=\\\"/core/css/responsive.css\\\" rel=\\\"stylesheet\\\">\\n\t<link href=\\\"/core/css/main.css\\\" rel=\\\"stylesheet\\\">\t\\n    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\\n    <!--[if lt IE 9]>\\n      <script src=\\\"http://html5shim.googlecode.com/svn/trunk/html5.js\\\"></script>\\n    <![endif]-->\\n    <script type=\\\"text/javascript\\\" src=\\\"/common/js/require.min.js\\\"></script>\\n\t<script type=\\\"text/javascript\\\">\\n\t\tvar _apiToken = '\";\n  if (stack1 = helpers.apiToken) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.apiToken; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"';\\n\t\tvar _user = {_id:'\"\n    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + \"',language:\\\"\"\n    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.language)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + \"\\\"};\\n\t\tvar _prefix = '\";\n  if (stack2 = helpers.prefix) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.prefix; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"';\\n\t</script>\\n    <script type=\\\"text/javascript\\\" src=\\\"\";\n  if (stack2 = helpers.prefix) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.prefix; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"/js/app.js\\\"></script>    \\n</head>\\n<body>\\n\t<div class=\\\"navbar navbar-fixed-top navbar-inverse\\\">\\n      <div class=\\\"navbar-inner\\\">\\n        <div class=\\\"container\\\">\\n          <a class=\\\"btn btn-navbar\\\" data-toggle=\\\"collapse\\\" data-target=\\\".nav-collapse\\\">\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n          </a>\\n          <a href='/' id=\\\"logoNew\\\"></a>\\n\t\t  <a class=\\\"brand\\\" href=\\\"#\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"</a>          \\n          <div class=\\\"nav-collapse\\\">\\n          \";\n  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.loggedin), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n          </div><!--/.nav-collapse -->\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"container context\\\">\\n\t\t\";\n  stack2 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\t\\n    </div> \\n\t<footer class=\\\"footer\\\">\\n    <div class=\\\"container\\\">\t\\n\t\t<br><br><br><br>\\n\t\t<p class=\\\"well-small well\\\">&copy; \";\n  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \" 2011-2013</p>\\n\t</div>\\n\t</footer>\\n</body>\\n</html>\\n\";\n  return buffer;\n  }","mt":1366056444000,"pt":["content"]},"content":{"p":"content","tf":"function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, options, functionType=\"function\", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  return \"Welcome to SkiLap!\";\n  }\n\nfunction program3(depth0,data) {\n  \n  \n  return \"Following modules are available:\";\n  }\n\nfunction program5(depth0,data) {\n  \n  var buffer = \"\", stack1;\n  buffer += \"\\n\t\t\t<li>\\n\t\t\t\t<a class='modulName' href='\";\n  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"'>\";\n  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</a>\\n\t\t\t\t<div>\";\n  if (stack1 = helpers.desc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.desc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</div>\\n\t\t\t</li>\\n\t\t\";\n  return buffer;\n  }\n\nfunction program7(depth0,data) {\n  \n  \n  return \"Please note, you might need to log-in to get access to some modules.\";\n  }\n\n  buffer += \"<div class=\\\"row\\\">\\n\t<div class=\\\"span12\\\">\\n\t\t<h2 class=\\\"centered\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</h2>\\n\t</div>\\n</div>\\n<div class=\\\"row\\\">\\n\t<div class=\\\"span12\\\">\\n\t\t<h3>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</h3>\\n\t\t<ul class='modulesList'>\\n\t\t\";\n  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};\n  if (stack1 = helpers.modules) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.modules; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.modules) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n\t\t</ul>\\n\t\t<p>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</p>\\n\t</div>\\n\t\\n</div>\\n\";\n  return buffer;\n  }","mt":1351009083000,"pt":[]},"hogan":{"v":4,"st":"layout"}}