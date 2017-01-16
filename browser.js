#!/usr/bin/env node

/**
 * Запускает тестирование через Webdriver
 * @param {String} url URL страницы с тестами
 * @param {String} [report=''] Путь к файлу отчета
 */
exports.run = function (url, report) {
   var config = {
      url: url,
      reportFile: report
   };
   require('./lib/browser').run(config);
};
