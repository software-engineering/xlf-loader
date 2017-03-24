/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Emanuel Schädler @emi
*/
module.exports = function(content) {
    if (this.builder && this.transpiler) {
        load.metadata.format = 'esm';
        return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + JSON.stringify(load.source) + ';';
    }
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
}
