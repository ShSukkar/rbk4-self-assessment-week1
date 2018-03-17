// your code here
var ExArray = function()
{
	var instance = {};

	instance.storage = [];
	_.extend(instance, Array);
	_.extend(instance, extraArrayMethods);

	return instance;
}

var extraArrayMethods = {};

extraArrayMethods.first = function()
{
	return  this.storage[0];
}

extraArrayMethods.last = function()
{
	return  this.storage[this.storage.length-1];
}
