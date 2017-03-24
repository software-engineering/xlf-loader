/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Emanuel Schädler @emi
*/
module.exports = function(content) {
    if (this.builder && this.transpiler) {
        content.metadata.format = 'esm';
        return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + JSON.stringify(content.source) + ';';
    }
    content.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(content.source) + ';\n});';
}
