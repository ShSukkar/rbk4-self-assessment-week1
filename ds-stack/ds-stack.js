var Stack = function()
{
    this._storage = [];
    this.add = function(val)
    {
      // write me
      this._storage.push(val);
    };
    this.remove = function() 
    {
      // write me
      var deletedVal = this._storage.pop(); //deleteing the val from the top of the slack using pop()
      return deletedVal;
    };
};