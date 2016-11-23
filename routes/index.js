/***************************************
 *主要页面有：
 *	
 *	/posts  ： 主页面，展示博客，游客能看到的页面
 *	/signup ： 注册页面
 *	/signin ： 登陆页面
 *  /signout： 登出页面
 *
 ***************************************/




module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  app.use(function (req, res) {
	if (!res.headersSent) {
		res.render('404');
		}
	});
};