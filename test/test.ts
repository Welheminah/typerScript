import assert from 'assert';

import greet from '../greet';

describe('My  Greet function', function() {
    it('should greet the person with his/her Firstname, Lastname and emails input', function() {
        // assert.equal("Hello, Bob, Crow", greet("Bob", "Crow"));
        assert.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({
            firstName : "Bob", 
            lastName : "Crow",
            email : "bob@crow.com"
          }));
    });
});