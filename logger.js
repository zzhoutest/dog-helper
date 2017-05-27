module.exports = {
	info: 'info',
	debug: 'debug',
	err: 'error',	
	log: function(tag, level, msg) {
		console.log(tag + ':' + level + ': ' + msg);
	},
	i: function(tag, msg) {
		this.log(tag, this.info, msg);
	},
	d: function(tag, msg) {
		this.log(tag, this.debug.info, msg);
	},
	e: function(tag, msg) {
		this.log(tag, this.err, msg);
	}
};