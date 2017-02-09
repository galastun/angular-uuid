export default angular.module('uuid', []).factory("uuid", uuid);

uuid.$inject = ['$window'];

function uuid($window){
	return {
		get: getUUID
	};
	
	/**
	 * Creates a UUID
	 * 
	 * @method getUUID
	 * @return {string}
	 */
	function getUUID() {
	  let d = (new Date()).getTime();
	  
	  if($window.performance && typeof $window.performance.now === "function"){
	      d += performance.now(); //use high-precision timer if available
	  }
	  
	  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = (d + Math.random()*16)%16 | 0;
	      d = Math.floor(d/16);
	      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	  });
	  
	  return uuid;
	}
}