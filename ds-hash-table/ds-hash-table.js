var makeHashTable = function() 
{
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) 
      {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) 
      {
        //your code is here
        var index = hashFn(key, max);
        var tuple = [key, value];
        var bucket;
        if(this._storage[index] !== undefined)
        {
          bucket = this._storage[index];
          var i=0;
          var exist = false; // to check if the key is already exist in the hash table
          while(i < bucket.length && !exist)
          {
            if(bucket[i][0] === key)
            {
              bucket[i][1] = value; // over write the current value
              exist = true;
            }
          }

          if(exist === false)
          {
            bucket.push(tuple); // inserting the new tuple
          }
        }
        else //this._storage[index] is equal undefined, that means it's first time inserting in the index "index"
        {
          this._storage[index] = [tuple];
        }
        
      }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};