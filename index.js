var handlebars = require('handlebars');

module.exports = function (content, file, opt) {
    if (!file.isHbsFile) {
        return content;
    }
    content = handlebars.precompile(content.replace(/[\r\n]+\s*/gm, ""), opt);
    return 'Handlebars.template(' + content + ')';
};
