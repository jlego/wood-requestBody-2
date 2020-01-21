/**
 * Wood Plugin Module.
 * 格式化输出结果中间件(扩展)
 * by guohualin on 2019-04-02
 */

module.exports = (app = {}, config = {}) => {
    app.requestbody = function(req, res, next){
      if (req.method == 'PUT') {
        if (req.body) {
            if (app.config.verifyParams && Array.isArray(app.config.verifyParams)){
                for (let param of app.config.verifyParams) {
                    const code = `error_body_${param}`;
                    if (!req.body[param]) return res.print(app.config.errorCode[code]);
                }
            }
        } else {
          res.print(app.config.errorCode.error_body);
          return;
        }
      }
      next();
    };
    app.application.use(app.requestbody);
    return app;
  }